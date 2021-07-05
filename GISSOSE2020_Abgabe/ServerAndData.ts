namespace ModulpruefungGis {
    let url: string = "https://myfirsttestserverisnowlive.herokuapp.com";


    if (document.body.id == "adminpage") {
        let sendButton: HTMLButtonElement = <HTMLButtonElement>document.getElementById("insertButton");
        sendButton.addEventListener("click", saveData);
    }




    export async function getData(): Promise<PlayingCard[]> {
        console.log("i am starting");
        url += "/getData";
        console.log(url);
        let response: Response = await fetch(url, { method: "get" });
        let responseText: string = await response.text();

        let responsePlayingCards: PlayingCard[] = JSON.parse(responseText);

        return responsePlayingCards;

    }




    async function saveData(): Promise<void> {
        if (document.body.id == "adminpage") {
            let userData: FormData = new FormData(document.forms[0]);
            console.log(document.forms[0]);

            let query: URLSearchParams = new URLSearchParams(<any>userData);
            console.log(query.toString);
            url = "https://myfirsttestserverisnowlive.herokuapp.com/save";
            url += "?" + query.toString();
            console.log(url);
            let response: Response = await fetch(url, { method: "get" });
            let responseText: string = await response.text();
            console.log(responseText);

        }

    }

    // async function fetchServer(): Promise<void> {


    // }







}