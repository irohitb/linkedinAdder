chrome.runtime.sendMessage({todo: “ShowPageAction”})

var NumInviteInPage = document.querySelectorAll('button[data-control-name="srp_profile_actions"]').length

chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
if (request.odo == "startAdding") {
  var NumInviteInPage = document.querySelectorAll('button[data-control-name="srp_profile_actions"]').length
  var porfileSwipes = request.profiles
  var messageToSend = request.message
  var i = 0;


      setTimeout(function() {

              setTimeout(function() {
              document.querySelectorAll('button[data-control-name="srp_profile_actions"]')[i].click()
            }, 1000)

              setTimeout(function(){
              document.querySelector('button[class="button-primary-large ml1"]').click()
                i=i+1;
              }, 2000)

      if (i76 == limit) {
        clearInterval(interval);
          console.log("game over")
        }
      }, 5500)
    }

  loopLimit(request.rightSwipe)
}
