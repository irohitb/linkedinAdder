chrome.runtime.sendMessage({todo:'ShowPageAction'});


//request.todo == "startAdding" from App.js
chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {


if (request.todo == "startAddingwithMessage") {


    window.scrollTo(0,document.body.scrollHeight);
    var i = 0;
    var connectionAdded = i+1;
    var numberOfConnectionsToBeAdded = request.profiles;
    var buttonA;
    var message = request.message;
    var message1;
    var lengthoFConnectButton
    var FullName;
    var btnr

    setTimeout(function() {
      lengthoFConnectButton =  document.querySelectorAll('button[data-control-name="srp_profile_actions"]').length
    }, 700)

    var interval = setInterval(function(){

              setTimeout(function() {
              chrome.runtime.sendMessage({todo:'running', connectionAdded:connectionAdded, message:message, numberOfConnectionsToBeAdded: numberOfConnectionsToBeAdded, FullName:FullName  });
              i++;
              connectionAdded++;
              console.log(connectionAdded)
              buttonA = document.querySelectorAll('button[data-control-name="srp_profile_actions"]')[i]
              buttonA = buttonA.getAttribute('aria-label');
              btnr = buttonA.split("Connect with ").pop();
              FullName = btnr
              const regex   = /\{FullName\}/gi;
              message1 = message.replace(regex, FullName)
              document.querySelectorAll('button[data-control-name="srp_profile_actions"]')[i].click()
            }, 1200)

              setTimeout(function(){
              chrome.runtime.sendMessage({todo:'running', connectionAdded:connectionAdded, message:message, numberOfConnectionsToBeAdded: numberOfConnectionsToBeAdded, FullName:FullName  });
              document.querySelector('button[class="button-secondary-large mr1"]').click()
              document.getElementById('custom-message').value = message1;
            }, 1700)

            setTimeout(function(){
            chrome.runtime.sendMessage({todo:'running', connectionAdded:connectionAdded, message:message, numberOfConnectionsToBeAdded: numberOfConnectionsToBeAdded, FullName:FullName});
            document.querySelector('button[class="button-primary-large ml1"]').click()
          }, 2200)

          if (connectionAdded == lengthoFConnectButton) {
            chrome.runtime.sendMessage({todo:'stopped'});
            clearInterval(interval);
            }

      }, 2500)
}




if (request.todo == "startAddingWithoutMessage") {
  console.log("Without Message")
  console.log(request.profiles)

  var i;
    setTimeout(function() {
      i = 0;
              setTimeout(function() {
              document.querySelectorAll('button[data-control-name="srp_profile_actions"]')[i].click()
                i=i+1;
            }, 1000)

              setTimeout(function(){
              document.querySelector('button[class="button-primary-large ml1"]').click()
              console.log("Invitation Sent")
              }, 2000)


      }, 3000)

}
})



//Hey! {FullName}. Looking forward to having you in my professional network
