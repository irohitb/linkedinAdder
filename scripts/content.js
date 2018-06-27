var NumInviteInPage = document.querySelectorAll('button[data-control-name="srp_profile_actions"]').length

chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
