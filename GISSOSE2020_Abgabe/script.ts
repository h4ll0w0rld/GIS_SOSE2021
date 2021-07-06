

namespace ModulpruefungGis {
    let playingArea: HTMLDivElement = <HTMLDivElement>document.getElementById("PlayingBackground");
    let selectCards: HTMLDivElement = <HTMLDivElement>document.getElementById("selectCards");



    export let baseUrl: string = "https://myfirsttestserverisnowlive.herokuapp.com";

    if (document.body.id == "playPage") {
        stardGame();

    } else if (document.body.id == "adminpage") {
        showCards();
    } else if (document.body.id == "score") {
        showHighscore();
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
            firstImgRes.removeEventListener("click", cardClick);


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
                    let formData: HTMLFormElement = <HTMLFormElement>document.createElement("form");
                    let nameInput: HTMLInputElement = <HTMLInputElement>document.createElement("input");
                    let nameInputLabel: HTMLLabelElement = <HTMLLabelElement>document.createElement("label");
                    let submittButton: HTMLButtonElement = <HTMLButtonElement>document.createElement("button");

                    nameInputLabel.innerText = "Bitte gib deinen Namen für den Highscore ein";
                    nameInput.name = "name";



                    document.body.append(formData);
                    formData.appendChild(nameInput);
                    formData.appendChild(nameInputLabel);
                    formData.appendChild(submittButton);


                    console.log("Aus Aus Das Spiel ist aus!");


                    formData.onsubmit = () => {
                        console.log(document.forms[0]);

                        return false;

                    };


                    submittButton.addEventListener("click", async function (): Promise<void> {


                        let timeString: string = String(timeNeeded());

                        let url: string = baseUrl + "/saveTime" + "?time=" + timeString + "&name=" + nameInput.value;

                        await fetchData(url);

                    });




                    window.location.href = "score.html";

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
    async function showHighscore(): Promise<void> {
      
        let highscore: Highscore[] = await ModulpruefungGis.getHighscore();
        console.log(highscore.length);
        for (let i: number = 0; i < highscore.length; i++) {
            let genDiv: HTMLDivElement = <HTMLDivElement>document.createElement("div");
            console.log("Name: " +  highscore[i].name + " Highscore: " + highscore[i].time);
            genDiv.innerHTML = "Name: " +  highscore[i].name + " Highscore: " + highscore[i].time;
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
