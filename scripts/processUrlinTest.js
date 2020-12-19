// server Sheet : https://docs.google.com/spreadsheets/d/1mBZJ01Ddhl9fByyJ5K-JEsruO7XV51i7ctdnRJ6-hGk/edit#gid=1449573075 
const resourceLocation = "https://docs.google.com/spreadsheets/d/1mBZJ01Ddhl9fByyJ5K-JEsruO7XV51i7ctdnRJ6-hGk/edit#gid=1449573075";
const url = "https://script.google.com/macros/s/AKfycbxeONL9wDhS1GOnHJapV-67BMKFQk-k9WMA5m4C77mROTCipMQ/exec";

function makeDoGetRequest() {
    console.log(" In DG function:");
    fetch(url)
        .then(res => res.json())
        .then(res => {
            console.log(res);
            document.getElementById("getResponse").textContent = res[0].status;
        });
}

function makeDoPostRequest() {
    console.log(" In AddRow function:");
    fetch(url, {
        method: 'POST', // *GET, POST, PUT, DELETE, etc.
        mode: 'no-cors', // no-cors, *cors, same-origin
        cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
        //credentials: 'same-origin', // include, *same-origin, omit
        // headers: {
        //     'Content-Type': 'application/json'
        //         // 'Content-Type': 'application/x-www-form-urlencoded',
        // },
        redirect: 'follow', // manual, *follow, error
        //   referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
        body: JSON.stringify({
                name: "Testing doPost"
            }) // body data type must match "Content-Type" header
    })
    .then(res => res.json())
    .then(res => {
        document.getElementById("postResponse").textContent = res[0].status;
    });
}
document.getElementById("btn").addEventListener("click", makeDoGetRequest);
document.getElementById("btn2").addEventListener("click", makeDoPostRequest);
