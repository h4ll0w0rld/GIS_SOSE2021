// namespace Bitte {

//     interface ImageInterface {
//         name: string;
//         secondName: string;
//         imageSrc: string;
//         specialPart: string;
//     }


    
//     console.log(headImageJSON); 
//     let headImg: ImageInterface[] = JSON.parse(headImageJSON);
//     let bodyImg: ImageInterface[] = JSON.parse(bodyImageJSON);
//     let legImg: ImageInterface[] = JSON.parse(legImageJSON);
//     console.log(headImg);
//     console.log(bodyImg);




//     function showImage(interfacePerson: ImageInterface[]): void {

//         for (let index: number = 0; index < interfacePerson.length; index++) {
//             let image: HTMLImageElement = document.createElement("img");
//             image.src = interfacePerson[index].imageSrc;

//             image.classList.add("generatedImage");
//             if (interfacePerson[index].specialPart == "head") {
//                 image.addEventListener("click", choseHeat);
//             }
//             if (interfacePerson[index].specialPart == "body") {
//                 image.addEventListener("click", choseBody);
//             }
//             if (interfacePerson[index].specialPart == "legs") {
//                 image.addEventListener("click", choseLegs);
//             }

//             document.body.append(image);


//         }

//     }


//     function choseHeat(klick: MouseEvent): void {

//         let img: HTMLImageElement = <HTMLImageElement>klick.currentTarget;
//         window.open("body.html");
//         localStorage.setItem("head", img.src);               
       

//     }
//     function choseBody(klick: MouseEvent): void {

//         let img: HTMLImageElement = <HTMLImageElement>klick.currentTarget;
//         localStorage.setItem("body", img.src);
//         window.open("leg.html");

//     }

//     function choseLegs(klick: MouseEvent): void {

//         let img: HTMLImageElement = <HTMLImageElement>klick.currentTarget;
//         window.open("final.html");
//         localStorage.setItem("leg", img.src);

//     }


//     if (document.body.id == "HeadSelect") {
       
//         showImage(headImg);


//     }
//     if (document.body.id == "BodySelect") {
//         let chosenHead: HTMLImageElement = document.createElement("img");
//         chosenHead.src = localStorage.getItem("head");
//         chosenHead.classList.add("generatedImageB");
       
//         document.body.append(chosenHead);
       
//         showImage(bodyImg);
//     }
//     if (document.body.id == "LegSelect") {
//         let chosenHeadA: HTMLImageElement = document.createElement("img");
//         let chosenHeadB: HTMLImageElement = document.createElement("img");
//         chosenHeadA.src = localStorage.getItem("head");
//         chosenHeadB.src = localStorage.getItem("body");
//         chosenHeadA.classList.add("generatedImageB");
//         chosenHeadB.classList.add("generatedImageB");
       
//         document.body.append(chosenHeadA);
//         document.body.append(chosenHeadB);
      
     

//         showImage(legImg);

//     } // url = "http://localhost:8122/show";

//     if (document.body.id == "FinalSelect") {
//         let imageA: HTMLImageElement = document.createElement("img");
//         let imageB: HTMLImageElement = document.createElement("img");
//         let imageC: HTMLImageElement = document.createElement("img");

//         imageA.src = localStorage.getItem("head");
//         imageA.classList.add("generatedImage");
//         document.body.append(imageA);


//         imageB.src = localStorage.getItem("body");
//         imageB.classList.add("generatedImage");
//         document.body.append(imageB);


//         imageC.src = localStorage.getItem("leg");
//         imageC.classList.add("generatedImage");
//         document.body.append(imageC);
        
       
//     }

// }