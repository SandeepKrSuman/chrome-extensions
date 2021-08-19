let userInput = document.getElementById("inputTxt");

userInput.oninput = handleChange;

function handleChange(e){

        let query = {active: true, currentWindow: true};
        chrome.tabs.query(query, gotTabs);
        function gotTabs(tabs) {
            let msg = {
                txt: e.target.value
            }

            chrome.tabs.sendMessage(tabs[0].id, msg);
          }
}