"use strict";
var Bitte;
(function (Bitte) {
    // let imageArray: ImageInterface[] = new Array;
    // imageArray[0] = { name: "Hans", secondName: "Peter", imageSrc: "jaja.jpg", specialPart: "head" };
    // imageArray[1] = { name: "Eberle", secondName: "Hans", imageSrc: "head1.jpg", specialPart: "head" };
    // imageArray[2] = { name: "Mia", secondName: "Kanns", imageSrc: "head2.jpg", specialPart: "head" };
    // let bodyArray: ImageInterface[] = new Array;
    // bodyArray[0] = { name: "Hans", secondName: "Peter", imageSrc: "jaja.jpg", specialPart: "body" };
    // bodyArray[1] = { name: "Eberle", secondName: "Hans", imageSrc: "jaja.jpg", specialPart: "body" };
    // bodyArray[2] = { name: "Mia", secondName: "Kanns", imageSrc: "jaja.jpg", specialPart: "body" };
    // let legArray: ImageInterface[] = new Array;
    // legArray[0] = { name: "Hans", secondName: "Peter", imageSrc: "jaja.jpg", specialPart: "legs" };
    // legArray[1] = { name: "Eberle", secondName: "Hans", imageSrc: "jaja.jpg", specialPart: "legs" };
    // legArray[2] = { name: "Mia", secondName: "Kanns", imageSrc: "jaja.jpg", specialPart: "legs" };
    console.log(Bitte.imageJSON);
    let myCImage = JSON.parse(Bitte.imageJSON);
    console.log(myCImage);
    let speicher = { heat: "test", body: "test", leg: "test" };
    if (document.body.id == "HeadSelect") {
        // showImage(imageArray);
    }
    if (document.body.id == "BodySelect") {
        // showImage(bodyArray);
    }
    if (document.body.id == "LegSelect") {
        //showImage(legArray);
    }
    if (document.body.id == "FinalSelect") {
        //howImage(speicher.heat , speicher.body , speicher.leg);
    }
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
        function choseHeat(klick) {
            let img = klick.currentTarget;
            // console.log(img.src);
            // speicher.heat = img.src;
            window.open("body.html");
            // localStorage.setItem("head", img.src);
            console.log(localStorage.getItem("head"));
        }
        function choseBody(klick) {
            let img = klick.currentTarget;
            speicher.body = img.src;
            console.log("bodyyyy");
            // localStorage.setItem("body", img.src);
            window.open("leg.html");
        }
        function choseLegs(klick) {
            let img = klick.currentTarget;
            speicher.leg = img.src;
            console.log(img.src);
            window.open("final.html");
        }
    }
})(Bitte || (Bitte = {}));
//# sourceMappingURL=script.js.map