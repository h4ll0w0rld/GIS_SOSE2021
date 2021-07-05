"use strict";
var SendScript;
(function (SendScript) {
    let url = "Bla";
    let sendButton = document.getElementById("SendDataButton");
    sendButton.addEventListener("click", sendData);
    let showButton = document.getElementById("ShowDataButton");
    showButton.addEventListener("click", showData);
    async function sendTheData() {
        let userData = new FormData(document.forms[0]);
        let query = new URLSearchParams(userData);
        console.log(query.toString);
        url += "?" + query.toString();
        let response = await fetch(url, { method: "get" });
        let responseText = await response.text();
        console.log("Data has been send!");
        return responseText;
    }
    async function sendData() {
        url = "https://myfirsttestserverisnowlive.herokuapp.com/send";
        await sendTheData();
    }
    async function showData() {
        url = "https://myfirsttestserverisnowlive.herokuapp.com/show";
        showResponsee();
    }
    async function showResponsee() {
        let response = await sendTheData();
        let responseDiv = document.getElementById("response");
        responseDiv.innerHTML = "Serverantwort: " + await response;
    }
})(SendScript || (SendScript = {}));
//# sourceMappingURL=SendScript.js.map