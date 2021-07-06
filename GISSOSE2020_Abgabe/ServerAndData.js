"use strict";
var ModulpruefungGis;
(function (ModulpruefungGis) {
    let baseUrl = "https://myfirsttestserverisnowlive.herokuapp.com";
    let url = baseUrl;
    let dataBaseImg;
    if (document.body.id == "adminpage") {
        let saveNewImage = document.getElementById("insertButton");
        saveNewImage.addEventListener("click", function () {
            url = baseUrl + "/save";
            saveData();
        });
    }
    async function fetchData(url) {
        console.log(url);
        let response = await fetch(url, { method: "get" });
        let responseText = await response.text();
        return responseText;
    }
    ModulpruefungGis.fetchData = fetchData;
    async function getData() {
        console.log("i am starting");
        url = baseUrl + "/getData";
        if (dataBaseImg == undefined) {
            dataBaseImg = JSON.parse(await fetchData(url));
            console.log("ACHTUNG");
        }
        return dataBaseImg;
    }
    ModulpruefungGis.getData = getData;
    async function saveData() {
        if (document.body.id == "adminpage") {
            let userData = new FormData(document.forms[0]);
            let query = new URLSearchParams(userData);
            url += "?" + query.toString();
            console.log(await fetchData(url));
        }
    }
    function deleteData(Card) {
        url = baseUrl + "/delete";
        url += "?";
    }
    ModulpruefungGis.deleteData = deleteData;
})(ModulpruefungGis || (ModulpruefungGis = {}));
//# sourceMappingURL=ServerAndData.js.map