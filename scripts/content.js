//If you are here then you are probably going through the code, I know this looks messy and I should have created functions also variables are declared in a very stupid way. :(


chrome.runtime.sendMessage({todo:'ShowPageAction'});


//request.todo == "startAdding" from App.js
chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {

  if (request.todo == "startAddingwithMessage") {
      window.scrollTo(0,document.body.scrollHeight);
      //Vaiables Declaration
      var i = 0;
      var connectionAddedinThisSession = 0;
      var connectionAdded = 0;
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
      var remainingConnectionsToBeAdded;
      //var remaingConnectionsToBeAdded

//Functions
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
          setTimeout(function() {
            lengthoFConnectButton =  document.querySelectorAll('button[data-control-name="srp_profile_actions"]').length
            if (lengthoFConnectButton >  remainingConnectionsToBeAdded) {
              lengthoFConnectButton = remainingConnectionsToBeAdded
            }
            connectionAdder();
          }, 500)
          clearInterval(checkClassExsist);
        }
    }, 600)
}
      //Finding and Incrementing the page Number of current activeClass
      function cureentActivePageNumber () {
      const el = document.querySelector("li.active");
      const currentPagePosition = [...el.parentNode.children].indexOf(el);
      nextPage = currentPagePosition + 1;
      console.log(nextPage)
      nextPageClick()
      }

  //clicking on Nextpage button and calling sending invite function
      function nextPageToggler() {
          console.log("nextPage Toggler")
            remainingConnectionsToBeAdded = numberOfConnectionsToBeAdded - connectionAdded;
            lengthoFConnectButton = 0;
            connectionAddedinThisSession = 0;

            clearInterval(interval);

            setTimeout(function() {
              cureentActivePageNumber();
            }, 1000) //THis will call new page click function

          }

//This scrolls the page down at starting
      setTimeout(function() {
        lengthoFConnectButton =  document.querySelectorAll('button[data-control-name="srp_profile_actions"]').length
        if (lengthoFConnectButton > numberOfConnectionsToBeAdded ) {
          lengthoFConnectButton = numberOfConnectionsToBeAdded;
        }
      }, 400)




