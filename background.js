chrome.history.onVisited.addListener(function (historyItem) {
    chrome.storage.local.get('history', function (data) {
        var history = data.history || [];
        history.push(historyItem);
        chrome.storage.local.set({ 'history': history });
    });
});
