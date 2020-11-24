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


class processUrl {
    static fetchUrl(url) {
        fetch(url)
        .then(response => {
            const contentType = response.headers.get('content-type');
           // console.log("response Type is ", contentType);
            if (contentType.includes('application/json')) {
                console.log(contentType, "Caught Json");
                return response.json();
            }
            if (contentType.includes('text/html')) {
                console.log(contentType, "Caught HTML");
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
