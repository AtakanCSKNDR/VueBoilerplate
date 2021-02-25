import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import i18n from "@/locales/index";
import vuetify from "./plugins/vuetify";
import ApiService from "./common/api.service";
import { FontawesomeServe } from "./fontawesome/font.awesome";
import Notifications from 'vue-notification'

ApiService.init();
FontawesomeServe(Vue);
Vue.use(Notifications);
Vue.config.productionTip = false;

new Vue({
  i18n,
  router,
  store,
  vuetify,
  render: (h) => h(App),
}).$mount("#app");
