import $ from 'jquery';
import Vue from 'vue';
import App from "./App/App.vue";

Vue.component("options", App);
$('body').css('padding-left', '300px').append('<div id="app"></div>');

new Vue({
    el: "#app",
    render: h => h(App)
});