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
    alert("Number of invitation to be sent can't be negative or zero")
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
  if (request.todo == 'running') {
    console.log(request.connectionAdded)

    document.getElementById('LinkedIn-number').style.display = "none";
    document.getElementById("LinkedIn-Message").style.display = "none";

    document.getElementById("instruction").style.display = "none";
    document.getElementById("instruction1").style.display = "none";

    document.getElementById("linkedin-start").style.display = "none";
    document.getElementById("linkedin-stop").style.display = "block"
    document.getElementById("linkedin-stop").disabled = false;

    document.getElementById("InvitesSent").style.display = "block";
    document.getElementById("AddedNumber").innerHTML = request.connectionAdded

    document.getElementById("messageText").style.display="none";
    document.getElementById("numberText").style.display="none";
  }
  if (request.todo == 'stopped') {
    document.getElementById("linkedin-start").disabled = false;
    document.getElementById('LinkedIn-number').disabled = false;
    document.getElementById("LinkedIn-Message").disabled = false;
    document.getElementById("linkedin-stop").disabled = true;
    document.getElementById("InvitesSent").style.display = "none";
    document.getElementById("AddedNumber").value = "";
  }
})

/*
document.getElementById("LinkedIn-Message").placeholder = request.message;
document.getElementById('LinkedIn-number').placeholder = request.numberOfConnectionsToBeAdded;
document.getElementById("LinkedIn-Message").placeholder = true;
document.getElementById("linkedin-start").disabled = true;
document.getElementById('LinkedIn-number').disabled = true;
document.getElementById("LinkedIn-Message").disabled = true;
document.getElementById("linkedin-stop").disabled = false;
*/
