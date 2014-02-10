chrome.webRequest.onBeforeRequest.addListener(
    function(details) {
         var newUrl = details.url.replace(/(itunes.apple.com\/)(..)(\/app\/)/, function(match, p1, p2, p3){
           return [p1, 'us', p3].join('');
         });
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