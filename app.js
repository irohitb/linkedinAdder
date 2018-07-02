//If you are here then you are probably going through the code, I know this looks messy and I should have created functions :(

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
  });
});




chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
  if (request.todo == 'running') {

    document.getElementById('LinkedIn-number').style.display = "none";
    document.getElementById("LinkedIn-Message").style.display = "none";

    document.getElementById("instruction").style.display = "none";
    document.getElementById("instruction1").style.display = "none";

    document.getElementById("linkedin-start").style.display = "none";
    document.getElementById("linkedin-stop").style.display = "block"
    document.getElementById("linkedin-stop").disabled = false;

    document.getElementById("totalInvitesToSend").style.display = "block"
    document.getElementById("totalInvitesToSendS").innerHTML = request.numberOfConnectionsToBeAdded
    document.getElementById("invitesSent").style.display = "block";
    document.getElementById("AddedNumber").innerHTML = request.connectionAdded;
    document.getElementById("invMessage").style.display = "block";
    document.getElementById("invMessageS").innerHTML = request.message;
    document.getElementById("currentlySendingM").style.display = "block";
    document.getElementById("currentlySendingMS").innerHTML = request.FullName;

    document.getElementById("messageText").style.display="none";
    document.getElementById("numberText").style.display="none";
  }
  if (request.todo == 'stopped') {
    stopSendingInvites()
  }
})

function stopSendingInvites () {

  document.getElementById('LinkedIn-number').style.display = "block";
  document.getElementById("LinkedIn-Message").style.display = "block";

  document.getElementById("instruction").style.display = "block";
  document.getElementById("instruction1").style.display = "block";

  document.getElementById("linkedin-start").style.display = "block";
  document.getElementById("linkedin-stop").style.display = "none"
  document.getElementById("linkedin-stop").disabled = true;

  document.getElementById("totalInvitesToSend").style.display = "none"
  document.getElementById("totalInvitesToSendS").innerHTML = "";
  document.getElementById("invitesSent").style.display = "none";
  document.getElementById("AddedNumber").innerHTML = "";
  document.getElementById("invMessage").style.display = "none";
  document.getElementById("invMessageS").innerHTML = "";
  document.getElementById("currentlySendingM").style.display = "none";
  document.getElementById("currentlySendingMS").innerHTML = "";

  document.getElementById("messageText").style.display="block";
  document.getElementById("numberText").style.display="block";
}
/*
document.getElementById("LinkedIn-Message").placeholder = request.message;
document.getElementById('LinkedIn-number').placeholder = request.numberOfConnectionsToBeAdded;
document.getElementById("LinkedIn-Message").placeholder = true;
document.getElementById("linkedin-start").disabled = true;
document.getElementById('LinkedIn-number').disabled = true;
document.getElementById("LinkedIn-Message").disabled = true;
document.getElementById("linkedin-stop").disabled = false;
*/
