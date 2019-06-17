
chrome.runtime.onMessage.addListener((request, sender, sendResponse)=> {
    let token=localStorage.getItem("haya_token");
    sendResponse(token);
});

