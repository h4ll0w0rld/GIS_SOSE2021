"use strict";
let buttonSubmitt = document.getElementById("submit");
buttonSubmitt.addEventListener("click", sendTheData);
async function sendTheData() {
    console.log("its all fine");
    let userData = new FormData(document.forms[0]);
    let url = "https://myfirsttestserverisnowlive.herokuapp.com/";
    // let url: string = "http://localhost:8122";
    let query = new URLSearchParams(userData);
    url += "?" + query.toString();
    let response = await fetch(url, { method: "get" });
    let responseText = await response.text();
    console.log(responseText);
    showResponsee(responseText);
}
function showResponsee(response) {
    let responseDiv = document.getElementById("response");
    responseDiv.innerHTML = "Serverantwort: " + response;
}
//# sourceMappingURL=send.js.map