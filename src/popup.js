document.addEventListener("DOMContentLoaded", function () {
    const button = document.getElementById("fullScreenButton");
    button.addEventListener("click", function () {
        chrome.tabs.query({
            active: true,
            currentWindow: true
        }, function(tabs) {
            chrome.scripting.executeScript({
                target: { tabId: tabs[0].id },
                function: function () {
                    let vid = document.getElementsByTagName('video')[0];
                    if (vid) {
                        vid.requestFullscreen();
                    } else {
                        console.error('No video element found');
                    }
                }
            });
        });
    });
});
