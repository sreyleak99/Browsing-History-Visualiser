document.addEventListener('DOMContentLoaded', function() {
  const historyList = document.getElementById('historyList');
  chrome.history.search({ text: '', maxResults: 10 }, function(data) {
    data.forEach(function(item) {
      const li = document.createElement('li');
      const title = item.title || item.url;
      const url = item.url;
      const faviconUrl = `https://s2.googleusercontent.com/s2/favicons?domain=${url}`;
      li.innerHTML = `<img src="${faviconUrl}" alt="Favicon" style="width: 16px; height: 16px; margin-right: 5px;">
                      <strong>${title}</strong><br>
                      <a href="${url}" class="url" target="_blank">${url}</a>`;
      historyList.appendChild(li);
    });
  });
});
