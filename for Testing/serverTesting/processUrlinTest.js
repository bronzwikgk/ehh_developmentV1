// server Sheet : link 
//https://docs.google.com/spreadsheets/d/1sOAYeOP87x-G9-T-05J2IJ7Y99dG8uokGWwz9zEo_bM/edit?pli=1#gid=924939162
//
function makeDoGetRequest() {
    //const url = "https://script.google.com/macros/s/AKfycbyM98yF8YcaBJ1JkMUG9QNVn-PnKqLvYikPCjgNKcjvoDsGc1o/exec";
    const url = "https://script.google.com/macros/s/AKfycbw5ms6neWmUKNUilhwQpqtD8p62lEpsbaVWnp5tvUJnf0XrUk09/exec";
    console.log(" In DG function:");
    fetch(url)
        .then(res => res.json())
        .then(res => {
            document.getElementById("here").textContent = res[0].status;
        });
}

function makeDoPostRequest() {
    console.log(" In AddRow function:");
    const url = "https://script.google.com/macros/s/AKfycbw5ms6neWmUKNUilhwQpqtD8p62lEpsbaVWnp5tvUJnf0XrUk09/exec";
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
    });
}
document.getElementById("btn").addEventListener("click", makeDoGetRequest);
document.getElementById("btn2").addEventListener("click", makeDoPostRequest);
