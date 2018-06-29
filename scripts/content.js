chrome.runtime.sendMessage({todo:'ShowPageAction'});


//request.todo == "startAdding" from App.js
chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {


if (request.todo == "startAddingwithMessage") {

    window.scrollTo(0,document.body.scrollHeight);
    var i = 0;
    var j = i+1
    var buttonA;
    var message = request.message;
    var message1;
    var lengthoFConnectButton
    var FullName;

    setTimeout(function() {
      lengthoFConnectButton =  document.querySelectorAll('button[data-control-name="srp_profile_actions"]').length
       console.log(lengthoFConnectButton)
    }, 700)

    var interval = setInterval(function(){

              setTimeout(function() {
              i++;
              j++;
              console.log(i)
              console.log(j)
              buttonA = document.querySelectorAll('button[data-control-name="srp_profile_actions"]')[i]
              buttonA = buttonA.getAttribute('aria-label');
              buttonA = buttonA.split("Connect With ").pop();
              console.log(buttonA)
              FullName = buttonA
              console.log(FullName)
              const regex   = /\{FullName\}/gi;
              message1 = message.replace(regex, FullName)
              document.querySelectorAll('button[data-control-name="srp_profile_actions"]')[i].click()
            }, 1000)

              setTimeout(function(){
                console.log(message1)
              document.querySelector('button[class="button-secondary-large mr1"]').click()
              document.getElementById('custom-message').value = message1;
            }, 2000)

            setTimeout(function(){
            document.querySelector('button[class="button-primary-large ml1"]').click()
          }, 3000)

          if (j == lengthoFConnectButton) {
            clearInterval(interval);
            }

      }, 3500)
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
