
namespace SendScript {
    let url: string = "Bla";

    let sendButton: HTMLButtonElement = <HTMLButtonElement>document.getElementById("SendDataButton");
    sendButton.addEventListener("click", sendData);


    let showButton: HTMLButtonElement = <HTMLButtonElement>document.getElementById("ShowDataButton");
    showButton.addEventListener("click", showData);



    async function sendTheData(): Promise<string> {
        let userData: FormData = new FormData(document.forms[0]);
        let query: URLSearchParams = new URLSearchParams(<any>userData);
        url += "?" + query.toString();
        let response: Response = await fetch(url, { method: "get" });
        let responseText: string = await response.text();
        console.log("Data has been send!");

        return responseText;

    }

    async function sendData(): Promise<void> {
        url = "https://myfirsttestserverisnowlive.herokuapp.com/send";
        await sendTheData();

    }


    async function showData(): Promise<void> {
        url = "https://myfirsttestserverisnowlive.herokuapp.com/show";
        showResponsee();


    }


    async function showResponsee(): Promise< void> {
        let response: string = await sendTheData();
        let responseDiv: HTMLDivElement = <HTMLDivElement>document.getElementById("response");
        responseDiv.innerHTML = "Serverantwort: " +  response;

    }




}