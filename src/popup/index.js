import Vue from "vue";
import AppComponent from "./App/App.vue";

Vue.component("popup", AppComponent);

new Vue({
    el: "#app",
    render: createElement => {
        return createElement(AppComponent);
    }
});