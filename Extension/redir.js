chrome.webRequest.onBeforeRequest.addListener(
        function(details) { return {redirectUrl: "https://www.clubpenguinisland.com"}; },
        {urls: ["*://www.chegrg.com/*"]},
        ["blocking"]);