

namespace ModulpruefungGis {
    let playingArea: HTMLDivElement = <HTMLDivElement>document.getElementById("PlayingBackground");
    let selectCards: HTMLDivElement = <HTMLDivElement>document.getElementById("selectCards");



    export let baseUrl: string = "https://myfirsttestserverisnowlive.herokuapp.com";

    if (document.body.id == "playPage") {
        stardGame();

    } else if (document.body.id == "adminpage") {
        showCards();
    }



    async function stardGame(): Promise<PlayingCard[]> {

        let playingCards: PlayingCard[] = await ModulpruefungGis.getData();
        playingCards = playingCards.concat(playingCards);

        let cardCover: PlayingCard = playingCards[0];



        for (let i: number = 0; i < playingCards.length; i + 1) {
            let playingSlot: HTMLDivElement = document.createElement("div");
            let image: HTMLImageElement = document.createElement("img");
            let randomNumb: number = Math.floor(Math.random() * playingCards.length);

            playingSlot.classList.add("cardDiv");

            image.id = playingCards[randomNumb].src;
            image.src = cardCover.src;
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
                await ModulpruefungGis.fetchData(url);

            });

            delButton.appendChild(document.createTextNode("Delete"));

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





    async function cardClick(klick: MouseEvent): Promise<void> {
        if (firstTime) {
            timeNeeded();
            firstTime = false;

        }



        if (firstImgRes == null) {

            firstImgRes = <HTMLImageElement>klick.currentTarget;
            firstSrc = firstImgRes.src;
            firstImgRes.src = firstImgRes.id;
            //  firstImgRes.removeEventListener("click", cardClick);

        } else if (firstImgRes != null && secondImgRes == null) {

            secondImgRes = <HTMLImageElement>klick.currentTarget;
            secondImgRes.src = secondImgRes.id;


            if (firstImgRes != null && secondImgRes != null && firstImgRes.id == secondImgRes.id) {

                let playingCards: CollectionData[] = await ModulpruefungGis.getData();


                setTimeout(() => {


                    firstImgRes.remove();
                    secondImgRes.remove();
                    firstImgRes = null;
                    secondImgRes = null;
                    attemts += 1;




                }, 800);


                if (attemts >= playingCards.length) {
                    let nameInput: HTMLInputElement = <HTMLInputElement>document.createElement("input");
                    let nameInputLabel: HTMLLabelElement = <HTMLLabelElement>document.createElement("label");
                    nameInputLabel.innerText = "Name"; //input für name Highscore 
                    nameInput.appendChild(nameInputLabel);
                    playingArea.append(nameInput);
                    let time: number = Math.round(timeNeeded());
                    console.log("Aus Aus Das Spiel ist aus!");
                    console.log("current Time:" + timeNeeded().toString());
                    console.log("BaseUrl: " + baseUrl);
                    let url: string = baseUrl + "/saveTime/?time=" + time;

                    fetchData(url);

                    // window.location.href = "score.html";

                }




            } else if (firstImgRes != null && secondImgRes != null) {

                setTimeout(() => {

                    firstImgRes.src = firstSrc;
                    secondImgRes.src = firstSrc;
                    firstImgRes.addEventListener("click", cardClick);
                    firstImgRes = null;
                    secondImgRes = null;
                    console.log("alles weg :)");

                }, 800);

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

                timeFinal = timeEnd - timeStart;
                timeStart = -1;
                timeEnd = -1;
                console.log("ich errechne" + timeFinal);

            }
            return timeFinal;

        }





    }


    interface Highscore {
        time: number;
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
