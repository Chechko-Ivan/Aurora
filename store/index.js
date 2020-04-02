/* eslint-disable no-console */
import Vue from 'vue';
import Vuex from 'vuex';

import {
  SET_LOCATION,
  SET_FIELD_VALUE,
  SET_FIELD_ERROR,
  TOGGLE_LOCK_FORM
} from './mutations.js';
import validateEmail from '~/assets/js/validateEmail.js';

Vue.use(Vuex);

const store = () =>
  new Vuex.Store({
    state: {
      name: {
        value: '',
        error: false
      },

      phone: {
        value: '',
        error: false
      },

      email: {
        value: '',
        error: false
      },

      message: {
        value: '',
        error: false
      },

      formValid: true,
      formLoked: false,
      location: ''
    },

    mutations: {
      [SET_FIELD_VALUE]: (state, { name, value }) => {
        state[name].value = value;
      },

      [SET_FIELD_ERROR]: (state, { name, payload }) => {
        if (!payload) {
          state.formValid = true;
        } else {
          state.formValid = false;
        }

        state[name].error = payload;
      },

      [TOGGLE_LOCK_FORM]: (state, payload) => {
        state.formLoked = payload;
      },

      [SET_LOCATION]: (state, location) => {
        state.location = location;
      }
    },

    actions: {
      getLocation: ({ commit }) => {
        // eslint-disable-next-line no-useless-return
        if (process.env.NODE_ENV === 'development') return;

        // fetch('https://avroraplast.ru/getRegion.php')
        //   .then((data) => data.json())
        //   .then((res) => {
        //     if (res.country) {
        //       commit(SET_LOCATION, res.country);
        //     }
        //   })
        //   .catch((error) => {
        //     console.error('ERROR: GET REGION', error);
        //   });
      },

      validate: ({ state, commit }) => {
        const { name, phone, email, message } = state;

        // Reset old erorors
        commit(SET_FIELD_ERROR, {
          name: 'name',
          payload: false
        });

        commit(SET_FIELD_ERROR, {
          name: 'phone',
          payload: false
        });

        commit(SET_FIELD_ERROR, {
          name: 'email',
          payload: false
        });

        commit(SET_FIELD_ERROR, {
          name: 'message',
          payload: false
        });

        if (!name.value) {
          commit(SET_FIELD_ERROR, {
            name: 'name',
            payload: true
          });
        }

        if (!phone.value) {
          commit(SET_FIELD_ERROR, {
            name: 'phone',
            payload: true
          });
        }

        if (!message.value) {
          commit(SET_FIELD_ERROR, {
            name: 'message',
            payload: true
          });
        }

        if (email.value && !validateEmail(email.value)) {
          commit(SET_FIELD_ERROR, {
            name: 'email',
            payload: true
          });
        }
      },

      sendForm: ({ dispatch, state, commit }, vm) => {
        commit(TOGGLE_LOCK_FORM, true);
        dispatch('validate');

        if (state.formValid) {
          const { name, phone, email, message } = state;

          const body = new FormData();
          body.append('name', name.value);
          body.append('phone', phone.value);
          body.append('email', email.value);
          body.append('message', message.value);

          const options = {
            method: 'POST',
            body
          };

          fetch('/mail.php', options)
            .then((data) => {
              return data.json();
            })
            .then((res) => {
              commit(TOGGLE_LOCK_FORM, false);
              if (res.success) {
                vm.$notification.open({
                  class: 'custome-ant-notification',
                  message: vm.$t('footer.organization_name'),
                  duration: 7,
                  description: vm.$t('form.messages.success_message')
                });

                vm.$metrika.reachGoal('zayavka');
                vm.$gtag.event('formasend', {
                  event_category: 'send',
                  event_action: 'zayavka'
                });

                commit(SET_FIELD_VALUE, {
                  name: 'name',
                  value: ''
                });

                commit(SET_FIELD_VALUE, {
                  name: 'phone',
                  value: ''
                });

                commit(SET_FIELD_VALUE, {
                  name: 'message',
                  value: ''
                });

                commit(SET_FIELD_VALUE, {
                  name: 'email',
                  value: ''
                });
              } else {
                vm.$notification.open({
                  class: 'custome-ant-notification',
                  message: vm.$t('footer.organization_name'),
                  duration: 7,
                  description: res.error
                });
              }
            })
            .catch(() => {
              vm.$notification.open({
                class: 'custome-ant-notification',
                message: vm.$t('footer.organization_name'),
                duration: 7,
                description: vm.$t('form.messages.error_message')
              });
              commit(TOGGLE_LOCK_FORM, false);
            });
        } else {
          commit(TOGGLE_LOCK_FORM, false);
          vm.$notification.open({
            class: 'custome-ant-notification',
            message: vm.$t('footer.organization_name'),
            duration: 7,
            description: vm.$t('form.messages.invalid_form')
          });
        }
      }
    }
  });

export default store;
