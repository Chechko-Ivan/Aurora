export const state = () => ({
  locales: ['ru', 'en'],
  locale: 'ru'
});

export const mutations = {
  SET_LANG(state, locale) {
    if (state.locales.includes(locale)) {
      state.locale = locale;
    }
  }
};
