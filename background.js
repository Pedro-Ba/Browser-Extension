const color = '#de3163';

chrome.runtime.onInstalled.addListener(() => {
	chrome.storage.sync.set({ color });
});

