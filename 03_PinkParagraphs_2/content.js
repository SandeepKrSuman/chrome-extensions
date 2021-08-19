chrome.runtime.onMessage.addListener(gotMessage);

function gotMessage(message, sender, sendResponse){
    let paragraphs = document.getElementsByTagName('p');
    if(message.clicked){
        for(para of paragraphs){
        para.style['background-color'] = "#FF94CC";
        }
    }
}