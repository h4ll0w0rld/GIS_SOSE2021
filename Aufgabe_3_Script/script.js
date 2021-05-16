"use strict";
var Bitte;
(function (Bitte) {
    console.log(Bitte.headImageJSON);
    let headImg = JSON.parse(Bitte.headImageJSON);
    let bodyImg = JSON.parse(Bitte.bodyImageJSON);
    let legImg = JSON.parse(Bitte.legImageJSON);
    console.log(headImg);
    console.log(bodyImg);
    function showImage(interfacePerson) {
        for (let index = 0; index < interfacePerson.length; index++) {
            let image = document.createElement("img");
            image.src = interfacePerson[index].imageSrc;
            image.classList.add("generatedImage");
            if (interfacePerson[index].specialPart == "head") {
                image.addEventListener("click", choseHeat);
            }
            if (interfacePerson[index].specialPart == "body") {
                image.addEventListener("click", choseBody);
            }
            if (interfacePerson[index].specialPart == "legs") {
                image.addEventListener("click", choseLegs);
            }
            document.body.append(image);
        }
    }
    function choseHeat(klick) {
        let img = klick.currentTarget;
        window.open("body.html");
        localStorage.setItem("head", img.src);
    }
    function choseBody(klick) {
        let img = klick.currentTarget;
        localStorage.setItem("body", img.src);
        window.open("leg.html");
    }
    function choseLegs(klick) {
        let img = klick.currentTarget;
        window.open("final.html");
        localStorage.setItem("leg", img.src);
    }
    if (document.body.id == "HeadSelect") {
        showImage(headImg);
    }
    if (document.body.id == "BodySelect") {
        let chosenHead = document.createElement("img");
        chosenHead.src = localStorage.getItem("head");
        chosenHead.classList.add("generatedImageB");
        document.body.append(chosenHead);
        showImage(bodyImg);
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
        showImage(legImg);
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
    }
})(Bitte || (Bitte = {}));
//# sourceMappingURL=script.js.map