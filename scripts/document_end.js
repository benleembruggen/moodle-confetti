var s = document.createElement('script');
s.src = chrome.runtime.getURL('scripts/confetti.min.js');
s.onload = function () {
  this.remove();
};
(document.head || document.documentElement).appendChild(s);

var s = document.createElement('script');
s.src = chrome.runtime.getURL('scripts/main.js');
s.onload = function () {
  this.remove();
};
(document.head || document.documentElement).appendChild(s);