//This starts sending invites
function connectionAdder () {
      var interval = setInterval(function(){

        function stopped() {
          alert("Invitation sent Complete :)")
          chrome.runtime.sendMessage({todo:'stopped'});
          clearInterval(interval)
        }

        function nextPageToggler() {
            console.log("nextPage Toggler")
              remainingConnectionsToBeAdded = numberOfConnectionsToBeAdded - connectionAdded;
              lengthoFConnectButton = 0;
              connectionAddedinThisSession = 0;

              clearInterval(interval);

              setTimeout(function() {
                cureentActivePageNumber();
              }, 1000) //THis will call new page click function

            }
//SET TIMEOUT FUNCTIONS
                setTimeout(function() {
                  if (connectionAdded < numberOfConnectionsToBeAdded && connectionAddedinThisSession < lengthoFConnectButton) {
                    console.log("Connect button inside")
                    chrome.runtime.sendMessage({todo:'running', connectionAdded:connectionAdded, message:message, numberOfConnectionsToBeAdded: numberOfConnectionsToBeAdded, FullName:FullName});
                    buttonA = document.querySelectorAll('button[data-control-name="srp_profile_actions"]')[i]
                    buttonA = buttonA.getAttribute('aria-label');
                    btnr = buttonA.split("Connect with ").pop();
                    FullName = btnr
                    const regex   = /\{FullName\}/gi;
                    message1 = message.replace(regex, FullName)
                    document.querySelectorAll('button[data-control-name="srp_profile_actions"]')[i].click()
                  }
                  if (connectionAdded == numberOfConnectionsToBeAdded) {
                    stopped()
                  }
                  if (connectionAddedinThisSession >= lengthoFConnectButton && connectionAdded < numberOfConnectionsToBeAdded) {
                    nextPageToggler()
                  }
                }, 1200)

                setTimeout(function(){
                  if (connectionAdded < numberOfConnectionsToBeAdded && connectionAddedinThisSession < lengthoFConnectButton) {
                    console.log("Messages button inside")
                    chrome.runtime.sendMessage({todo:'running', connectionAdded:connectionAdded, message:message, numberOfConnectionsToBeAdded: numberOfConnectionsToBeAdded, FullName:FullName  });
                    document.querySelector('button[class="button-secondary-large mr1"]').click()
                    document.getElementById('custom-message').value = message1;
                  }
                }, 1700)

              setTimeout(function(){
                if (connectionAdded < numberOfConnectionsToBeAdded && connectionAddedinThisSession < lengthoFConnectButton) {
                  console.log("Send Invite button inside")
                  chrome.runtime.sendMessage({todo:'running', connectionAdded:connectionAdded, message:message, numberOfConnectionsToBeAdded: numberOfConnectionsToBeAdded, FullName:FullName});
                  document.querySelector('button[class="button-primary-large ml1"]').click()
                  i++;
                  connectionAdded++;
                  connectionAddedinThisSession++;
                }
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

    connectionAdder();
  } //This will start adding people



  if (request.todo == "startAddingWithoutMessage") {
    window.scrollTo(0,document.body.scrollHeight);
    //Vaiables Declaration
    var i = 0;
    var connectionAddedinThisSession = 0;
    var connectionAdded = 0;
    var numberOfConnectionsToBeAdded = request.profiles;
    var buttonA;
    var message = "";
    var message1;
    var lengthoFConnectButton
    var FullName;
    var btnr
    var nextPage = 0
    var classExsist
    var cureentActivePage;
    var nextpageList
    var remainingConnectionsToBeAdded;
    //var remaingConnectionsToBeAdded

//Functions
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
        setTimeout(function() {
          lengthoFConnectButton =  document.querySelectorAll('button[data-control-name="srp_profile_actions"]').length
          if (lengthoFConnectButton >  remainingConnectionsToBeAdded) {
            lengthoFConnectButton = remainingConnectionsToBeAdded
          }
          connectionAdder();
        }, 500)
        clearInterval(checkClassExsist);
      }
  }, 600)
}
    //Finding and Incrementing the page Number of current activeClass
    function cureentActivePageNumber () {
    const el = document.querySelector("li.active");
    const currentPagePosition = [...el.parentNode.children].indexOf(el);
    nextPage = currentPagePosition + 1;
    console.log(nextPage)
    nextPageClick()
    }

//clicking on Nextpage button and calling sending invite function
    function nextPageToggler() {
        console.log("nextPage Toggler")
          remainingConnectionsToBeAdded = numberOfConnectionsToBeAdded - connectionAdded;
          lengthoFConnectButton = 0;
          connectionAddedinThisSession = 0;

          clearInterval(interval);

          setTimeout(function() {
            cureentActivePageNumber();
          }, 1000) //THis will call new page click function

        }

//This scrolls the page down at starting
    setTimeout(function() {
      lengthoFConnectButton =  document.querySelectorAll('button[data-control-name="srp_profile_actions"]').length
      if (lengthoFConnectButton > numberOfConnectionsToBeAdded ) {
        lengthoFConnectButton = numberOfConnectionsToBeAdded;
      }
    }, 400)




//This starts sending invites
function connectionAdder () {
    var interval = setInterval(function(){

      function stopped() {
        alert("Invitation sent Complete :)")
        chrome.runtime.sendMessage({todo:'stopped'});
        clearInterval(interval)
      }

      function nextPageToggler() {
          console.log("nextPage Toggler")
            remainingConnectionsToBeAdded = numberOfConnectionsToBeAdded - connectionAdded;
            lengthoFConnectButton = 0;
            connectionAddedinThisSession = 0;

            clearInterval(interval);

            setTimeout(function() {
              cureentActivePageNumber();
            }, 1000) //THis will call new page click function

          }
//SET TIMEOUT FUNCTIONS
              setTimeout(function() {
                if (connectionAdded < numberOfConnectionsToBeAdded && connectionAddedinThisSession < lengthoFConnectButton) {
                  console.log("Connect button inside")
                  chrome.runtime.sendMessage({todo:'running', connectionAdded:connectionAdded, message:message, numberOfConnectionsToBeAdded: numberOfConnectionsToBeAdded, FullName:FullName});
                  buttonA = document.querySelectorAll('button[data-control-name="srp_profile_actions"]')[i]
                  buttonA = buttonA.getAttribute('aria-label');
                  btnr = buttonA.split("Connect with ").pop();
                  FullName = btnr
                  document.querySelectorAll('button[data-control-name="srp_profile_actions"]')[i].click()
                }
                if (connectionAdded == numberOfConnectionsToBeAdded) {
                  stopped()
                }
                if (connectionAddedinThisSession >= lengthoFConnectButton && connectionAdded < numberOfConnectionsToBeAdded) {
                  nextPageToggler()
                }
              }, 1200)

              setTimeout(function(){
                if (connectionAdded < numberOfConnectionsToBeAdded && connectionAddedinThisSession < lengthoFConnectButton) {
                  console.log("Messages button inside")
                  chrome.runtime.sendMessage({todo:'running', connectionAdded:connectionAdded, message:message, numberOfConnectionsToBeAdded: numberOfConnectionsToBeAdded, FullName:FullName  });
                  document.querySelector('button[class="button-secondary-large mr1"]').click()
                }
              }, 1700)

            setTimeout(function(){
              if (connectionAdded < numberOfConnectionsToBeAdded && connectionAddedinThisSession < lengthoFConnectButton) {
                console.log("Send Invite button inside")
                chrome.runtime.sendMessage({todo:'running', connectionAdded:connectionAdded, message:message, numberOfConnectionsToBeAdded: numberOfConnectionsToBeAdded, FullName:FullName});
                document.querySelector('button[class="button-primary-large ml1"]').click()
                i++;
                connectionAdded++;
                connectionAddedinThisSession++;
              }
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
  connectionAdder();
  }
})



//Hey! {FullName}. Looking forward to having you in my professional network
