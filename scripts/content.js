chrome.runtime.sendMessage({todo:'ShowPageAction'});


//request.todo == "startAdding" from App.js
chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {


if (request.todo == "startAddingwithMessage") {

    window.scrollTo(0,document.body.scrollHeight);
    i = 0;
    var buttonA;
    var message = request.message;
    var FullName;
        var length

    setTimeout(function() {
      length =  document.querySelectorAll('button[data-control-name="srp_profile_actions"]').length
    }, 1000)
    
    setInterval(function() {
              setTimeout(function() {
              buttonA = document.querySelectorAll('button[data-control-name="srp_profile_actions"]')[i]
              buttonA = buttonA.getAttribute('aria-label');
              buttonA = buttonA.split("Connect With ").pop();
              console.log("buttonA")
              console.log(buttonA)
              FullName = buttonA
              const regex   = /\{FullName\}/gi;
              message = message.replace(regex, FullName)
              console.log("message")
              console.log(message)
              document.querySelectorAll('button[data-control-name="srp_profile_actions"]')[i].click()
                i=i+1;
            }, 1000)

              setTimeout(function(){
              document.querySelector('button[class="button-secondary-large mr1"]').click()
              document.getElementById('custom-message').value = message;
            }, 1600)

            setTimeout(function(){
            document.querySelector('button[class="button-primary-large ml1"]').click()
          }, 2200)


      }, 3000)
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
