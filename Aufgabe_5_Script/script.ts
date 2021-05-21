
interface ImageInterface {
    name: string;
    secondName: string;
    imageSrc: string;
    specialPart: string;
}
interface Parscrazy {
    imageHead: ImageInterface[];
}

interface ChosenPart {
    head: string;
    body: string;
    leg: string;

}
interface AnsResult {
    error: string;
    message: string;

}

getData("data.json");



async function getData(_url: RequestInfo): Promise<ImageInterface[]> {

    let response: Response = await fetch(_url);
    let parser: Parscrazy = await response.json();
    let sinnvollesArray: ImageInterface[] = <ImageInterface[]>parser.imageHead;


    showImage(sinnvollesArray);
    return sinnvollesArray;
}

async function sendData(): Promise<void> {

    let url: string = "https://gis-communication.herokuapp.com";
    let ende: ChosenPart = { head: localStorage.getItem("head"), body: localStorage.getItem("body"), leg: localStorage.getItem("legs") };
    let ans: AnsResult = { error: null, message: null };


    let query: URLSearchParams = new URLSearchParams(<any>ende);
    url = url + "?" + query.toString();
    let promise: Response = await fetch(url);
    ans = await promise.json();


    if (ans.error != null) {
        console.log("%c" + ans.error, "color:" + "red");
    } 
    if (ans.message != null) {
        console.log(ans.message);
    }

}

function handleSuccess(_response: Response): void {
    console.log("Success", _response.text());

}
function handleFail(_response: Response): void {
    console.log("Failure", _response.text());
}






function showImage(interfacePerson: ImageInterface[]): void {

    for (let index: number = 0; index < interfacePerson.length; index++) {
        let image: HTMLImageElement = document.createElement("img");

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


function choseHeat(klick: MouseEvent): void {

    let img: HTMLImageElement = <HTMLImageElement>klick.currentTarget;
    window.location.replace("body.html");
    localStorage.setItem("head", img.src);


}
function choseBody(klick: MouseEvent): void {

    let img: HTMLImageElement = <HTMLImageElement>klick.currentTarget;
    localStorage.setItem("body", img.src);
    window.location.replace("leg.html");

}

function choseLegs(klick: MouseEvent): void {

    let img: HTMLImageElement = <HTMLImageElement>klick.currentTarget;

    window.location.replace("final.html");
    localStorage.setItem("leg", img.src);

}


if (document.body.id == "BodySelect") {
    let chosenHead: HTMLImageElement = document.createElement("img");
    chosenHead.src = localStorage.getItem("head");
    chosenHead.classList.add("generatedImageB");

    document.body.append(chosenHead);
}

if (document.body.id == "LegSelect") {
    let chosenHeadA: HTMLImageElement = document.createElement("img");
    let chosenHeadB: HTMLImageElement = document.createElement("img");
    chosenHeadA.src = localStorage.getItem("head");
    chosenHeadB.src = localStorage.getItem("body");
    chosenHeadA.classList.add("generatedImageB");
    chosenHeadB.classList.add("generatedImageB");

    document.body.append(chosenHeadA);
    document.body.append(chosenHeadB);


}

if (document.body.id == "FinalSelect") {
    let imageA: HTMLImageElement = document.createElement("img");
    let imageB: HTMLImageElement = document.createElement("img");
    let imageC: HTMLImageElement = document.createElement("img");

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

