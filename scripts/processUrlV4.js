var requrl = 'https://script.google.com/macros/s/AKfycbw5ms6neWmUKNUilhwQpqtD8p62lEpsbaVWnp5tvUJnf0XrUk09/exec';
data = {};
// Default options are marked with *
urlParameters = {
    method: 'GET', // *GET, POST, PUT, DELETE, etc.
    mode: 'no-cors', // no-cors, *cors, same-origin
  //  cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
    // credentials: 'same-origin', // include, *same-origin, omit
    // headers: {
    //     'Content-Type': 'application/json'
    //     // 'Content-Type': 'application/x-www-form-urlencoded',
    // },
    redirect: 'follow', // manual, *follow, error
    //  referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
    // body: JSON.stringify(data) // body data type must match "Content-Type" header
}



function fetchUrl(url, params) { 
    fetch(url,params)
        .then(res => res.json()).then(json => {
           //console.log(json)
            document.getElementById("output").innerText = json[0].status;
        });
    
        // .then(response => { response.json() })
        // .then(json => {
        //     
        //     console.log(data); /* process your data further */
        //     return data;
        // })
        // .catch(error => console.log(error));
    
}

function processSubmit(e) { 
    e.preventDefault();
    console.log("processing Submit")
    var url = requrl;
    params = {};
    fetchUrl(url,params);

}


var submitButton = document.getElementById("btn");

submitButton.addEventListener("click", processSubmit);