const defaultFilters = [
    // "<all_urls>",
    "*://*.doubleclick.net/*",
    "*://partner.googleadservices.com/*",
    "*://*.googlesyndication.com/*",
    "*://*.google-analytics.com/*",
    "*://creative.ak.fbcdn.net/*",
    "*://*.adbrite.com/*",
    "*://*.exponential.com/*",
    "*://*.quantserve.com/*",
    "*://*.scorecardresearch.com/*",
    "*://*.zedo.com/*",
    // "*://*.youtube.com/*"   
]

var filters = { urls: defaultFilters};


function cancel(details) { //console.log("Canceling: " + requestDetails.url);
    return { cancel: true };
}

chrome.webRequest.onBeforeRequest.addListener(listener, filters, ["blocking"]);


function listener(e) { 
    console.log(e);
}