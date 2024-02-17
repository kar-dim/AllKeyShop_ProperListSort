browser.browserAction.onClicked.addListener(function(tab) {
    browser.tabs.executeScript(tab.id, {file: "main.js"})
        .catch(console.error);
});