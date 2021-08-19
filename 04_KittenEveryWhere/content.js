let imgNames = ["kitten1.jpg", "kitten2.jpg", "kitten3.jpg", "kitten4.jpg", "kitten5.jpg"];

let imgs = document.getElementsByTagName('img');

for(image of imgs){
    let index = Math.floor(Math.random() * imgNames.length);
    let file = './kittens/' + imgNames[index];
    let url = chrome.runtime.getURL(file);
    image.src = url;
}