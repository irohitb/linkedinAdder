chrome.runtime.sendMessage({todo:'ShowPageAction'});


//request.todo == "startAdding" from App.js
chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
  console.log("here")
if (request.todo == "startAdding") {
  console.log("here")
}
  /*    setTimeout(function() {

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

*/
if (request.urlUpdate== "Url-updated") {
  console.log("here")
}
})
