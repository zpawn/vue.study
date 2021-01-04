export default {
  install(Vue) {
    // eslint-disable-next-line
    Vue.prototype.$message = function message(html) {
      // eslint-disable-next-line
      M.toast({ html })
    };

    // eslint-disable-next-line
    Vue.prototype.$error = function error(html) {
      // eslint-disable-next-line
      M.toast({ html: `[Ошибка]: ${html}` })
    };
  },
};
