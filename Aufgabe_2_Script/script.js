"use strict";
// namespace Aufgabe_C {
// class Student {
//     vorName: String;
//     nachName: String;
//     alter: number;
//     studentNummer: number;
//     constructor(vorName: String, nachName: String, alter: number, studentNummer: number) {
//         this.vorName = vorName;
//         this.nachName = nachName;
//         this.alter = alter;
//         this.studentNummer = studentNummer;
//     }
//     public showInfo(): void {
//         console.log("Vorname: " + this.vorName + "Nachname: " + this.nachName + "Alter: " + this.alter + " Nummer: " + this.studentNummer);
//     }
// }
// let Nils = new Student("Nils ", "Bergmann", 21, 1234);
// let Andi = new Student("Andi ", "Reich", 211, 1232134);
// let Zementa = new Student("Zementa ", "Beton", 12, 12321334);
// let Studenten: Student[] = [Nils, Andi, Zementa];
// Studenten.push(new Student("Andieee ", "Reirerch", 2161, 1232134));
// Nils.showInfo();
// Andi.showInfo();
// Zementa.showInfo();
// }
// namespace Aufgabe_2 {
//     let arr: number[] = [5, 42, 17, 28, -10, 60, -10010];
//     let arrBack: number[] = backwards(arr);
//     console.log(split(arr, 1, 5));
//     function backwards(a: number[]) {
//         let speicher: number[] = [];
//         for (let i = a.length - 1; i > 0; i--) {
//             speicher.push(a[i]);
//         }
//         return speicher;
//     }
//     function join(a: number[], b: number[], ...[]) {
//         for (let e = 0; e < b.length; e++) {
//             a.push(b[e]);   //a+b
//             a.push(...[e]); // Für alle 
//         }
//         return a;
//     }
//     function split(a: number[], b: number, c: number): number[] {
//         let speicherArr: number[] = [];
//         if (b < 0 || c > a.length - 1) {
//             console.log("Deine Werte sind Kacke ! ");
//         } else {
//             for (let e = b; e < c; e++) {
//                 speicherArr.push(a[e]);
//             }
//         }
//         return speicherArr;
//     }
//}
var Aufgabe_3;
(function (Aufgabe_3) {
    let canvas = document.querySelector("canvas"); //Hatte prob mit dem gegebenen Comand hoffe das passt so :D
    console.log(document.querySelector("canvas"));
    let context = canvas.getContext("2d");
    context.fillRect(100, 100, 100, 100);
    context.beginPath();
    context.moveTo(0, 210);
    context.lineTo(500, 210);
    context.fillStyle = "green";
    context.fillRect(0, 210, 500, 500);
    context.fillStyle = "blue";
    context.fillRect(0, 0, 500, 210);
    context.fillStyle = "black";
    context.closePath();
    context.stroke();
    context.fillRect(75, 140, 150, 110);
    context.fillStyle = "white";
    context.fillRect(130, 190, 40, 60);
    context.lineWidth = 20;
    context.beginPath();
    context.moveTo(50, 140);
    context.lineTo(150, 60);
    context.lineTo(250, 140);
    context.fill();
    context.closePath();
    context.stroke();
    context.fillStyle = "black";
    context.fillRect(400, 200, 50, 80);
    context.beginPath();
    context.moveTo(400, 200);
    context.lineTo(350, 200);
    context.lineTo(425, 130);
    context.lineTo(500, 200);
    context.lineTo(400, 200);
    context.fill();
    context.beginPath();
    //Wolken und ja es tut mir Leid dass sie nicht sooo schön ist ... :D 
    context.arc(400, 50, 20, 0, 2 * Math.PI, false);
    context.arc(430, 80, 20, 0, 2 * Math.PI, false);
    context.arc(420, 90, 20, 0, 2 * Math.PI, false);
    context.arc(460, 30, 20, 0, 2 * Math.PI, false);
    context.strokeStyle = "white";
    context.fillStyle = "white";
    context.fill();
    context.stroke();
})(Aufgabe_3 || (Aufgabe_3 = {}));
//namespace Aufgabe_3B {
//     let canvas: HTMLCanvasElement = document.querySelector("canvas");       //Hatte prob mit dem gegebenen Comand hoffe das passt so :D
//     console.log(document.querySelector("canvas"));
//     let context: CanvasRenderingContext2D = canvas.getContext("2d");
//     class Rechteck {
//         randomX: number;
//         randomY: number;
//         randomWith: number;
//         randomHeight: number;
//         constructor() {                             //Random werte werden generiert Aufgabe b
//             this.randomX = Math.random() * 100;
//             this.randomY = Math.random() * 100;
//             this.randomWith = Math.random() * 100;
//             this.randomHeight = Math.random() * 100;
//         }
//         public drawRect(): void {
//             context.beginPath();
//             context.fillRect(this.randomX, this.randomY, this.randomWith, this.randomHeight);
//         }
//         public drawRandom(a: number): void {
//             let sammler: Rechteck[] = [];
//             for (let e = 0; e <= a; e++) {
//                 sammler.push(new Rechteck());
//             }
//             for (let e = 0; e < sammler.length - 1; e++) {
//                 sammler[e].drawRect();
//             }
//         }
//     }
//     let hallo: Rechteck = new Rechteck();
//     hallo.drawRandom(12);
// }
//# sourceMappingURL=script.js.map