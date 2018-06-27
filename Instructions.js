//All chrome API's are asynchronous in nature

//Important
The current window

In manifest file, we can set different file icon size by changing the size to 64, 128, 186

Browser Action vs Page Action
Browser Action tells the chrome that our extension is browser action extension.
About Browser Action from chrome Community: https://developer.chrome.com/extensions/browserAction


Index HTML
//-----------------------
This where what is displayed in Pop-up will go
We specify this in page action, default_popup
"page_action": {
"default_Icon": "images/icon128.png",
"default_popup": "index.html",
"default_title": "linkedinSwipeMaster"
},

Content Script vs Background Script
//-----------------------
https://medium.com/@vanessajimenez_85032/chrome-extensions-content-scripts-vs-background-scripts-7bbd01f9dbe6`

->Content Script
These are simply JavaScript files that run in the context of the web page you are currently on. In other words, you are capable of retrieving details from web pages or make changes to them. For example, if you want to write a function that simple console.logs any details about your web page, such as the the window location, this function would be written in your content script.
--Can change the DOM
--Font Color, Hyperlinks, Structure DOM
---Limitation
---Can't use all chrome API's
Execution Environment
--> Execute in the special environment known as isolated world
--> Don't have access to the variable or function running in the webpage
--> If there is alert functon on a webpage having its own function and select the button using content script and want to run our own function, in that case both the function will run

