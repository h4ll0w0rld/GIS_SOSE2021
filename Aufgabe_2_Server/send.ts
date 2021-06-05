let buttonSubmitt: HTMLButtonElement = <HTMLButtonElement>document.getElementById("submit");
buttonSubmitt.addEventListener("click", sendTheData);

async function sendTheData(): Promise<void> {
    console.log("its all fine");
    let userData: FormData = new FormData(document.forms[0]);
    let url: string = "https://myfirsttestserverisnowlive.herokuapp.com/";
   // let url: string = "http://localhost:8122";
    let query: URLSearchParams = new URLSearchParams(<any>userData);
    url += "?" + query.toString();
    let response: Response = await fetch(url, { method: "get" });
    let responseText: string = await response.text();
    console.log(responseText);
    showResponsee(responseText);

}
function showResponsee(response: string): void {
    let responseDiv: HTMLDivElement = <HTMLDivElement>document.getElementById("response");
    responseDiv.innerHTML = "Serverantwort: " + response;

}

