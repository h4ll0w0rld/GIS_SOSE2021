interface ImageInterface {
    name: string;
    secondName: string;
    imageSrc: string;
    specialPart: string;
}

interface ChosenPart {
    heat: string;
    body: string;
    leg: string;


}


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

