let userInput = document.getElementById("inputColor");

chrome.storage.local.get(['colr'], function(result) {
    if(result.colr){
        userInput.value = result.colr;
    }
  });

userInput.oninput = handleChange;

function handleChange(e){

        let query = {active: true, currentWindow: true};
        chrome.tabs.query(query, gotTabs);
        function gotTabs(tabs) {
            let msg = {
                colr: e.target.value
            }
            console.log(tabs[0]);

            chrome.tabs.sendMessage(tabs[0].id, msg);
            chrome.storage.local.set(msg);
          }
}