//https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
//http://dummy.restapiexample.com/
//https://github.com/mdn/fetch-examples/
//https://github.com/mdn/fetch-examples/blob/master/fetch-array-buffer/index.html
//https://www.w3schools.com/tags/ref_httpmethods.asp
//https://www.youtube.com/watch?v=_1xa8Bsho6A
//https://github.com/bradtraversy/vanilla-node-rest-api
// async function name([param[, param[, ...param]]]) {
//     statements
// }
//https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
 
// //var data = {
//     'first': firstName."Gitesh",
//     last: lastName.value,
//     phone: phoneNumber.value,
//     city: city.value,
// };
//data = { status: "notCool!" };
var data = {
    'first': "firstName.value",
    "last": "lastName.value",
    'phone': "phoneNumber.value",
    "city": "city.value",
};


reqUrl = 'https://script.google.com/macros/s/AKfycby0xncHlv4T2iaNeQ46wyh1BjXBot0htqUcytdduHnSez8X4PE/exec';
request = {
     // Default options are marked with *
     method: 'POST', // *GET, POST, PUT, DELETE, etc.
    // mode: 'no-cors', // no-cors, *cors, same-origin
    // cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
//    // credentials: 'same-origin', // include, *same-origin, omit
//     headers: {
//         'Content-Type': 'application/json'
//         // 'Content-Type': 'application/x-www-form-urlencoded',
//     },
//     redirect: 'follow', // manual, *follow, error
//    // referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
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
    fetch(url, request)
        .then(response => {
            if (!response.ok) { throw new Error("Could not reach website."); }
            return response.json();
        })
        .then(json => console.log(json))
        .catch(err => console.error(err));

}
function tempFetch(myRequest) { 



fetch(myRequest)
    .then(response => {
        const contentType = response.headers.get('content-type');
        console.log("response Type is ",contentType); 
        if (contentType.includes('application/json')) {
            console.log(contentType, "Caught Json");
            return response.json();
        }
        if (contentType.includes('text/html')) {
            console.log(contentType,"Caught HTML");
            return response.text();
        } 
        if (contentType.includes('image/jpeg')) {
            console.log(contentType, "Caught Image");
            response.blob()
                .then(function (myBlob) {
                    var objectURL = URL.createObjectURL(myBlob);
                    let outputResponse = new Image();
                    outputResponse.src = objectURL;
                    document.getElementsByTagName('body')[0].appendChild(outputResponse)
                });
        }
        if (contentType.includes('text/plain')) {
            console.log(contentType, "Caught Text");
            return response.text();
        }
    })
    .then(data => {
        console.log("data is ", typeof data, data); /* process your data further */
    })
    .catch(error => console.log(error));


}

function fetchUrl(url) {
        fetch(url)
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
        return Promise.resolve(response.json()  )
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

//while making a get Req with Query parameters url has to build from the process Url
// when no parameter it return a seems, you have lost you way message.
//when making a post reqst a normal post works.
function processGet(e) {
    e.preventDefault();
    console.log(e.target.id);
    //  params1 =? TypeOfRequest = signUpUser;
    let url = reqUrl;
    //  let url1 = new URL(reqUrl);
  //  params1 = { status: "notCool!" }
    var data = {
    'first': "firstName.value",
    last: "lastName.value",
    phone: "phoneNumber.value",
    city: "city.value",
    };
    var encodedParam = buildEncodedUri(data);
    //  console.log(url)
    //  var decodedParam = unbuildEndodedUri(encodedParam);
    var url2 = url + "?" + encodedParam;
    
    console.log(url2)
    
    tempFetch(url2);  


    
}


//while making a get Req with Query parameters url has to build from the process Url. Note the parameter are directly the body
// when no parameter in the get Req "it return a seems, you have lost you way" message is responded back.
//when making a post reqst a normal post works.
function processPost(e) {
    
    e.preventDefault();
    
    console.log(e.target.id);
    //  params1 =? TypeOfRequest = signUpUser;
    let url = reqUrl;
    //  let url1 = new URL(reqUrl);
    params1 = { status: "notCool!" }
    
    var data = {
        'first': "firstName.value",
        last: "lastName.value",
        phone: "phoneNumber.value",
        city: "city.value",
    };
    var encodedParam = buildEncodedUri(data);
    //  console.log(url)
    //  var decodedParam = unbuildEndodedUri(encodedParam);
    var url2 = url + "?" + encodedParam;

    console.log(url2)
    //fetchUrl(url, request);  
    fetch(url,request)
        .then(response => {
           // if (!response.ok) { throw new Error("Could not reach website."); }
            return response.json();
        })
        .then(json => console.log(json))
        .catch(err => console.error(err)); 
}

document.getElementById("get").addEventListener("click", processGet);
document.getElementById("AddRow").addEventListener("click", processPost);