chrome.runtime.onMessage.addListener(function(request, sender, senderResponse){
  if (request.todo == "ShowPageAction") {
chrome.tabs.query({active:true, currentWindow:true}, function(tabs) {
      chrome.pageAction.show(tabs[0].id);
    })
  }
});


chrome.tabs.onUpdated.addListener(function(tabId, changeInfo, tab) {
        if (tab.status == 'complete') {
          chrome.tabs.sendMessage({tabId, urlUpdate: "Url-updated"});
        }
    });

  