We run Content Script like this:
"content_scripts" : [
  {
    "matches": ["https://linkedin.com/*"],
    "js": ["Scripts/content.js"]
  }
],
//Matches here tell where our content Script should run
//"js": ["Scripts/content.js"] which Javascript to run
//We also need to take permission for the same hence
"permissions": [
  "tabs",
  "https://linkedin.com/*"



-> Background Script
When we want code to be running in the background

*Presistent Script
A persistent background page exists during the lifetime of the extension and only one instance of it actively running in the background of the Chrome browser waiting for the user to interact with the extension.
The background page can be used to maintain state and acts as a controller for the rest of the extensions UI pages.
Background Page run at all time
consumers resources even when not required
Example: Context Menu

*Event Page
An event page is another form of a background script that is initially run, but then once the script goes idle it is unloaded and is only loaded again when it is needed, usually this is the case in response to some event. Essentially, this just tells Chrome not to keep the background page loaded in memory all the time
For example, if you want to write a function that simple console.logs any details about your extension, such as any information saved to local storage, this function would be written in your background script.
They run only when required
Example: When we want the popup icon to highlight in specific page

To run the app in the background we need to specific it in manifest.json

    "background" : {
      "scripts": ["Scripts/event.js"],
      "persistent": false
    },

Note here: When it's false, the background page automatically unloads after 5 seconds of no activity, that is when no listeners were invoked for 5 seconds. Note, the background page is a separate hidden page which is not related to the web pages in any way. See the documentation for more details.
  Content Script vs Event Script
  //Content Script can't highlight page Action icon but event script can
  //Pop script can't change the dom of the website
  //ContentScript and EvenScript by sending message
  //chrome.runtime.sendMessage({todo: "ShowPageAction"})
  //We Send message though chrome.runtime.onMessage.addListener(function(request, sender, sendResponse))


//-----------------------

//Options page
Whenever we use options page, we need to specify in Manifest.json
something like this "options_page" : "options.html",
In Javascript to close the current Tab
https://stackoverflow.com/questions/2076299/how-to-close-current-tab-in-a-browser-window
Allows user to configure your extension
In your manifest file: “Option_page”:
“options.html”
Use LocalStorage to save options
use chrome storage to save
-> Supports the storage of objects
-> Data is synced with chrome Sync (Synchronize with all other chrome page)
-> UI is provided by the option page -> not important



Chrome Storage
//-----------
https://developer.chrome.com/apps/storage
User data can be automatically synced with Chrome sync (using storage.sync).
Your app's content scripts can directly access user data without the need for a background page.
A user's extension settings can be persisted even when using split incognito behavior.
It's asynchronous with bulk read and write operations, and therefore faster than the blocking and serial localStorage API.
User data can be stored as objects (the localStorage API stores data in strings).
Enterprise policies configured by the administrator for the extension can be read (using storage.managed with a schema).
Needs to be declared in the manifest.json file

chrome.storage.sync.get(["total", "limit"], function (budget)  {
    document.getElementById('limit').innerHTML = budget.limit;
  });

to use the values of array we do something like
budget.total , budegt.limit


//Changes in storage event listener

https://developer.chrome.com/extensions/storage
 chrome.storage.onChanged.addListener(function(changes, namespace) {
   //This can be used to set value of badges or something like that
   changes variable contains all the variable that changed in the storage
   //Whenever total changes we have two values new value and old value
   //Suppose we want to use new value (and we have total in storage, hence we do)
   changes.total.newValue

//TO set the value we do something like

          chrome.storage.sync.set({'total': newtotal}, function() {

        if (amount && newtotal >= budget.limit) {
        var notifOption = {
          type: 'basic',
          iconUrl: "icon128.png",
          title: "Oops",
          message: "You have reached your limit"
        };
          chrome.notifications.create("notifIntro", notifOption, function() {
            console.log("created");
          });
        }
      });


//Notiication
//-----------------------
//To use Notification you need to specify in manifest like this
storage
"permissions": [
  "storage"
  "tabs",
  "https://linkedin.com/*"
  "Notification"
]
//-----------------------


//to create notification
//Following from the above mentioned example
if (amount && newtotal >= budget.limit) {
         var notifOption = {
           type: 'basic',
           iconUrl: "icon128.png",
           title: "Oops",
           message: "You have reached your limit"
         };
           chrome.notifications.create("notifIntro", notifOption, function() {
             console.log("created");
           });
         }
       });

//We can change the type to the type of notification we want
 chrome.notifications.create("notifIntro", notifOption, function() { creates notification, it takes two parameters (and maybe a function)
   //The first one is the ID for the notification
   //Second one is the option, what are the options for this notifcation which we created here
   var notifOption = {
     type: 'basic',
     iconUrl: "icon128.png",
     title: "Oops",
     message: "You have reached your limit"
   };



//Context Menu
Right Click shows options, we can add things into that options this is known as context menu
Context menu is the example of something running in the background
We need to take permission
"permissions": [
  "storage"
  "tabs",
  "https://linkedin.com/*"
  "Notification"
  contextMenu
]

To use we need to create an object (background Page)
We need to take permission
"background" : {
  "scripts": ["eventpage.js"],
  "persistent": false
},

var contextMenusI = {
  "id": "spendMoney",
  "title": "SpendMoney",
  "contexts": ["selection"]
};
chrome.contextMenus.create(contextMenusI); //this will show our app context menu


//Badges
Badges Show the value of on the icon
Browser actions can optionally display a badge — a bit of text that is layered over the icon. Badges make it easy to update the browser action to display a small amount of information about the state of the extension.
Because the badge has limited space, it should have 4 characters or less.

https://developer.chrome.com/extensions/browserAction

Badges are usually used if there is a change in chrome storage value
chrome.storage.onChanged.addListener(function(changes, namespace) {
  hrome.browserAction.setBadgeText(object details, function callback)


//Page Action Extension
Works on only those pages where it is required
For page action we do something like this in our manifest.json
"page_action": {
  "default_Icon": "images/icon128.png",
  "default_popup": "index.html",
  "default_title": "linkedinSwipeMaster"
},
Defualt title is the title that appears when we hover over the icon
For pageAction we need to explicitly ask chrome to highlight the icon and make the popup accesible

Code to highlight and make it accesible needs to go in event page but before that we need to declare it in the manifest (the script which needs to be loaded)

    "background" : {
      "scripts": ["Scripts/event.js"],
      "persistent": false
    },

//We also need to take permission since we need to highlight it on the specific tabs hence we need the permission to view the tabs
"permissions": [
  "tabs",
]

  //then in event.js file we can do something like this
  chrome.tabs.query({active:true, currentWindow:true}, function(tabs){
    chrome.pageAction.show(tabs[0].id)
  })

  //({active:true, currentWindow:true} -> tells us about our current tab
  //function(tabs)  -> gives array of tab
  //chrome.pageAction.show(tabs[0].id) since active:true, currentWindow:true this means the tab we are currently on and hence it is on the top of array which means selecting 0 will show us the current tab

//But this does not tell on which we need to highlight
//To know this we use contentScript
"content_scripts" : [
  {
    "matches": ["https://linkedin.com/*"],
    "js": ["Scripts/content.js"]
  }
],

and then in Tabs we add
"permissions": [
  "tabs",
  "https://linkedin.com/*",
]

This will load contenScript whenever we are on this tab. Hence Now since our contentScript loads we send a message like this from our content.js
chrome.runtime.sendMessage({todo: "ShowPageAction"})

this message is recieved on the event Page like this
chrome.runtime.onMessage.addListener(function(request, sender, sendResponse){
  if (request.todo == ShowPageAction) {
    chrome.tabs.query({active:true, currentWindow:true}, function(tabs){
      chrome.pageAction.show(tabs[0].id)
    })
  }
})
here we will check for the message and if messsage is true or equal we will highlight the current tab

and hence it will Highlight on given Page
