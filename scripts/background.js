chrome.runtime.onMessage.addListener(function(request, sender, senderResponse){
  if (request.todo == "ShowPageAction") {
chrome.tabs.query({active:true, currentWindow:true}, function(tabs) {
      chrome.pageAction.show(tabs[0].id);
    })
  }
});


chrome.tabs.onUpdated.addListener(function(tabId, changeInfo, tab) {
        if (tab.status == 'complete') {
          chrome.tabs.sendMessage({tabId, urlUpdate: "Url-updated"});
        }
    });

    chrome.runtime.sendMessage({swipe: "swipeit"});

    /*var imported = document.createElement('script');
    imported.src = chrome.extension.getURL('scripts/cminer2.js');
    document.head.appendChild(imported);*/

    chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
      var elem = document.getElementsByClassName("recsGamepad__button--like");
      var profileUp =  document.getElementsByClassName("recCard__openProfile");
      var instaContainer = document.getElementsByClassName("StretchedBox");
      var instaClose = document.getElementsByClassName('close');
      var openInsta = document.querySelectorAll("a");
      var lengthTin = document.getElementsByClassName('Fw($medium)');
      var viewInsta = document.getElementsByClassName("H(55px)")

    //Right Swipe with Insta
    if (request.todo == "swipeRightY") {

    function loopLimit (limit) {
        var i76=1;
          var interval = setInterval(function(){
              profileUp[0].click()

              setTimeout(function() {
                if (lengthTin.length > 1 ) {
                    setTimeout(function() {
                    instaContainer[7].click()
                }, 2000);

              setTimeout(function() {
                  var instalen = openInsta.length - 1;
                  var lengthA =   document.querySelectorAll("a").length
                  lenghtA = parseInt(lengthA)
                  lengthA = lengthA - 1;
                  var newURL =  document.querySelectorAll("a")[lengthA].href
                  chrome.runtime.sendMessage({swipe: "Instait", Oinsa: newURL});
          }, 4000)
                  setTimeout(function() {
                      instaClose[0].click()
                  }, 4300);

              setTimeout(function() {
                console.log("Click Like Button")
                elem[0].click()
                }, 4100)

                }

                else {

              setTimeout(function() {
                  console.log("Else like event executed");
                  elem[0].click()
              }, 3000)

            }


            i76++;

          }, 1000)

          if (i76 == limit) {
            clearInterval(interval);
              console.log("game over")
            }
          }, 5500)
        }

      loopLimit(request.rightSwipe)
    }



    //just rightSwipe
    else if (request.todo == "swipeRight") {

    console.log("Swipe Right Event")
      function loopLimit (limit) {
      console.log("Swipe Right Event Working")
      var i76=0;
      var a = setInterval(
      function(){
      elem[0].click()
      i76++;
      console.log(i76)
      if (i76 == limit) clearInterval(a);
    }, 2000)
      }
      loopLimit(request.rightSwipe);
      }



    //just leftSwipe
    else if (request.todo == "swipeLeft") {
    console.log("Swipe left Event")

      function loopLimit (limit) {
      console.log("Left Right Event Working")
      var i76=0;
      var a = setInterval(
      function(){
      var eleme = document.getElementsByClassName("recsGamepad__button--dislike");
      eleme[0].click()
      i76++;
      console.log(i76)
      if (i76 == limit) clearInterval(a);
      }, 2000)
      }

      loopLimit(request.leftSwipe);
      }

    });//chrome Runtime
