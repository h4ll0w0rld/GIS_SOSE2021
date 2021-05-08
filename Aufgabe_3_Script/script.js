"use strict";
// showImage(hans);
// showImage(mia);
// showImage(eberle);
function showImage(interfacePerson) {
    for (let index = 0; index < interfacePerson.length; index++) {
        let image = document.createElement("img");
        image.src = interfacePerson[index].imageSrc;
        image.classList.add("generatedImage");
        if (interfacePerson[index].specialPart == "head") {
            image.addEventListener("click", choseHeat);
        }
        else if (interfacePerson[index].specialPart == "body") {
            image.addEventListener("click", choseBody);
        }
        else if (interfacePerson[index].specialPart == "legs") {
            image.addEventListener("click", choseLegs);
        }
        document.body.append(image);
    }
}
let heatArray = new Array;
heatArray[0] = { name: "Hans", secondName: "Peter", imageSrc: "jaja.jpg", specialPart: "head" };
heatArray[1] = { name: "Eberle", secondName: "Hans", imageSrc: "head1.jpg", specialPart: "head" };
heatArray[2] = { name: "Mia", secondName: "Kanns", imageSrc: "head2.jpg", specialPart: "head" };
showImage(heatArray);
// if (document.head.title == "HeadSelect")
let speicher = { heat: "test", body: "test", leg: "test" };
function choseHeat(klick) {
    let img = klick.currentTarget;
    console.log(img.src);
    speicher.heat = img.src;
}
function choseBody(klick) {
    let img = klick.currentTarget;
    speicher.body = img.src;
    console.log(img.src);
}
function choseLegs(klick) {
    let img = klick.currentTarget;
    speicher.leg = img.src;
    console.log(img.src);
}
//# sourceMappingURL=script.js.map