

namespace ModulpruefungGis {
    let playingArea: HTMLDivElement = <HTMLDivElement>document.getElementById("PlayingBackground");
    if (document.body.id == "playingpage") {
        showCards();
    }





    async function showCards(): Promise<PlayingCard[]> {
        let playingCarts: PlayingCard[] = await ModulpruefungGis.getData();
        let playingCardsCopy: PlayingCard[] = playingCarts;
        let cardCover: PlayingCard = playingCardsCopy[0];

        let final: PlayingCard[] = playingCarts.concat(playingCardsCopy);

        for (let i: number = 0; i < final.length; i + 1) {
            let playingSlot: HTMLDivElement = document.createElement("div");
            let image: HTMLImageElement = document.createElement("img");
            let randomNumb: number = Math.floor(Math.random() * final.length);
            console.log(randomNumb);
            image.id = final[randomNumb].src;
            image.src = cardCover.src;
            playingSlot.classList.add("cardDiv");
            image.classList.add("PlayingCard");
            image.alt = "Bild" + randomNumb;

            image.addEventListener("click", cardClick);

            playingArea.append(playingSlot);
            playingSlot.append(image);



            final.splice(randomNumb, 1);

        }
        return final;

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

                    console.log("RICHTIG");
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
}
