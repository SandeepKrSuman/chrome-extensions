chrome.storage.local.get(['colr'], function(result) {
    if(result.colr){
        let allelems = document.getElementsByTagName('*');
        for(elm of allelems){
            elm.style['background-color'] = result.colr;
        }
    }
  });

chrome.runtime.onMessage.addListener(gotMessage);

function gotMessage(message, sender, sendResponse){
    let allelems = document.getElementsByTagName('*');
    for(elm of allelems){
        elm.style['background-color'] = message.colr;
    }
}
