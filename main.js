console.log("Test");

// Refs aaa
let translateButton = document.getElementById("translateButton");
let textInput = document.getElementById("textInput");
let textOutput = document.getElementById("output");


// URL and then the new url

// Function(s)


function translate(){
    event.preventDefault();
    // refs in function
    let inputText = textInput.value;
    //url and new url
    let url = "https://api.funtranslations.com/translate/minion.json";
    let newUrl = `${url}?text=${inputText}`;
    console.log(inputText);
    fetch(newUrl).then((data)=>data.json()).then((data)=>{
        console.log(data);
        textOutput.innerHTML = "Your Translation:" + data.contents.translated;
    })
}
translateButton.addEventListener("click",translate);