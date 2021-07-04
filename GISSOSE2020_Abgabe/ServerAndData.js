"use strict";
var ModulpruefungGis;
(function (ModulpruefungGis) {
    let url = "https://myfirsttestserverisnowlive.herokuapp.com";
    let sendButton = document.getElementById("insertButton");
    sendButton.addEventListener("click", sendData);
    async function getData() {
        console.log("i am starting");
        url += "/getData";
        console.log(url);
        let response = await fetch(url, { method: "get" });
        let responseText = await response.text();
        let responsePlayingCards = JSON.parse(responseText);
        return responsePlayingCards;
    }
    ModulpruefungGis.getData = getData;
    async function sendData() {
        let userData = new FormData(document.forms[0]);
        let query = new URLSearchParams(userData);
        url += "/save" + "?" + query.toString();
        let response = await fetch(url, { method: "get" });
        let responseText = await response.text();
    }
    async function fetchServer() {
    }
})(ModulpruefungGis || (ModulpruefungGis = {}));
//# sourceMappingURL=ServerAndData.js.map