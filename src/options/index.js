import Vue from "vue";
import AppComponent from "./App/App.vue";

Vue.component("options", AppComponent);

new Vue({
  el: "#app",
  render: h => h(AppComponent)
});
