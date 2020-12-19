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



document.getElementById("btn2").addEventListener("click", addRow);