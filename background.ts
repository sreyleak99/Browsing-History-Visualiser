chrome.history.onVisited.addListener((historyItem) => {
  chrome.storage.local.get('history', function(data) {
    const history = data.history || [];
    history.push(historyItem);
    chrome.storage.local.set({ 'history': history });
  });
});
