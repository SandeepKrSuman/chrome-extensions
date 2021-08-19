let userInput = document.getElementById("inputTxt");

userInput.oninput = handleChange;

function handleChange(e){
    let text = e.target.value;
    document.getElementById('showTxt').innerHTML = text;
}