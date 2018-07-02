Completely lost on how to save extension popup window content
https://stackoverflow.com/questions/41284528/completely-lost-on-how-to-save-extension-popup-window-content/41289802#41289802

notes: Chrome extension runtime vs tab send message
Use runtime.sendMessage in your content script. Use tabs.sendMessage in your background/popup script. As for chrome.tabs.onUpdated, it's called many times for updates like favicon, title, etc. You need to check if (tab.status == 'complete) before sending a message to your content script
