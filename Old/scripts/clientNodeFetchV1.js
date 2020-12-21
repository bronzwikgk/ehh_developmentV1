//clientNodeFetch class is to interact with ehh AppScript Server Node.
var data = {
        first: "firstName",
        last: "lastName",
        phoneNumber: "phoneNumber",
        city: "city",
    };
var resourceUrl = "https://docs.google.com/spreadsheets/d/1mBZJ01Ddhl9fByyJ5K-JEsruO7XV51i7ctdnRJ6-hGk/edit#gid=1449573075";
const serviceUrl = "https://script.google.com/macros/s/AKfycbxeONL9wDhS1GOnHJapV-67BMKFQk-k9WMA5m4C77mROTCipMQ/exec";
let url = serviceUrl;
request = {
    method: 'GET',
    body: JSON.stringify(data)
}
getRequest = {
    // Default options are marked with *
     method: 'GET', // *GET, POST, PUT, DELETE, etc.
   //  mode: 'no-cors', // no-cors, *cors, same-origin
   // cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
//    // credentials: 'same-origin', // include, *same-origin, omit
   // headers: {
   //     'Content-Type': 'application/json'
   //     // 'Content-Type': 'application/x-www-form-urlencoded',
   // },
  //  redirect: 'follow', // manual, *follow, error
//    // referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
body: JSON.stringify(data) // body data type must match "Content-Type" header
};
postRequest = {
    method: 'POST',
   // mode: 'cors',
  //  cache: 'no-cache',
  //  redirect: 'follow',
  body: JSON.stringify(data)
}

function fetchHttpRequest(url, request) {
    fetch(url, request)
        .then(response => {
          if (!response.ok) { throw new Error("Could not reach website."); }
            return response.text();
        })
        .then(json => console.log(json))
        .catch(err => console.error(err));

}


///it takes a inputobject and build's it into a encodedURI
function buildEncodedUri(request) {
    const response = [];
    for (let d in request)
        {response.push(encodeURIComponent(d) + '=' + encodeURIComponent(request[d]));}
    return response.join('&');
}

// unbuilds the URL parameters and returns an object
function unbuildEndodedUri(request) { 
    var urifragment = request.split("&"), data = {}, i, parts;
    //process each parameter
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

//To make a getReq to a appScript server the queryParameter have to be added to the url using buildEncodedURI.
//when making a post reqst a normal post works.
function processButtonClick(e) { 
    e.preventDefault();
    console.log(e.target.id);
    if (e.target.id === 'get') {
        request.method = "GET";
        var encodedParam = buildEncodedUri(request);
        var url2 = url + "?" + encodedParam;
        fetchHttpRequest(url2);  
     }
    if (e.target.id === 'post') {
        //request = getRequest;
        request.method = "POST";

        fetchHttpRequest(url, postRequest);  
    }




}





document.getElementById("get").addEventListener("click", processButtonClick);
document.getElementById("post").addEventListener("click", processButtonClick);