//https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
data = { status: "notCool!"};
url = 'https://script.google.com/macros/s/AKfycby0xncHlv4T2iaNeQ46wyh1BjXBot0htqUcytdduHnSez8X4PE/exec';
request = {
     // Default options are marked with *
    method: 'get', // *GET, POST, PUT, DELETE, etc.
   // mode: 'cors', // no-cors, *cors, same-origin
   // cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
  //  credentials: 'same-origin', // include, *same-origin, omit
    // headers: {
    //     'Content-Type': 'application/json'
    //     // 'Content-Type': 'application/x-www-form-urlencoded',
    // },
  //  redirect: 'follow', // manual, *follow, error
   // referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
    body: JSON.stringify(data) // body data type must match "Content-Type" header
}
var gAuthRequestparams = {
    'client_id': '385607167966-u90ri3n5qkapcuq8gmhheg781qr7jbkp.apps.googleusercontent.com',
    'redirect_uri': 'https://bronzwikgk.github.io/ehh_Wip/',
    'scope': 'https://www.googleapis.com/auth/drive.metadata.readonly',
    'state': 'accessTokenRecived',
    'include_granted_scopes': 'true',
    'response_type': 'token'
};


function fetchHttpRequest(url, request) {
    fetch(url,request)
        .then(status)
        .then(json)
        .then(function (data) {
         //   console.log('Request succeeded with JSON response', data);
            return data;
        }).catch(function (error) {
            console.log('Request failed', error);
        });
}

function fetchUrl(url, params) {
    fetch(url, params)
        .then(response => {
            if (!response.ok) { throw new Error("Could not reach website."); }
            return response.json();
        })
        .then(json => console.log(json))
        .catch(err => console.error(err));
    
    // fetch(url, params)
    //     .then(res => res.text()).then(json => {
    //         console.log(json)
    //         document.getElementById("output").innerText = json;
    // });

}


function status(response) {
    if (response.status >= 200 && response.status < 300) {
        console.log(response.statusText);
        return Promise.resolve(response)
    } else {
        return Promise.reject(new Error(response.statusText))
    }
}
function json(response) {
    return response.json()
}

///USed to encode Params 
function buildEncodedUri(request) {
    const response = [];
    for (let d in request)
        {response.push(encodeURIComponent(d) + '=' + encodeURIComponent(request[d]));}
    return response.join('&');
}
// unbuilds the URL parameters and returns an object
function unbuildEndodedUri(request) { 
    var urifragment = request.split("&"), data = {}, i, parts;
    //process each par
    for (i = 0; i < urifragment.length; i++) {
        parts = urifragment[i].split("=");
        if (parts.length < 2) {
            parts.push("");
            console.log(parts);
        }
        data[decodeURIComponent(parts[0])] = decodeURIComponent(parts[1]);
    }
    
    console.log("Returning from", arguments.callee.name, data);
    
    return data;    
}






document.getElementById("btn").addEventListener("click", processSubmit);
//while making a get Req with Query parameters url has to build from the process Url
// when no parameter it return a seems, you have lost you way message.
//when making a post reqst a normal post works.
function processSubmit(e) {
    e.preventDefault();

    //  params1 =? TypeOfRequest = signUpUser;
    // var url = requrl;
   // let url = new URL(requrl);
  //  params1 = { status: "notCool!" }
    var encodedParam = buildEncodedUri(request);
  //  var decodedParam = unbuildEndodedUri(encodedParam);
      var url2 = url + "?"+encodedParam
console.log(url2)
    fetchUrl(url2);
   // console.log(url)
}
