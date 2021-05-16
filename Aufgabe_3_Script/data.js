"use strict";
var Bitte;
(function (Bitte) {
    let imageArray = new Array;
    imageArray[0] = { name: "Hans", secondName: "Peter", imageSrc: "res/P1.png", specialPart: "head" };
    imageArray[1] = { name: "Eberle", secondName: "Hans", imageSrc: "res/P4.png", specialPart: "head" };
    imageArray[2] = { name: "Mia", secondName: "Kanns", imageSrc: "res/P7.png", specialPart: "head" };
    imageArray[3] = { name: "Mias", secondName: "Kannds", imageSrc: "res/P10.png", specialPart: "head" };
    let bodyArray = new Array;
    bodyArray[0] = { name: "Hans", secondName: "Peter", imageSrc: "res/P2.png", specialPart: "body" };
    bodyArray[1] = { name: "Eberle", secondName: "Hans", imageSrc: "res/P5.png", specialPart: "body" };
    bodyArray[2] = { name: "Mia", secondName: "Kanns", imageSrc: "res/P8.png", specialPart: "body" };
    bodyArray[3] = { name: "Miav", secondName: "Kannds", imageSrc: "res/P11.png", specialPart: "body" };
    let legArray = new Array;
    legArray[0] = { name: "Hans", secondName: "Peter", imageSrc: "res/P3.png", specialPart: "legs" };
    legArray[1] = { name: "Eberle", secondName: "Hans", imageSrc: "res/P6.png", specialPart: "legs" };
    legArray[2] = { name: "Mia", secondName: "Kanns", imageSrc: "res/P9.png", specialPart: "legs" };
    legArray[3] = { name: "Mia", secondName: "Kanns", imageSrc: "res/P12.png", specialPart: "legs" };
    Bitte.headImageJSON = JSON.stringify(imageArray);
    Bitte.bodyImageJSON = JSON.stringify(bodyArray);
    Bitte.legImageJSON = JSON.stringify(legArray);
})(Bitte || (Bitte = {}));
//# sourceMappingURL=data.js.map