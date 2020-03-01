document.addEventListener("DOMContentLoaded", function(event) {
    var resultsButton = document.getElementById("getResults");
    resultsButton.onclick = getResults();
});

function getResults(){
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
        // chrome.tabs.sendMessage(tabs[0].id, { action: "checkForWord" }, function (response) {
        //     //showResults();
        // chrome.tabs.executeScript(
        //     tabs[0].id,
        //     {code: 'document.body.style.backgroundColor = "' + color + '";'});
        //   });
        // });
        chrome.tabs.executeScript(
            tabs[0].id,
            // {code: "console.log(123)"});
            {code: "document.getElementById('logo-events').remove()"});
        
    });
}

function showResults() {
    var resultsElement = document.getElementById("results");
    var results = $(":contains('shocked')").remove()
    
    console.log(results)
    results.remove();
    resultsElement.innerText = results ? "This page uses jQuery" : "This page does NOT use jQuery";
}
