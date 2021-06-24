"use strict";
var ModulpruefungGis;
(function (ModulpruefungGis) {
    let url = "https://myfirsttestserverisnowlive.herokuapp.com";
    getData();
    async function getData() {
        url += "/getData";
        console.log(url);
        let response = await fetch(url, { method: "get" });
        let responseCarts = await response.json();
        console.log(responseCarts != undefined);
        return responseCarts;
    }
    ModulpruefungGis.getData = getData;
    async function sendData() {
        fetchServer();
    }
    async function fetchServer() {
    }
})(ModulpruefungGis || (ModulpruefungGis = {}));
//# sourceMappingURL=ServerAndData.js.map