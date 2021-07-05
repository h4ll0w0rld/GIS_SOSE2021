"use strict";
var ModulpruefungGis;
(function (ModulpruefungGis) {
    let playingArea = document.getElementById("PlayingBackground");
    let selectCards = document.getElementById("selectCards");
    if (document.body.id == "playPage") {
        stardGame();
    }
    else if (document.body.id == "adminpage") {
        showCards();
    }
    async function stardGame() {
        let playingCarts = await ModulpruefungGis.getData();
        let playingCardsCopy = playingCarts;
        let cardCover = playingCardsCopy[0];
        let final = playingCarts.concat(playingCardsCopy);
        for (let i = 0; i < final.length; i + 1) {
            let playingSlot = document.createElement("div");
            let image = document.createElement("img");
            let randomNumb = Math.floor(Math.random() * final.length);
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
        return playingCarts;
    }
    async function showCards() {
        let playingCarts = await ModulpruefungGis.getData();
        for (let i = 0; i < playingCarts.length; i++) {
            let image = document.createElement("img");
            let delButton = document.createElement("button");
            image.src = playingCarts[i].src;
            image.classList.add("showCards");
            delButton.className = "delButton";
            delButton.addEventListener("click", async function () {
                url = ModulpruefungGis.baseUrl + "/delete?_id=" + playingCarts[i].id;
                console.log("deleted");
                await ModulpruefungGis.fetchData(url);
            });
            delButton.appendChild(document.createTextNode("Delete"));
            selectCards.append(image);
            selectCards.appendChild(delButton);
        }
    }
    let firstImgRes;
    let secondImgRes;
    let firstSrc;
    async function cardClick(klick) {
        if (firstImgRes == null) {
            firstImgRes = klick.currentTarget;
            firstSrc = firstImgRes.src;
            firstImgRes.src = firstImgRes.id;
            firstImgRes.removeEventListener("click", cardClick);
        }
        else if (firstImgRes != null && secondImgRes == null) {
            secondImgRes = klick.currentTarget;
            secondImgRes.src = secondImgRes.id;
            if (firstImgRes != null && secondImgRes != null && firstImgRes.id == secondImgRes.id) {
                setTimeout(() => {
                    console.log("RICHTIG");
                    firstImgRes.remove();
                    secondImgRes.remove();
                    firstImgRes = null;
                    secondImgRes = null;
                }, 800);
            }
            else if (firstImgRes != null && secondImgRes != null) {
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
})(ModulpruefungGis || (ModulpruefungGis = {}));
//# sourceMappingURL=script.js.map