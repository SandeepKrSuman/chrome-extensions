chrome.runtime.onMessage.addListener(gotMessage);

function gotMessage(message, sender, sendResponse){

    let paragraphs = document.getElementsByTagName('p');
    for(para of paragraphs){
        para.innerHTML = message.txt;
    }
}