

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
        // let playingCardsCopy: PlayingCard[] = playingCarts;
        let cardCover: PlayingCard = playingCards[0];

        // let final: PlayingCard[] = playingCarts.concat(playingCardsCopy);

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



    async function cardClick(klick: MouseEvent): Promise<void> {


        if (firstImgRes == null) {

            firstImgRes = <HTMLImageElement>klick.currentTarget;
            firstSrc = firstImgRes.src;
            firstImgRes.src = firstImgRes.id;
            firstImgRes.removeEventListener("click", cardClick);

        } else if (firstImgRes != null && secondImgRes == null) {

            secondImgRes = <HTMLImageElement>klick.currentTarget;
            secondImgRes.src = secondImgRes.id;


            if (firstImgRes != null && secondImgRes != null && firstImgRes.id == secondImgRes.id) {
                setTimeout(() => {

                    firstImgRes.remove();
                    secondImgRes.remove();
                    firstImgRes = null;
                    secondImgRes = null;


                }, 800);



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
