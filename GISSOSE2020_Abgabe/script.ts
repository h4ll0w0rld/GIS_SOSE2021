

namespace ModulpruefungGis {
    let playingArea: HTMLDivElement = <HTMLDivElement>document.getElementById("playingBackground");
    let selectCards: HTMLDivElement = <HTMLDivElement>document.getElementById("selectCards");
    export let baseUrl: string = "https://myfirsttestserverisnowlive.herokuapp.com";



    if (document.body.id == "playPage") {
        stardGame();

    } else if (document.body.id == "adminpage") {
        showCards();
    } else if (document.body.id == "score") {

        showHighscore();

    } else if (document.body.id == "enterName") {

        let submittButton: HTMLButtonElement = <HTMLButtonElement>document.getElementById("submittButtonUser");
        let nameInput: HTMLInputElement = <HTMLInputElement>document.getElementById("nameInput");
        document.getElementById("seeTime").innerHTML = "Du hast " + localStorage.getItem("Time") + " Sekunden gebraucht!";

        submittButton.addEventListener("click", async function e(): Promise<void> {
            let url: string = baseUrl + "/saveTime" + "?time=" + localStorage.getItem("Time") + "&name=" + nameInput.value;

            await fetchData(url);

            window.location.href = "score.html";


        });


    }




    async function stardGame(): Promise<PlayingCard[]> {

        let playingCards: PlayingCard[] = await ModulpruefungGis.getData();
        playingCards = playingCards.concat(playingCards);



        for (let i: number = 0; i < playingCards.length; i + 1) {
            let playingSlot: HTMLDivElement = document.createElement("div");
            let image: HTMLImageElement = document.createElement("img");
            let randomNumb: number = Math.floor(Math.random() * playingCards.length);

            playingSlot.classList.add("cardDiv");

            image.id = playingCards[randomNumb].src;
            image.src = "res/SpielGIS.jpg";
            image.classList.add("PlayingCard");
            image.alt = "Image" + i;
            image.addEventListener("click", cardClick);

            playingArea.append(playingSlot);
            playingSlot.append(image);

            playingCards.splice(randomNumb, 1);


        }
        return playingCards;

    }



    async function showCards(): Promise<void> {
        let playingCarts: CollectionData[] = await ModulpruefungGis.getData();
        for (let i: number = 0; i < playingCarts.length; i++) {

            let image: HTMLImageElement = document.createElement("img");
            let delButton: HTMLButtonElement = <HTMLButtonElement>document.createElement("button");

            image.src = playingCarts[i].src;
            image.classList.add("showCards");
            delButton.className = "delButton";


            delButton.addEventListener("click", async function (): Promise<void> {

                let url: string = baseUrl + "/delete?_id=" + playingCarts[i]._id;
                console.log("deleted");
                window.location.reload();
                await ModulpruefungGis.fetchData(url);

              


            });

            delButton.appendChild(document.createTextNode("L??schen"));
            selectCards.append(image);
            selectCards.appendChild(delButton);


        }
    }



    let firstImgRes: HTMLImageElement;
    let secondImgRes: HTMLImageElement;
    let firstSrc: string;
    let attemts: number = 1;
    let timeStart: number = -1;
    let timeEnd: number = -1;
    let firstTime: boolean = true;





    async function cardClick(_klick: MouseEvent): Promise<void> {

        if (firstTime) {
            timeNeeded();
            firstTime = false;

        }


        if (firstImgRes == null) {

            firstImgRes = <HTMLImageElement>_klick.currentTarget;
            firstSrc = firstImgRes.src;
            firstImgRes.src = firstImgRes.id;
            firstImgRes.removeEventListener("click", cardClick);


        } else if (firstImgRes != null && secondImgRes == null) {

            secondImgRes = <HTMLImageElement>_klick.currentTarget;
            secondImgRes.src = secondImgRes.id;


            if (firstImgRes != null && secondImgRes != null && firstImgRes.id == secondImgRes.id) {

                let playingCards: CollectionData[] = await ModulpruefungGis.getData();


                setTimeout(() => {


                    firstImgRes.remove();
                    secondImgRes.remove();
                    firstImgRes = null;
                    secondImgRes = null;
                    attemts += 1;



                }, 600);


                if (attemts >= playingCards.length) {

                  
                    localStorage.setItem("Time", String(timeNeeded()));
                    window.location.href = "entername.html";

                }




            } else if (firstImgRes != null && secondImgRes != null) {

                setTimeout(() => {

                    firstImgRes.src = firstSrc;
                    secondImgRes.src = firstSrc;
                    firstImgRes.addEventListener("click", cardClick);
                    firstImgRes = null;
                    secondImgRes = null;
                   

                }, 600);

            }
        }








        function timeNeeded(): number {

            let timeFinal: number = -1;


            if (timeStart == -1) {

                timeStart = performance.now();

            } else if (timeStart != -1 && timeEnd == -1) {

                timeEnd = performance.now();

            }


            if (timeStart != -1 && timeEnd != -1) {

                timeFinal = Math.round((timeEnd - timeStart) / 1000);
                timeStart = -1;
                timeEnd = -1;
              
            }
            return timeFinal;

        }





    }


    async function showHighscore(): Promise<void> {

        let highscore: Highscore[] = await ModulpruefungGis.getHighscore();

        highscore.sort((a, b) => (Number(a.time) > Number(b.time)) ? 1 : -1);

        for (let i: number = 0; i < highscore.length; i++) {

            let genDiv: HTMLDivElement = <HTMLDivElement>document.createElement("div");

            genDiv.classList.add("highscoreDiv");
            genDiv.innerHTML = (i + 1) + ": " + highscore[i].name + "</br>" + highscore[i].time + " Sekunden";

            document.body.append(genDiv);

        }



    }




    export interface Highscore {
        time: string;
        name: string;


    }



    export interface PlayingCard {
        src: string;
        location: string;
        date: string;

    }


    export interface CollectionData extends PlayingCard {
        _id: string;


    }
}
