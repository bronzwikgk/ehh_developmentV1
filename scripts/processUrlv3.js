url = 'https://script.google.com/macros/s/AKfycbyOQZ3JCvko4kI8_Fr9PoZjJA0ERjQftjHwf70VZwkf/dev';
data = {};
// Default options are marked with *
urlReqParameters = {
    method: 'GET', // *GET, POST, PUT, DELETE, etc.
  //  mode: 'cors', // no-cors, *cors, same-origin
    cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
   // credentials: 'same-origin', // include, *same-origin, omit
    // headers: {
    //     'Content-Type': 'application/json'
    //     // 'Content-Type': 'application/x-www-form-urlencoded',
    // },
    redirect: 'follow', // manual, *follow, error
  //  referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
   // body: JSON.stringify(data) // body data type must match "Content-Type" header
}

class processUrl {
  static fetchUrl(url) {
    fetch(url)
      .then(response => { response.text() })
      .then(data => {
     //   console.log(data); /* process your data further */
        return data;
      })
      .catch(error => console.log(error));
  }
  static buildEncodedUri(request) {
    const response = [];
    for (let d in request)
      response.push(encodeURIComponent(d) + '=' + encodeURIComponent(request[d]));
    return response.join('&');
  }
  // unbuilds the URL parameters and returns an object
  static unbuildEndodedUri(request) {
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
  //options with map
  static encodeData(data) {
    return Object.keys(data).map(function (key) {
      return [key, data[key]].map(encodeURIComponent).join("=");
    }).join("&");

  }
  static json(response) {
    return response.json()
  }
  static status(response) {
    if (response.status >= 200 && response.status < 300) {
      console.log(response.statusText);
      return Promise.resolve(response)
    } else {
      console.log(response.statusText);
      return Promise.reject(new Error(response.statusText))
    }
  }
}
 

function processResponse() {
        

}


function processSubmit() { 
  output = processUrl.fetchUrl(url);
  console.log("output",output);
   // initUrlRequest(url);



}

document.getElementById("btn").addEventListener("click", processSubmit());


