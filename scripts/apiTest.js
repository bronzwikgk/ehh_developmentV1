// var output = getResponse();
// console.log(output);


function getResponse() {
    var requestURL = "https://raw.githubusercontent.com/bronzwikgk/ehh_developmentV1/main/json/sampleData/sampleSchemaV2.json";
    var tempo = fetch(requestURL)
    .then(response => response.json())
       .then(json => { getPayload(json)})
  //  console.log("requestResponse", tempo);
  //  return requestResponse;
}

function getPayload(payload) { 
    
  //  console.log(payload);
    var temp = process.json2Array(payload);
  //  console.log(temp);


    
}


function getResponse2() {
    var requestURL = "https://script.google.com/macros/s/AKfycbyOQZ3JCvko4kI8_Fr9PoZjJA0ERjQftjHwf70VZwkf/dev";
       var request = {
      //  method: 'get', // *GET, POST, PUT, DELETE, etc.
        mode: 'no-cors', // no-cors, *cors, same-origin
         //cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
       // credentials: 'omit', // include, *same-origin, omit
        // headers: {
        //     'Content-Type': 'application/json'
        //     // 'Content-Type': 'application/x-www-form-urlencoded',
        // },
        //
        redirect: 'follow' // manual, *follow, error
        //referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
        //body: JSON.stringify(data) // body data type must match "Content-Type" header
    }
//console.log(payload);
    fetch(requestURL,request)
    .then(response => response.json())
    .then(text => console.log(text))

}

function setPayload() {
    var requestURL = "https://script.google.com/a/0dot1.live/macros/s/AKfycbxjy_A1pOVpuAEsJDXdnRbsA83S_1oy7Dt81hf0beLL/dev";
    var data = { name : "john"}
       var payload = {
        method: 'POST', // *GET, POST, PUT, DELETE, etc.
        // mode: 'no-cors', // no-cors, *cors, same-origin
          cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
        // credentials: 'omit', // include, *same-origin, omit
        // headers: {
        //     'Content-Type': 'application/json'
        //     // 'Content-Type': 'application/x-www-form-urlencoded',
        // },
        redirect: 'follow', // manual, *follow, error
     //   referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
        body: JSON.stringify(data) // body data type must match "Content-Type" header
    }
console.log(payload);
    fetch(requestURL,setPayload)
    .then(response => response.json())
    .then(json => console.log(json))

}



document.getElementById("btn").addEventListener("click", getResponse);
document.getElementById("btn2").addEventListener("click", setPayload);
