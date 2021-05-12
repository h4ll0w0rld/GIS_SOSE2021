namespace Bitte{

interface ImageInterface {
    name: string;
    secondName: string;
    imageSrc: string;
    specialPart: string;
}

let imageArray: ImageInterface[] = new Array;

imageArray[0] = { name: "Hans", secondName: "Peter", imageSrc: "jaja.jpg", specialPart: "head" };
imageArray[1] = { name: "Eberle", secondName: "Hans", imageSrc: "head1.jpg", specialPart: "head" };
imageArray[2] = { name: "Mia", secondName: "Kanns", imageSrc: "head2.jpg", specialPart: "head" };

let bodyArray: ImageInterface[] = new Array;

bodyArray[0] = { name: "Hans", secondName: "Peter", imageSrc: "jaja.jpg", specialPart: "body" };
bodyArray[1] = { name: "Eberle", secondName: "Hans", imageSrc: "jaja.jpg", specialPart: "body" };
bodyArray[2] = { name: "Mia", secondName: "Kanns", imageSrc: "jaja.jpg", specialPart: "body" };

let legArray: ImageInterface[] = new Array;

legArray[0] = { name: "Hans", secondName: "Peter", imageSrc: "jaja.jpg", specialPart: "legs" };
legArray[1] = { name: "Eberle", secondName: "Hans", imageSrc: "jaja.jpg", specialPart: "legs" };
legArray[2] = { name: "Mia", secondName: "Kanns", imageSrc: "jaja.jpg", specialPart: "legs" };


export let imageJSON: string = JSON.stringify(imageArray);
console.log("hehe"+ imageJSON);




class FinalCombination {
    pickedKopf: string;
    pickedBody: string;
    pickedLegs: string;

    constructor(pickedKopf: string, pickedBody: string, pickedLegs: string) {
        this.pickedKopf = pickedKopf;
        this.pickedBody = pickedBody;
        this.pickedLegs = pickedLegs;
    }



}

}