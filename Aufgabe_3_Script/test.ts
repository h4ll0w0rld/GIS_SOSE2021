// interface ImageInterface {
//     name: string;
//     secondName: string;
//     imageSrc: string;
//     specialPart: string;
// }
// let imageArray: ImageInterface[] = new Array;

// imageArray[0] = { name: "Hans", secondName: "Peter", imageSrc: "jaja.jpg", specialPart: "head" };
// imageArray[1] = { name: "Eberle", secondName: "Hans", imageSrc: "head1.jpg", specialPart: "head" };
// imageArray[2] = { name: "Mia", secondName: "Kanns", imageSrc: "head2.jpg", specialPart: "head" };

// let bodyArray: ImageInterface[] = new Array;

// imageArray[3] = { name: "Hans", secondName: "Peter", imageSrc: "jaja.jpg", specialPart: "body" };
// imageArray[4] = { name: "Eberle", secondName: "Hans", imageSrc: "jaja.jpg", specialPart: "body" };
// imageArray[5] = { name: "Mia", secondName: "Kanns", imageSrc: "jaja.jpg", specialPart: "body" };



// export let myImages: string = JSON.stringify(imageArray);
// // export let myCImage: ImageInterface = JSON.parse();

// // console.log(myCImage);

// namespace Aufgabe_1 {

//     drawXREcts(3);
//     function randomRecti(): void {
//         let randomRect: HTMLDivElement = document.createElement("div");
//         randomRect.style.width = Math.random() * 500 + "px";
//         randomRect.style.height = Math.random() * 500 + "px";


//         randomRect.style.backgroundColor = getRandomColor();
//         document.body.append(randomRect);

//     }
//     function getRandomColor(): string {
//         let inhalt: string = "0123456789ABCDEF";
//         let color: string = "#";
//         for (let i: number = 0; i < 6; i++) {
//             color += inhalt[Math.floor(Math.random() * 16)];
//         }
//         return color;
//     }
//     function drawXREcts(anzahl: number): void {
//         for (let e: number = 0; e <= anzahl; e++) {
//             randomRecti();
//         }


//     }

//     //Buttons:
//     let landingButton1 = document.getElementById("landingButton1");     //was ist das für ein Typ ?? 
//     let landingButton2 = document.getElementById("landingButton2");
//     landingButton1.addEventListener("click", drawNewRect);
//     landingButton2.addEventListener("click", clearAllRects);

//     function drawNewRect(this: HTMLElement): void {
//         randomRecti();
//     }
//     function clearAllRects(): void {
//         location.reload();

//     }
// }
