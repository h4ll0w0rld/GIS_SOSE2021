"use strict";
let buttonJson = document.getElementById("JsonButton");
buttonJson.addEventListener("click", showJson);
let buttonHtml = document.getElementById("HtmlButton");
buttonHtml.addEventListener("click", showHtml);
let url;
async function sendTheData() {
    console.log("Jup");
    let userData = new FormData(document.forms[0]);
    let query = new URLSearchParams(userData);
    url += "?" + query.toString();
    let response = await fetch(url, { method: "get" });
    let responseText = await response.text();
    return responseText;
}
async function showJson() {
    url = "https://myfirsttestserverisnowlive.herokuapp.com/json";
    console.log(await sendTheData());
}
async function showHtml() {
    url = "https://myfirsttestserverisnowlive.herokuapp.com/html";
    showResponsee(await sendTheData());
}
function showResponsee(response) {
    let responseDiv = document.getElementById("response");
    responseDiv.innerHTML = "Serverantwort: " + response;
}
//# sourceMappingURL=send.js.map