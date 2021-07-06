"use strict";
var ModulpruefungGis;
(function (ModulpruefungGis) {
    let playingArea = document.getElementById("PlayingBackground");
    let selectCards = document.getElementById("selectCards");
    ModulpruefungGis.baseUrl = "https://myfirsttestserverisnowlive.herokuapp.com";
    if (document.body.id == "playPage") {
        stardGame();
    }
    else if (document.body.id == "adminpage") {
        showCards();
    }
    else if (document.body.id == "score") {
        showHighscore();
    }
    async function stardGame() {
        let playingCards = await ModulpruefungGis.getData();
        playingCards = playingCards.concat(playingCards);
        let cardCover = playingCards[0];
        for (let i = 0; i < playingCards.length; i + 1) {
            let playingSlot = document.createElement("div");
            let image = document.createElement("img");
            let randomNumb = Math.floor(Math.random() * playingCards.length);
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
    async function showCards() {
        let playingCarts = await ModulpruefungGis.getData();
        for (let i = 0; i < playingCarts.length; i++) {
            let image = document.createElement("img");
            let delButton = document.createElement("button");
            image.src = playingCarts[i].src;
            image.classList.add("showCards");
            delButton.className = "delButton";
            delButton.addEventListener("click", async function () {
                let url = ModulpruefungGis.baseUrl + "/delete?_id=" + playingCarts[i]._id;
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
    let attemts = 1;
    let timeStart = -1;
    let timeEnd = -1;
    let firstTime = true;
    async function cardClick(klick) {
        if (firstTime) {
            timeNeeded();
            firstTime = false;
        }
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
                let playingCards = await ModulpruefungGis.getData();
                setTimeout(() => {
                    firstImgRes.remove();
                    secondImgRes.remove();
                    firstImgRes = null;
                    secondImgRes = null;
                    attemts += 1;
                }, 800);
                if (attemts >= playingCards.length) {
                    let formData = document.createElement("form");
                    let nameInput = document.createElement("input");
                    let nameInputLabel = document.createElement("label");
                    let submittButton = document.createElement("button");
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
                    submittButton.addEventListener("click", async function () {
                        let timeString = String(timeNeeded());
                        let url = ModulpruefungGis.baseUrl + "/saveTime" + "?time=" + timeString + "&name=" + nameInput.value;
                        await ModulpruefungGis.fetchData(url);
                    });
                    window.location.href = "score.html";
                }
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
        function timeNeeded() {
            let timeFinal = -1;
            if (timeStart == -1) {
                timeStart = performance.now();
            }
            else if (timeStart != -1 && timeEnd == -1) {
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
    async function showHighscore() {
        let highscore = await ModulpruefungGis.getHighscore();
        console.log(highscore.length);
        for (let i = 0; i < highscore.length; i++) {
            let genDiv = document.createElement("div");
            console.log("Name: " + highscore[i].name + " Highscore: " + highscore[i].time);
            genDiv.innerHTML = "Name: " + highscore[i].name + " Highscore: " + highscore[i].time;
            document.body.append(genDiv);
        }
    }
})(ModulpruefungGis || (ModulpruefungGis = {}));
//# sourceMappingURL=script.js.map