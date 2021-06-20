"use strict";
var SendScript;
(function (SendScript) {
    let url = "Bla";
    let sendButton = document.getElementById("SendDataButton");
    sendButton.addEventListener("click", sendData);
    let showButton = document.getElementById("ShowDataButton");
    showButton.addEventListener("click", showData);
    async function sendTheData() {
        console.log("Jup");
        let userData = new FormData(document.forms[0]);
        let query = new URLSearchParams(userData);
        url += "?" + query.toString();
        console.log(url);
        let response = await fetch(url, { method: "get" });
        let responseText = await response.text();
        return responseText;
    }
    async function sendData() {
        url = "https://myfirsttestserverisnowlive.herokuapp.com/send";
        await sendTheData();
        console.log("Hello Its me");
    }
    async function showData() {
        url = "https://myfirsttestserverisnowlive.herokuapp.com/show";
        // let responseTe = await sendTheData
        showResponsee();
    }
    async function showResponsee() {
        let response = await sendTheData();
        let responseDiv = document.getElementById("response");
        responseDiv.innerHTML = "Serverantwort: " + await response;
    }
})(SendScript || (SendScript = {}));
//# sourceMappingURL=SendScript.js.map