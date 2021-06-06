
let buttonJson: HTMLButtonElement = <HTMLButtonElement>document.getElementById("JsonButton");
buttonJson.addEventListener("click", showJson);

let buttonHtml: HTMLButtonElement = <HTMLButtonElement>document.getElementById("HtmlButton");
buttonHtml.addEventListener("click", showHtml);

let url: string ;

async function sendTheData(): Promise<string> {
    console.log("Jup");
    let userData: FormData = new FormData(document.forms[0]);
    let query: URLSearchParams = new URLSearchParams(<any>userData);
    url += "?" + query.toString();
    let response: Response = await fetch(url, { method: "get" });
    let responseText: string = await response.text();

    return responseText;

}

async function showJson(): Promise<void> {
    url = "https://myfirsttestserverisnowlive.herokuapp.com/json";
    console.log(await sendTheData());

}


async function showHtml(): Promise<void> {
    url = "https://myfirsttestserverisnowlive.herokuapp.com/html";
    showResponsee(await sendTheData());

}


function showResponsee(response: string): void {
    let responseDiv: HTMLDivElement = <HTMLDivElement>document.getElementById("response");
    responseDiv.innerHTML = "Serverantwort: " + response;

}

