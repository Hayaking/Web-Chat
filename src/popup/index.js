import Vue from "vue";
import AppComponent from "./App/App.vue";
import elementUI from 'element-ui';
import axios from 'axios';
import router from 'vue-router';

Vue.component("popup", AppComponent);
Vue.use(elementUI);
Vue.prototype.axios = axios;
new Vue({
    el: "#app",
    router,
    render: h => h(AppComponent)
});