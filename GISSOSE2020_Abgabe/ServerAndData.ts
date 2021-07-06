namespace ModulpruefungGis {
    let baseUrl: string = "https://myfirsttestserverisnowlive.herokuapp.com";
    let url: string = baseUrl;
    let dataBaseImg: CollectionData[];


    if (document.body.id == "adminpage") {

        let saveNewImage: HTMLButtonElement = <HTMLButtonElement>document.getElementById("insertButton");
        saveNewImage.addEventListener("click", function (): void {
            url = baseUrl + "/save";
            saveData();
        });




    }
    export async function fetchData(url: string): Promise<string> {
        console.log(url);
        let response: Response = await fetch(url, { method: "get" });
        let responseText: string = await response.text();

        return responseText;

    }




    export async function getData(): Promise<CollectionData[]> {
        console.log("i am starting");
        url = baseUrl + "/getData";
        if (dataBaseImg == undefined) {
            dataBaseImg = JSON.parse(await fetchData(url));
            console.log("ACHTUNG");
        }

        return dataBaseImg;

    }




    async function saveData(): Promise<void> {
        if (document.body.id == "adminpage") {
            let userData: FormData = new FormData(document.forms[0]);
            let query: URLSearchParams = new URLSearchParams(<any>userData);
            url += "?" + query.toString();

            console.log(await fetchData(url));

        }

    }



    export function deleteData(Card: PlayingCard): void {
        url = baseUrl + "/delete";
        url += "?";

    }



}