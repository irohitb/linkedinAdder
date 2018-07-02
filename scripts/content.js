//If you are here then you are probably going through the code, I know this looks messy and I should have created functions :(


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
      var classExsist
      var cureentActivePage;
      var nextpageList

      //Finding and Incrementing the page Number of current activeClass
      function cureentActivePageNumber () {
      const el = document.querySelector("li.active");
      const currentPagePosition = [...el.parentNode.children].indexOf(el);
      nextPage = currentPagePosition + 1;
      console.log(nextPage)
      nextPageClick()
      }

      function nextPageClick () {
          i=0;
            var x = document.getElementsByClassName("page-list")[0];
            x = x.querySelectorAll('li')[nextPage]
            x.querySelectorAll('button')[0].click()

            var checkClassExsist = setInterval(function() {
              //checking if the page is loaded or not
              classExsist = document.getElementsByClassName('search-is-loading').length
              if (classExsist == 0) {
                window.scrollTo(0,document.body.scrollHeight);
                connectionAdder();
                clearInterval(checkClassExsist);
              }
            }, 600)
      }

//This scrolls the page down at starting
      setTimeout(function() {
        lengthoFConnectButton =  document.querySelectorAll('button[data-control-name="srp_profile_actions"]').length
      }, 400)


//This starts sending invites
function connectionAdder () {
      var interval = setInterval(function(){

        //If no of people on the page to be added are less than connect button
        if (lengthoFConnectButton > numberOfConnectionsToBeAdded ) {
          lengthoFConnectButton = numberOfConnectionsToBeAdded;
        }

        //If no of people on the page to be added are more than connect button
        if (connectionAdded == lengthoFConnectButton) {
          if ( numberOfConnectionsToBeAdded > lengthoFConnectButton) {
            lengthoFConnectButton = numberOfConnectionsToBeAdded - lengthoFConnectButton
            clearInterval(interval);
            setTimeout(function() {
            cureentActivePageNumber();
          }, 800) //THis will call new page click function
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
              connectionAdded++;
              if (connectionAdded != lengthoFConnectButton) {
                chrome.runtime.sendMessage({todo:'running', connectionAdded:connectionAdded, message:message, numberOfConnectionsToBeAdded: numberOfConnectionsToBeAdded, FullName:FullName});
              }
              document.querySelector('button[class="button-primary-large ml1"]').click()
            }, 2200)

            //THis will stop everything once the stop button is pressed and send a message to App.js to update the UI
              chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
              if (request.todo === "stopEverything") {
                chrome.runtime.sendMessage({todo:'stopped'});
                clearInterval(interval);
              }
            })

        }, 2500)
      }

    connectionAdder(); //This will start adding people
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


//Hey! {FullName}. Looking forward to having you in my professional network
