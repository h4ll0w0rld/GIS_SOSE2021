"use strict";
var ModulpruefungGis;
(function (ModulpruefungGis) {
    let baseUrl = "https://myfirsttestserverisnowlive.herokuapp.com";
    let url = baseUrl;
    let dataBaseImg;
    let highscoreArray;
    if (document.body.id == "adminpage") {
        let saveNewImage = document.getElementById("insertButton");
        saveNewImage.addEventListener("click", function () {
            url = baseUrl + "/save";
            saveData();
        });
    }
    async function fetchData(_url) {
        let response = await fetch(_url, { method: "get" });
        let responseText = await response.text();
        return responseText;
    }
    ModulpruefungGis.fetchData = fetchData;
    async function getData() {
        url = baseUrl + "/getData";
        if (dataBaseImg == undefined) {
            dataBaseImg = JSON.parse(await fetchData(url));
        }
        return dataBaseImg;
    }
    ModulpruefungGis.getData = getData;
    async function getHighscore() {
        url = baseUrl + "/getHighscore";
        if (highscoreArray == undefined) {
            highscoreArray = JSON.parse(await fetchData(url));
        }
        return highscoreArray;
    }
    ModulpruefungGis.getHighscore = getHighscore;
    async function saveData() {
        if (document.body.id == "adminpage") {
            let userData = new FormData(document.forms[0]);
            let query = new URLSearchParams(userData);
            url += "?" + query.toString();
            window.location.reload();
            await fetchData(url);
        }
    }
    function deleteData() {
        url = baseUrl + "/delete";
        url += "?";
    }
    ModulpruefungGis.deleteData = deleteData;
})(ModulpruefungGis || (ModulpruefungGis = {}));
//# sourceMappingURL=ServerAndData.js.map