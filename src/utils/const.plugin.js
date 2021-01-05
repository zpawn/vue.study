import * as constants from '../constants';

export default {
  install(Vue) {
    // eslint-disable-next-line
    Vue.prototype.$const = function getConst(constName) {
      return constants[constName];
    };
  },
};
