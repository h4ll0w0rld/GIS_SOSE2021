namespace ModulpruefungGis {
    let baseUrl: string = "https://myfirsttestserverisnowlive.herokuapp.com";
    let url: string = baseUrl;
    let dataBaseImg: CollectionData[];
    let highscoreArray: Highscore[];


    if (document.body.id == "adminpage") {

        let saveNewImage: HTMLButtonElement = <HTMLButtonElement>document.getElementById("insertButton");
        saveNewImage.addEventListener("click", function (): void {
            url = baseUrl + "/save";
            saveData();
        });




    }
    export async function fetchData(url: string): Promise<string> {
      
        let response: Response = await fetch(url, { method: "get" });
        let responseText: string = await response.text();

        return responseText;

    }




    export async function getData(): Promise<CollectionData[]> {
     
        url = baseUrl + "/getData";
        if (dataBaseImg == undefined) {
            dataBaseImg = JSON.parse(await fetchData(url));
           
        }

        return dataBaseImg;

    }
    
    export async function getHighscore(): Promise<Highscore[]> {
       
        url = baseUrl + "/getHighscore";
        if (highscoreArray == undefined) {
            highscoreArray = JSON.parse(await fetchData(url));
           
        }

        return highscoreArray;

    }




    async function saveData(): Promise<void> {
        if (document.body.id == "adminpage") {
            let userData: FormData = new FormData(document.forms[0]);
            let query: URLSearchParams = new URLSearchParams(<any>userData);
            url += "?" + query.toString();

            console.log(await fetchData(url));

        }

    }



    export function deleteData(): void {
        url = baseUrl + "/delete";
        url += "?";

    }



}