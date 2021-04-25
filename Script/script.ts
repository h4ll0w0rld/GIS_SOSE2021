/* console.log("hello its me");

//a1(); //Call first Task
function a1(): void {
  //  debugger;   //Wurde für 1.3 geändert
    let x: string = "Alles";
    console.log(x + func2());         
    console.log(x + func1());
    console.log(x + func3());
    
    console.log("Logo!");
}




//Aufgabe 1.a  "Alles", "Klar?", "Logo" ; Es gehen alle Namen die sich keiner "falschen" Zeichen bedienen/Namen die noch nicht existieren

// Aufgabe 1.b Code reihenfolge... : a1() (Z10) startet function a1 diese läuft von oben nach unten durch bis sie in Z6 func1() aufruft hier wird schnell das "Klar?" ausgegeben dann geht es weiter in a1() :D 
function func1(): void {
    console.log("klar?");
}
function func2(): void {
    console.log("Gute?");
}
function func3(): void {
    console.log("Logo!");
}

//Aufgabe 2.a i ist am anfang = 9 und wird in jedem durchlauf der do/while um 1 verringert bis i=0 wärend dessen wird i ausgegeben (Z35)9,8,7,6...bis 1
function a2(): void {
    let i: number = 9;

    do {
        console.log(i);
        i = i - 1;
    } while ( i > 0);
}

a2();



//Aufgabe 3 Fehler da und Hokus pokus wieder weg :D 
let x: string = "Hallo";
console.log(x);
func1(x);
console.log(x);
func2();
func3();
console.log(x);

function func1(y: string): void {
    y = "Bla";
    console.log(y);
}

function func2(): void {
    let x: string = "Blubb";
    console.log(x);
}

function func3(): void {
    x = "Test";
}
//Aufgabe 4.a Ausgabe "Hallo", Bla, Hallo, Blubb,Test Warum ? : Weil so geschrieben die Funktionen ändern die Var nicht sonnst alles Chronologisch wie in "main" beschrieben
//Aufgabe 4.b Z46 ist eine globale Var sie wird auserhalb einer Funktion deekleriert und ist immer "da", lokale sind in lokalen Fuktionen wie z.B. func1 etc. sie werden nur innerhalb dieser Funktion "benutzbar" sein außer sie werden mit get/set verändert bzw abgefragt (grobe beschreibung) 
//übergabe Vars sind Vars welche z.B. bei func1 in der klammer stehen func1(y: string) sie sind Vars welche für die übergabe von Parametern in eine funktion zuständig sind 
*/

//Aufgabe 5.a/b/c
let z1: number = 5;
let z2: number = 7;
//max(z1, z2);
//alles();
// factorial(z1);
// leapyears();
schach(8, 8);

function multiply(z1: number, z2: number): void {
    console.log(z1 * z2);

}
function max(z1: number, z2: number): void {
    if (z1 < z2) {
        console.log(z2 + " is biggest");

    } else
        console.log(z1 + "is biggest");
}
function alles(): void {
    let counter: number = 0;
    let a: number = 0;
    while (a < 100) {
        counter += a;
        a++;

    }
    console.log(counter);
}
//Aufgabe 5.d
/*for ( var _i = 0; _i < 10; _i++) {
     console.log (Math.random() * 100 );
     //Warum muss hier so komisch mit Whitespace gearbeitet werden ?! 

 }*/
//Aufgabe 5.e
function factorial(z1: number): void {
    let counter1: number = 1;

    for (var _i = 2; _i <= z1; _i++) {
        counter1 *= _i;
    }
    console.log(counter1);
}
//Aufgabe 5.f
function leapyears(): void {
    for (var year = 1900; year < 2021; year++) {
        if (year % 4 == 0 && (year % 100 != 0) || year % 400 == 0)
            console.log("Das Jahr: " + year + " ist ein Schaltjahr !");

    }
}

//Aufgabe 6.a
/*let hash: String = "";
for (var _i = 0; _i < 7; _i++) {
     hash += "#";
     console.log(hash);
    
}*/
//Aufgabe 6.b
/*for (var _i = 0; _i < 100; _i++) {
    if (_i % 3 != 0 && _i % 5 != 0) {
        console.log(_i);
    }
    if (_i % 3 == 0) {
        console.log("Fizz");

    } else if (_i % 5 == 0) {
        console.log("Buzz");
    }
    if (_i % 3 == 0 && _i % 5 == 0) {
        console.log("FizzBuzz");

    }
    */
function schach(höhe: number, breite: number): void {

    for (var _i = 0; _i < höhe; _i++) {
        let reihe: String = "";
        for (var _a = 1; _a <= breite; _a++) {

            if ((_i + _a) % 2 == 0) {
                reihe += "#";
            } else {
                reihe += "-";  //Bessere Sichtbarkeit
            }
            console.log("");
           
            
        }
        console.log(reihe);


    }
}


















