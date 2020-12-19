//clientNodeFetch class is to interact with ehh AppScript Server Node.
var data = {
        first: "firstName",
        last: "lastName",
        phoneNumber: "phoneNumber",
        city: "city",
    };


var resourceUrl = "https://docs.google.com/spreadsheets/d/1mBZJ01Ddhl9fByyJ5K-JEsruO7XV51i7ctdnRJ6-hGk/edit#gid=1449573075";
const serviceUrl =  "https://script.google.com/macros/s/AKfycbxeONL9wDhS1GOnHJapV-67BMKFQk-k9WMA5m4C77mROTCipMQ/exec";
request = {
    // Default options are marked with *
    method: 'POST', // *GET, POST, PUT, DELETE, etc.
     mode: 'no-cors', // no-cors, *cors, same-origin
    cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
//    // credentials: 'same-origin', // include, *same-origin, omit
   // headers: {
   //     'Content-Type': 'application/json'
   //     // 'Content-Type': 'application/x-www-form-urlencoded',
   // },
    redirect: 'follow', // manual, *follow, error
//    // referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
   body: JSON.stringify(data) // body data type must match "Content-Type" header
};

postRequest = {
    // Default options are marked with *
    method: 'POST', // *GET, POST, PUT, DELETE, etc.
     mode: 'no-cors', // no-cors, *cors, same-origin
    cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
//    // credentials: 'same-origin', // include, *same-origin, omit
   // headers: {
   //     'Content-Type': 'application/json'
   //     // 'Content-Type': 'application/x-www-form-urlencoded',
   // },
    redirect: 'follow', // manual, *follow, error
//    // referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
   body: JSON.stringify(data) // body data type must match "Content-Type" header
}


//while making a get Req with Query parameters url has to build from the process Url
// when no parameter it return a seems, you have lost you way message.
//when making a post reqst a normal post works.
function processGet(e) {
    e.preventDefault();
    console.log(e.target.id);
    //  params1 =? TypeOfRequest = signUpUser;
    let url = serviceUrl;
    var encodedParam = buildEncodedUri(data);
    //  console.log(url)
    //  var decodedParam = unbuildEndodedUri(encodedParam);
    var url2 = url + "?" + encodedParam;
    console.log(url2)
    fetchHttpRequest(url2);  
}

function fetchHttpRequest(url, request) {
    fetch(url, request)
        .then(response => {
          //  if (!response.ok) { throw new Error("Could not reach website."); }
            return response.json();
        })
        .then(json => console.log(json))
        .catch(err => console.error(err));

}

//while making a get Req with Query parameters url has to build from the process Url. Note the parameter are directly the body
// when no parameter in the get Req "it return a seems, you have lost you way" message is responded back.
//when making a post reqst a normal post works.
function processPost(e) {
    
    e.preventDefault();
    
    console.log(e.target.id);
    //  params1 =? TypeOfRequest = signUpUser;
    let url = 'https://script.google.com/macros/s/AKfycby0xncHlv4T2iaNeQ46wyh1BjXBot0htqUcytdduHnSez8X4PE/exec';
    //  let url1 = new URL(reqUrl);
    params1 = { status: "notCool!" }
    
    var data = {
        first: "firstName.value",
        last: "lastName.value",
        phone: "phoneNumber.value",
        city: "city.value",
    };
    var encodedParam = buildEncodedUri(data);
    //  console.log(url)
    //  var decodedParam = unbuildEndodedUri(encodedParam);
    var url2 = url + "?" + encodedParam;
    request = {
        // Default options are marked with *
        method: 'POST', // *GET, POST, PUT, DELETE, etc.
        mode: 'cors', // no-cors, *cors, same-origin
        cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
        //    // credentials: 'same-origin', // include, *same-origin, omit
        // headers: {
        //     'Content-Type': 'application/json'
        //     // 'Content-Type': 'application/x-www-form-urlencoded',
        // },
        redirect: 'follow', // manual, *follow, error
        //    // referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
        body: JSON.stringify(data) // body data type must match "Content-Type" header
    }
   postParam =  {
        method: 'POST',
            mode: 'cors',
                cache: 'no-cache',
                    redirect: 'follow',
                        body: JSON.stringify(data)
    }
    fetch(url, postParam )
        .then(res => res.text())
        .then(res => {
            console.log(res);
            // customerForm.reset();
            // buttonText.textContent = "Send";
            // buttonSpinner.classList.add("d-none");
            // submitButton.disabled = false;
        })
        .catch(err => console.error(err)); 
  //  console.log(url2)
   // fetchUrl2(url, request);  
    // fetch(url,request)
    //     .then(response => {
    //       //  if (!response.ok) { throw new Error("Could not reach website."); }
    //         return response.text();
    //     })
    //     .then(data => console.log(data))
    //    
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



document.getElementById("btn").addEventListener("click", processGet);
document.getElementById("btn2").addEventListener("click", processPost);