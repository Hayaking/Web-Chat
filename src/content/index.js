import $ from 'jquery'

(function insertElementIcons() {
    let sidebar;
    $('body').css({'padding-left': '300px'});
    sidebar = $("<div id='sidebar'></div>");
    sidebar.css({
        'position': 'fixed',
        'left': '0px',
        'top': '0px',
        'z-index': 9999,
        'width': '300px',
        'height': '100%',
        'background-color': 'blue'
    });
    $('body').append(sidebar);

    let url = window.location.href;
    chrome.runtime.sendMessage(url,function(response) {
        console.log('收到来自后台的回复：' + response);
    });
})();
