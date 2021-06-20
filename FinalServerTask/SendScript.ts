
namespace SendScript {
    let url: string = "Bla";


    let sendButton: HTMLButtonElement = <HTMLButtonElement>document.getElementById("SendDataButton");
    sendButton.addEventListener("click", sendData);


    let showButton: HTMLButtonElement = <HTMLButtonElement>document.getElementById("ShowDataButton");
    showButton.addEventListener("click", showData);



    async function sendTheData(): Promise<string> {
        console.log("Jup");
        let userData: FormData = new FormData(document.forms[0]);
        let query: URLSearchParams = new URLSearchParams(<any>userData);
        url += "?" + query.toString();
        console.log(url);
        let response: Response = await fetch(url, { method: "get" });
        let responseText: string = await response.text();

        return responseText;

    }

    async function sendData(): Promise<void> {
        url = "https://myfirsttestserverisnowlive.herokuapp.com/send";
        await sendTheData();
        console.log("Hello Its me");

    }


    async function showData(): Promise<void> {
        url = "https://myfirsttestserverisnowlive.herokuapp.com/show";
        // let responseTe = await sendTheData
        showResponsee();


    }


    async function showResponsee():Promise< void> {
        let response: string = await sendTheData();
        let responseDiv: HTMLDivElement = <HTMLDivElement>document.getElementById("response");
        responseDiv.innerHTML = "Serverantwort: " + await response;

    }




}