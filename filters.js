/* chrome.runtime.onInstalled.addListener(function() {
    chrome.storage.sync.set({color: '#3aa757'}, function() {
      console.log("The color is green.");
    });
chrome.browserAction.addListener(function()
  });
  */
 console.log("this works.");
 var offensivewords=["violence", "Amazon", "regret"];
 window.onload = function(){
    // init();
    //hide posts related to var
 }
// listen for checkForWord request, call getTags which includes callback to sendResponse
chrome.runtime.onMessage.addListener(
    function (request, sender, sendResponse) {
        if (request.action === "checkForWord") {
            checkForWord(request, sender, sendResponse);
            // this is required to use sendResponse asynchronously
            return true;
        }
    }
);
//Returns the index of the first instance of the desired word on the page.
function checkForWord(request, sender, sendResponse){
    var scripts = document.getElementsByTagName("script");
    for (var i=0;i<scripts.length;i++) {
        if (scripts[i].src.toLowerCase().indexOf("jquery")>-1){
            return sendResponse(true);
        }
    }
    return sendResponse(false);
}