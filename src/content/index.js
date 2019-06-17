import $ from 'jquery';
import Vue from 'vue';
import App from "./App/App.vue";
import mint, {Toast} from 'mint-ui';
import VueSocketIO from 'vue-socket.io';

Vue.use(new VueSocketIO({
    debug: true,
    connection: 'http://127.0.0.1:9099'
}));
Vue.use(mint);

$('body').css('padding-left', '300px').append('<div id="app"></div>');

$('body').append(`
    <link rel="stylesheet" href="https://unpkg.com/mint-ui/lib/style.css">
    <script src="https://unpkg.com/mint-ui/lib/index.js"></script>
   `);

new Vue({
    el: "#app",
    sockets: {
        connect() {
            Toast({
                message: '连接成功',
                position: 'bottom',
                duration: 500
            });
        },
    },
    render: h => h(App)
});