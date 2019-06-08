import $ from 'jquery';
import Vue from 'vue';
import App from "./App/App.vue";


Vue.component("options", App);

Vue.component('my-checkbox', {
    template: `<div class="checkbox-wrapper" @click="check">
                                <div :class="{ checkbox: true, checked: checked }"></div>
                                <div class="title"></div>
                            </div>`,
    data() {
        return { checked: false, title: 'Check me' }
    },
    methods: {
        check() { this.checked = !this.checked; }
    }
});

var User= {
    name: 'haya'
};
var List={
    room:'菊爆大队',
    num:'100'
};
let url = window.location.href;

chrome.runtime.sendMessage(url, function (res) {
    $('<div id="app"></div>').appendTo($('body'));
    if (res !== undefined) {
        appendSideBar();
        console.log('收到来自后台的回复：' + res);
    }
});

function appendSideBar() {
    buildBody($('body'));
    buildIframe($("#h-iframe").contents().find("body"));
}
function buildBody(body) {
    const iframe = "<iframe id='h-iframe'></iframe>";
    //偏移300px
    body.css({'padding-left': '300px'});
    //添加iframe
    body.append(cssIframe($(iframe)));
}
function buildIframe(frameBody) {
    const content = "<my-checkbox class='h-content'></my-checkbox>";
    const head = '<div class="h-head"></div>';
    frameBody.css({'margin':'0'});
    //头部
    frameBody.append(cssHead(buildHead($(head))));
    //内容
    frameBody.append(cssContent(buildContent($(content))));
}
function buildHead(h) {
    return h.append(User.name);
}
function buildContent(c) {
    const board = '<div>board</div>';
    const editor = '<div><textarea rows="4"/><button>发送</button></div>';
    let b = cssBoard($(board));
    c.append(b);
    c.append($(editor));
    return c;
}
function cssIframe(i) {
    i.css({
        'position': 'fixed',
        'left': '0px',
        'top': '0px',
        'z-index': 9999,
        'width': '300px',
        'height': '100%',
        'background': '#fff'
    });
    return i;
}
function cssHead(h) {
    h.css({
        'text-align':'center',
        'vertical-align':'middle',
        'line-height': '30px',
        'height':'5%',
        'width': '100%',
        'background': '#aaa'
    });
    return h;
}
function cssContent(c) {
    c.css({
        'height': '95%',
        'background': '#f4f4f4'
    });
    return c;
}
function cssBoard(b) {
    b.css({
        'height': '90%',
        'background': '#f4e974'
    });
    return b;
}

new Vue({
    el: "#app",
    render: h => h(App)
});