var profilesNumbers;
var message;

document.getElementById("linkedin-start").addEventListener("click", function() {
  profiles = document.getElementById("LinkedIn-number").value;
  message = document.getElementById("LinkedIn-Message").value;

  if (profiles || profiles>0) {
    chrome.tabs.query({active: true, currentWindow:true}, function(tabs) {
    chrome.tabs.sendMessage(tabs[0].id, {todo: "startAdding", profiles: profiles, message:message})
    });
  }
})
