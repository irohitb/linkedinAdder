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
      var nextPage = 0

      function nextPage () {
            nextPage++;
            let x = document.getElementsByClassName("page-list")[0];
            x = x.querySelectorAll('li')[nextPage]
            x = x.querySelectorAll('button')[0].click()
      }

      setTimeout(function() {
        lengthoFConnectButton =  document.querySelectorAll('button[data-control-name="srp_profile_actions"]').length
      }, 700)

      var interval = setInterval(function(){

        if (lengthoFConnectButton > numberOfConnectionsToBeAdded ) {
          lengthoFConnectButton = numberOfConnectionsToBeAdded;
        }

        if (connectionAdded == lengthoFConnectButton) {
          if ( numberOfConnectionsToBeAdded > lengthoFConnectButton) {
            clearInterval(interval);
          } else {
          alert("Action Complete")
          chrome.runtime.sendMessage({todo:'stopped'});
          clearInterval(interval);
          }
        }

                setTimeout(function() {
                  if (connectionAdded != lengthoFConnectButton) {
                chrome.runtime.sendMessage({todo:'running', connectionAdded:connectionAdded, message:message, numberOfConnectionsToBeAdded: numberOfConnectionsToBeAdded, FullName:FullName  });
              }
                i++;
                buttonA = document.querySelectorAll('button[data-control-name="srp_profile_actions"]')[i]
                buttonA = buttonA.getAttribute('aria-label');
                btnr = buttonA.split("Connect with ").pop();
                FullName = btnr
                const regex   = /\{FullName\}/gi;
                message1 = message.replace(regex, FullName)
                document.querySelectorAll('button[data-control-name="srp_profile_actions"]')[i].click()
              }, 1200)

                setTimeout(function(){
                if (connectionAdded != lengthoFConnectButton) {
                chrome.runtime.sendMessage({todo:'running', connectionAdded:connectionAdded, message:message, numberOfConnectionsToBeAdded: numberOfConnectionsToBeAdded, FullName:FullName  });
              }
                document.querySelector('button[class="button-secondary-large mr1"]').click()
                document.getElementById('custom-message').value = message1;
              }, 1700)

              setTimeout(function(){
              if (connectionAdded != lengthoFConnectButton) {
              chrome.runtime.sendMessage({todo:'running', connectionAdded:connectionAdded, message:message, numberOfConnectionsToBeAdded: numberOfConnectionsToBeAdded, FullName:FullName});
            }
              document.querySelector('button[class="button-primary-large ml1"]').click()
              connectionAdded++;
            }, 2200)

              chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
              if (request.todo === "stopEverything") {
                chrome.runtime.sendMessage({todo:'stopped'});
                clearInterval(interval);
              }
            })

        }, 2500)
  }




  if (request.todo == "startAddingWithoutMessage") {
    console.log("Without Message")
    console.log(request.profiles)

    var i = 0;
    var connectionAdded = i+1;
    var numberOfConnectionsToBeAdded = request.profiles;
    var buttonA;
    var message = "No message entered"
    var message1;
    var lengthoFConnectButton
    var FullName;
    var btnr

    setTimeout(function() {
      lengthoFConnectButton =  document.querySelectorAll('button[data-control-name="srp_profile_actions"]').length
    }, 700)

  var interval = setInterval(function(){

                setTimeout(function() {

                  if (lengthoFConnectButton > numberOfConnectionsToBeAdded ) {
                    lengthoFConnectButton = numberOfConnectionsToBeAdded;
                  }

                  i++
                  chrome.runtime.sendMessage({todo:'running', connectionAdded:connectionAdded, message:message, numberOfConnectionsToBeAdded: numberOfConnectionsToBeAdded, FullName:FullName});
                  buttonA = document.querySelectorAll('button[data-control-name="srp_profile_actions"]')[i]
                  buttonA = buttonA.getAttribute('aria-label');
                  btnr = buttonA.split("Connect with ").pop();
                  FullName = btnr
                  const regex   = /\{FullName\}/gi;
                  message1 = message.replace(regex, FullName)
                  document.querySelectorAll('button[data-control-name="srp_profile_actions"]')[i].click()
              }, 1000)

                setTimeout(function(){
                chrome.runtime.sendMessage({todo:'running', connectionAdded:connectionAdded, message:message, numberOfConnectionsToBeAdded: numberOfConnectionsToBeAdded, FullName:FullName});
                document.querySelector('button[class="button-primary-large ml1"]').click()
              }, 1500)

                if (connectionAdded == lengthoFConnectButton) {
                  chrome.runtime.sendMessage({todo:'stopped'});
                  clearInterval(interval);
                  }

                  chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
                  if (request.todo === "stopEverything") {
                    chrome.runtime.sendMessage({todo:'stopped'});
                    clearInterval(interval);
                  }
                })

        }, 2000)
      }
})


<button data-ember-action="" data-ember-action-6289="6289" data-is-animating-click="true">2</button>
//Hey! {FullName}. Looking forward to having you in my professional network
<li class="page-list">
      <ol>
            <li class="active">1</li>
            <li><button data-ember-action="" data-ember-action-8344="8344" data-is-animating-click="true">2</button></li>
            <li><button data-ember-action="" data-ember-action-8346="8346">3</button></li>
            <li><button data-ember-action="" data-ember-action-8348="8348">4</button></li>
            <li><button data-ember-action="" data-ember-action-8350="8350">5</button></li>
            <li><button data-ember-action="" data-ember-action-8352="8352">6</button></li>
            <li><button data-ember-action="" data-ember-action-8354="8354">7</button></li>
            <li><button data-ember-action="" data-ember-action-8356="8356">8</button></li>
            <li><button data-ember-action="" data-ember-action-8358="8358">9</button></li>
            <li><button data-ember-action="" data-ember-action-8360="8360">10</button></li>
      </ol>
    </li>
