namespace Bitte{

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



console.log(imageJSON);         //Er gibt in data.ts alles richtig aus warum ist es hier undefinded ?? 
let myCImage: ImageInterface[] = JSON.parse(imageJSON); // Hier natürlich auch 
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

function showImage(interfacePerson: ImageInterface[]): void {

    for (let index: number = 0; index < interfacePerson.length; index++) {
        let image: HTMLImageElement = document.createElement("img");
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



    function choseHeat(klick: MouseEvent): void {

        let img: HTMLImageElement = <HTMLImageElement>klick.currentTarget;
        // console.log(img.src);
        // speicher.heat = img.src;
        window.open("body.html");
       // localStorage.setItem("head", img.src);                //Ist das einfach Schrott ? weil wenn ich das versuche meckert js ... :)
        console.log(localStorage.getItem("head"));

    }
    function choseBody(klick: MouseEvent): void {

        let img: HTMLImageElement = <HTMLImageElement>klick.currentTarget;
        speicher.body = img.src;
        console.log("bodyyyy");
       // localStorage.setItem("body", img.src);
        window.open("leg.html");

    }

    function choseLegs(klick: MouseEvent): void {
        let img: HTMLImageElement = <HTMLImageElement>klick.currentTarget;
        speicher.leg = img.src;
        console.log(img.src);
        window.open("final.html");

    }
}

}