"use strict";
var ModulpruefungGis;
(function (ModulpruefungGis) {
    let url = "https://myfirsttestserverisnowlive.herokuapp.com";
    getData();
    async function getData() {
        console.log("i am starting");
        url += "/getData";
        console.log(url);
        let response = await fetch(url, { method: "get" });
        let responseText = await response.text();
        console.log(responseText);
        //let responseJson: PlayingCart[] = JSON.parse(responseText);
        // console.log(responseJson != null);
        // return responseJson;
    }
    ModulpruefungGis.getData = getData;
    async function sendData() {
        fetchServer();
    }
    async function fetchServer() {
    }
})(ModulpruefungGis || (ModulpruefungGis = {}));
//# sourceMappingURL=ServerAndData.js.map