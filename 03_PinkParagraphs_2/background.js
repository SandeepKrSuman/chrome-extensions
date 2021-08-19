chrome.action.onClicked.addListener(buttonClicked);

function buttonClicked(tab){
    let msg = {
        clicked: true
    };

    chrome.tabs.sendMessage(tab.id, msg);
}