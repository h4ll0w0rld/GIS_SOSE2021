
var form = document.querySelector("form");
var data: FormData = new FormData(form);

form.onsubmit = (event) => {
    sendTheData();
};


async function sendTheData(): Promise<void> {
    let response: Response = await fetch("https://myfirsttestserverisnowlive.herokuapp.com", {
        method: "post",
        body: data
    });
    let parser = await response.json();
    console.log(parser);

}


