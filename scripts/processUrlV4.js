var requrl = 'https://script.google.com/macros/s/AKfycbw5ms6neWmUKNUilhwQpqtD8p62lEpsbaVWnp5tvUJnf0XrUk09/exec';
//data = {};
// Default options are marked with *
urlParameters = {
    method: 'POST', // *GET, POST, PUT, DELETE, etc.
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
        .then(res => res.text()).then(json => {
           console.log(json)
            document.getElementById("output").innerText = json;
        });
    
        // .then(response => { response.json() })
        // .then(json => {
        //     
        //     console.log(data); /* process your data further */
        //     return data;
        // })
        // .catch(error => console.log(error));
    
}
//while making a get Req with Query parameters url has to build from the process Url
// when no parameter it return a seems, you have lost you way message.
//when making a post reqst a normal post works.
function processSubmit(e) { 
    e.preventDefault();
    console.log("processing Submit")
  //  params1 =? TypeOfRequest = signUpUser;
  var url = requrl;
 // let url = new URL(requrl);


    // url.searchParams.set('q', 'test me!');
    // params1 = {
    //  }
   
    fetchUrl(url);

}

function addRow(e) { 

    e.preventDefault();
    console.log("processing AddRow")
    //  params1 =? TypeOfRequest = signUpUser;
    var url = requrl;
   
    // params1 = {
    //     method: 'POST', // *GET, POST, PUT, DELETE, etc.
    //    mode: 'no-cors', // no-cors, *cors, same-origin
    //     cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
    // //   //  credentials: 'omit', // include, *same-origin, omit
    // //     // headers: {
    // //     //     'Content-Type': 'application/json'
    // //     //     // 'Content-Type': 'application/x-www-form-urlencoded',
    // //     // },
    //     redirect: 'follow', // manual, *follow, error
    // //     //  referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
    //     body: JSON.stringify({ name:"jsmith"}) // body data type must match "Content-Type" header
    // }

    // fetchUrl(url, params1);
    fetch(url, {
        method: 'POST', // *GET, POST, PUT, DELETE, etc.
        mode: 'no-cors', // no-cors, *cors, same-origin
        cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
        //credentials: 'same-origin', // include, *same-origin, omit
        headers: {
            'Content-Type': 'application/json'
                // 'Content-Type': 'application/x-www-form-urlencoded',
        },
        redirect: 'follow', // manual, *follow, error
        //   referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
        payload: JSON.stringify({
                name: "Samyuktha"
            }) // body data type must match "Content-Type" header
    });


}


document.getElementById("btn").addEventListener("click", processSubmit);
document.getElementById("btn2").addEventListener("click", addRow);