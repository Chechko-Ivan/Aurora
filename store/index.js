/* eslint-disable no-console */
import Vue from 'vue';
import Vuex from 'vuex';

import { SET_FIELD_VALUE, SET_FIELD_ERROR } from './mutations.js';
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

      formValid: true
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
      }
    },

    actions: {
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

          fetch('./mail.php', options)
            .then((data) => {
              return data.json();
            })
            .then((res) => {
              if (res.success) {
                vm.$notification.open({
                  class: 'custome-ant-notification',
                  message: 'ООО СЕКВОЙЯ',
                  duration: 7,
                  description: res.success
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
                  message: 'ООО СЕКВОЙЯ',
                  duration: 7,
                  description: res.error
                });
              }
            });
        } else {
          vm.$notification.open({
            class: 'custome-ant-notification',
            message: 'ООО СЕКВОЙЯ',
            duration: 7,
            description:
              'Проверьте правильность введенных данных и попробуйте еще раз.'
          });
        }
      }
    }
  });

export default store;
