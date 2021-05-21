"use strict";
getData("data.json");
async function getData(_url) {
    let response = await fetch(_url);
    let parser = await response.json();
    let sinnvollesArray = parser.imageHead;
    showImage(sinnvollesArray);
    return sinnvollesArray;
}
async function sendData() {
    let url = "https://gis-communication.herokuapp.com";
    let ende = { head: localStorage.getItem("head"), body: localStorage.getItem("body"), leg: localStorage.getItem("legs") };
    let ans = { error: null, message: null };
    let query = new URLSearchParams(ende);
    url = url + "?" + query.toString();
    let promise = await fetch(url);
    ans = await promise.json();
    if (ans.error != null) {
        console.log("%c" + ans.error, "color:" + "red");
    }
    if (ans.message != null) {
        console.log(ans.message);
    }
}
function handleSuccess(_response) {
    console.log("Success", _response.text());
}
function handleFail(_response) {
    console.log("Failure", _response.text());
}
function showImage(interfacePerson) {
    for (let index = 0; index < interfacePerson.length; index++) {
        let image = document.createElement("img");
        image.classList.add("generatedImage");
        if (interfacePerson[index].specialPart == "head" && document.body.id == "HeadSelect") {
            image.src = interfacePerson[index].imageSrc;
            image.addEventListener("click", choseHeat);
        }
        if (interfacePerson[index].specialPart == "body" && document.body.id == "BodySelect") {
            image.src = interfacePerson[index].imageSrc;
            image.addEventListener("click", choseBody);
        }
        if (interfacePerson[index].specialPart == "legs" && document.body.id == "LegSelect") {
            image.src = interfacePerson[index].imageSrc;
            image.addEventListener("click", choseLegs);
        }
        document.body.append(image);
    }
}
function choseHeat(klick) {
    let img = klick.currentTarget;
    window.location.replace("body.html");
    localStorage.setItem("head", img.src);
}
function choseBody(klick) {
    let img = klick.currentTarget;
    localStorage.setItem("body", img.src);
    window.location.replace("leg.html");
}
function choseLegs(klick) {
    let img = klick.currentTarget;
    window.location.replace("final.html");
    localStorage.setItem("leg", img.src);
}
if (document.body.id == "BodySelect") {
    let chosenHead = document.createElement("img");
    chosenHead.src = localStorage.getItem("head");
    chosenHead.classList.add("generatedImageB");
    document.body.append(chosenHead);
}
if (document.body.id == "LegSelect") {
    let chosenHeadA = document.createElement("img");
    let chosenHeadB = document.createElement("img");
    chosenHeadA.src = localStorage.getItem("head");
    chosenHeadB.src = localStorage.getItem("body");
    chosenHeadA.classList.add("generatedImageB");
    chosenHeadB.classList.add("generatedImageB");
    document.body.append(chosenHeadA);
    document.body.append(chosenHeadB);
}
if (document.body.id == "FinalSelect") {
    let imageA = document.createElement("img");
    let imageB = document.createElement("img");
    let imageC = document.createElement("img");
    imageA.src = localStorage.getItem("head");
    imageA.classList.add("generatedImage");
    document.body.append(imageA);
    imageB.src = localStorage.getItem("body");
    imageB.classList.add("generatedImage");
    document.body.append(imageB);
    imageC.src = localStorage.getItem("leg");
    imageC.classList.add("generatedImage");
    document.body.append(imageC);
    sendData();
}
//# sourceMappingURL=script.js.map