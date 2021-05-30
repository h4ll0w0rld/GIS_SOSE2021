"use strict";
let checkFinisch = document.getElementById("submit");
var form = document.querySelector('form');
var data = new FormData(form);
// const entries = data.entries();
// getFormData();
// async function getFormData() {
//     for (let entry of entries) {
//         const key = entry[0];
//         const val = await entry[1];
//         await console.log(key);
//         await console.log(val);
//     }
// }
form.onsubmit = (event) => {
    const data = new FormData(form);
    const pairs = Array.from(data.entries());
    for (let pair of pairs) {
        console.log(pair);
    }
    fetch("https://myfirsttestserverisnowlive.herokuapp.com", {
        method: "post",
        body: data
    });
};
//# sourceMappingURL=send.js.map