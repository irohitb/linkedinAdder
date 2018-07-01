var profiles;
var message;

document.getElementById("linkedin-start").addEventListener("click", function() {

  profiles = document.getElementById("LinkedIn-number").value
  message = document.getElementById("LinkedIn-Message").value;


  if (profiles > 0 && message != null) {
    alert("Do not close, minimize and work on new tab while extension is working, Open new window to browse the web")
    document.getElementById("linkedin-start").disabled = true;
    document.getElementById('LinkedIn-number').disabled = true;
    document.getElementById("LinkedIn-Message").disabled = true;
    document.getElementById("linkedin-stop").disabled = false;
    chrome.tabs.query({active: true, currentWindow:true}, function(tabs) {
    chrome.tabs.sendMessage(tabs[0].id, {todo: "startAddingwithMessage", profiles: profiles, message:message})

    });
  }

  if (profiles > 0 && message == null) {
    alert("No message written! Do not close, minimize and work on new tab while extension is working, Open new window to browse the web")
    document.getElementById("linkedin-start").disabled = true;
    document.getElementById('LinkedIn-number').disabled = true;
    document.getElementById("LinkedIn-Message").disabled = true;
    document.getElementById("linkedin-stop").disabled = false;
    chrome.tabs.query({active: true, currentWindow:true}, function(tabs) {
      chrome.tabs.sendMessage(tabs[0].id, {todo: "startAddingWithoutMessage", profiles: profiles})
    });
  }

  if (profiles <= 0) {
    alert("Number of invitation to be sent can't be negative")
  }
})

document.getElementById("linkedin-stop").addEventListener("click", function() {
    chrome.tabs.query({active: true, currentWindow:true}, function(tabs) {
    chrome.tabs.sendMessage(tabs[0].id, {todo: "stopEverything"})
    document.getElementById("linkedin-start").disabled = false;
    document.getElementById("linkedin-stop").disabled = true;
  });
});

chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
      console.log("Message was here")
  if (request.todo == 'running') {
    console.log("Message is here")
    document.getElementById("linkedin-start").disabled = true;
    document.getElementById('LinkedIn-number').disabled = true;
    document.getElementById("LinkedIn-Message").disabled = true;
    document.getElementById("linkedin-stop").disabled = false;
  }
  if (request.todo == 'stopped') {
    document.getElementById("linkedin-start").disabled = false;
    document.getElementById('LinkedIn-number').disabled = false;
    document.getElementById("LinkedIn-Message").disabled = false;
    document.getElementById("linkedin-stop").disabled = true;
  }
})
