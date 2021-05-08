
namespace Aufgabe_1 {

    drawXREcts(3);
    function randomRecti(): void {
        let randomRect: HTMLDivElement = document.createElement("div");
        randomRect.style.width = Math.random() * 500 + "px";
        randomRect.style.height = Math.random() * 500 + "px";


        randomRect.style.backgroundColor = getRandomColor();
        document.body.append(randomRect);

    }
    function getRandomColor(): string {
        let inhalt: string = "0123456789ABCDEF";
        let color: string = "#";
        for (let i: number = 0; i < 6; i++) {
            color += inhalt[Math.floor(Math.random() * 16)];
        }
        return color;
    }
    function drawXREcts(anzahl: number): void {
        for (let e: number = 0; e <= anzahl; e++) {
            randomRecti();
        }


    }

    //Buttons:
    let landingButton1 = document.getElementById("landingButton1");     //was ist das für ein Typ ?? 
    let landingButton2 = document.getElementById("landingButton2");
    landingButton1.addEventListener("click", drawNewRect);
    landingButton2.addEventListener("click", clearAllRects);

    function drawNewRect(this: HTMLElement): void {
        randomRecti();
    }
    function clearAllRects(): void {
        location.reload();

    }
}

let heatArray: ImageInterface[] = new Array;

heatArray[0] = { name: "Hans", secondName: "Peter", imageSrc: "jaja.jpg", specialPart: "head" };
heatArray[1] = { name: "Eberle", secondName: "Hans", imageSrc: "head1.jpg", specialPart: "head" };
heatArray[2] = { name: "Mia", secondName: "Kanns", imageSrc: "head2.jpg", specialPart: "head" };

showImage(heatArray);

function showImage(interfacePerson: ImageInterface[]): void {


    for (let index: number = 0; index < interfacePerson.length; index++) {
        let image: HTMLImageElement = document.createElement("img");
        image.src = interfacePerson[index].imageSrc;

        image.classList.add("generatedImage");
        if (interfacePerson[index].specialPart == "head") {
            image.addEventListener("click", choseHeat);
        } else if (interfacePerson[index].specialPart == "body") {
            image.addEventListener("click", choseBody);
        } else if (interfacePerson[index].specialPart == "legs") {
            image.addEventListener("click", choseLegs);
        }

        document.body.append(image);


    }




    // if (document.head.title == "HeadSelect")


    let speicher: ChosenPart = { heat: "test", body: "test", leg: "test" };

    function choseHeat(klick: MouseEvent): void {

        let img: HTMLImageElement = <HTMLImageElement>klick.currentTarget;
        console.log(img.src);
        speicher.heat = img.src;

    }
    function choseBody(klick: MouseEvent): void {

        let img: HTMLImageElement = <HTMLImageElement>klick.currentTarget;
        speicher.body = img.src;
        console.log(img.src);

    }

    function choseLegs(klick: MouseEvent): void {
        let img: HTMLImageElement = <HTMLImageElement>klick.currentTarget;
        speicher.leg = img.src;
        console.log(img.src);

    }
}

