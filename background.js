chrome.webRequest.onBeforeRequest.addListener(
    function(details) {
         var newUrl = details.url.replace(/\/(..)\/app/, '/us/app');
         return {redirectUrl: newUrl};
    },
    {
        urls: [
            "*://itunes.apple.com/*",
        ],
        types: ["main_frame", "sub_frame", "stylesheet", "script", "image", "object", "xmlhttprequest", "other"]
    },
    ["blocking"]
);