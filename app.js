var swipesV = document.getElementById('nswipes').value


document.getElementById('right-btn').addEventListener("click", function(){
    chrome.tabs.query({active: true, currentWindow:true}, function(tabs) {
    chrome.tabs.sendMessage(tabs[0].id, {todo: "swipeRight", rightSwipe: swipesV})
    });
});

document.getElementById('left-btn').addEventListener("click", function(){
    chrome.tabs.query({active: true, currentWindow:true}, function(tabs) {
    chrome.tabs.sendMessage(tabs[0].id, {todo: "swipeLeft", leftSwipe: swipesV})
    });
});
