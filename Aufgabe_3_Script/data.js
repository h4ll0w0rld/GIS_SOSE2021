"use strict";
var Bitte;
(function (Bitte) {
    let imageArray = new Array;
    imageArray[0] = { name: "Hans", secondName: "Peter", imageSrc: "jaja.jpg", specialPart: "head" };
    imageArray[1] = { name: "Eberle", secondName: "Hans", imageSrc: "head1.jpg", specialPart: "head" };
    imageArray[2] = { name: "Mia", secondName: "Kanns", imageSrc: "head2.jpg", specialPart: "head" };
    let bodyArray = new Array;
    bodyArray[0] = { name: "Hans", secondName: "Peter", imageSrc: "jaja.jpg", specialPart: "body" };
    bodyArray[1] = { name: "Eberle", secondName: "Hans", imageSrc: "jaja.jpg", specialPart: "body" };
    bodyArray[2] = { name: "Mia", secondName: "Kanns", imageSrc: "jaja.jpg", specialPart: "body" };
    let legArray = new Array;
    legArray[0] = { name: "Hans", secondName: "Peter", imageSrc: "jaja.jpg", specialPart: "legs" };
    legArray[1] = { name: "Eberle", secondName: "Hans", imageSrc: "jaja.jpg", specialPart: "legs" };
    legArray[2] = { name: "Mia", secondName: "Kanns", imageSrc: "jaja.jpg", specialPart: "legs" };
    Bitte.imageJSON = JSON.stringify(imageArray);
    console.log("hehe" + Bitte.imageJSON);
    class FinalCombination {
        constructor(pickedKopf, pickedBody, pickedLegs) {
            this.pickedKopf = pickedKopf;
            this.pickedBody = pickedBody;
            this.pickedLegs = pickedLegs;
        }
    }
})(Bitte || (Bitte = {}));
//# sourceMappingURL=data.js.map