
let query = {active: true, currentWindow: true};

chrome.tabs.query(query, gotTabs);
function gotTabs(tabs) {
    let msg = {
        txt: "hello from popup"
    }
    
    chrome.tabs.sendMessage(tabs[0].id, msg, function(response){
        if(response.swor === "error"){
            document.getElementById('heading').innerHTML = "Please select a word!";
        }
        else{
            gif(response.swor)
        }
    });

  }

async function gif(query){
    let tenorurl = `https://g.tenor.com/v1/search?q=${query}&key=LIVDSRZULELA&limit=11`;
    let response = await fetch(tenorurl);
    let json = await response.json();
    let index = Math.floor(Math.random()*10);
    if(json){
        document.getElementById('heading').innerHTML = "Gif for the selected word:";
        let image = document.createElement('img');
        image.src = json.results[index].media[0].gif.url;
        document.getElementById('body').appendChild(image);
    }
}