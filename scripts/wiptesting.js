// console.log("hello from Testing");
// var jsonOutput = process.node2json(element);
// //var jsonOutput = createEntity(element, output, outputType, nodeEntityInJson);
// console.log(jsonOutput);
// var htmlOutput = process.json2node(jsonOutput);
// var temp = processFiles.verifyPermissions();
// console.log(temp);
// console.log(htmlOutput);

var url = 'https://raw.githubusercontent.com/bronzwikgk/ehh_developmentV1/main/testData/package.json';
//var urlResponse = processUrl.fetchUrl(url);
//console.log("urlResponse",JSON.stringify(urlResponse),urlResponse);
// fetch('https://jsonplaceholder.typicode.com/todos/1')
//     .then(response => response.json())
//     .then(json => console.log(json))




// fetch('https://upload.wikimedia.org/wikipedia/commons/7/77/Delete_key1.jpg')
//     .then(res => res.blob()) // Gets the response and returns it as a blob
//     .then(blob => {
//         // Here, I use it to make an image appear on the page
//         let objectURL = URL.createObjectURL(blob);
//         let myImage = new Image();
//         myImage.src = objectURL;
//         document.getElementsByTagName('body')[0].appendChild(myImage)
//     });
//https://jsonplaceholder.typicode.com/todos/1
//http://dummy.restapiexample.com/api/v1/employees
//https://developer.mozilla.org/en-US/docs/Web/API/Response/type
//https://raw.githubusercontent.com/bronzwikgk/ehh_developmentV1/main/testData/package.json
//https://upload.wikimedia.org/wikipedia/commons/7/77/Delete_key1.jpg
var myRequest = new Request('https://jsonplaceholder.typicode.com/todos/1');
fetch(myRequest).then(function (response) {
  //  console.log(response.type); // returns basic by default
    response.blob().then(function (myBlob) {
        var objectURL = URL.createObjectURL(myBlob);
       // console.log(objectURL);
        //let outputResponse = document.createElement(outputResponse);
        let outputResponse = new Image();
        outputResponse.src = objectURL;
        document.getElementsByTagName('body')[0].appendChild(outputResponse)
      
    });
});


fetch(myRequest)
    .then(response => {
        const contentType = response.headers.get('content-type');
        console.log(response);
     //console.log(contentType); 
        if (contentType.includes('application/json')) {
            console.log(contentType, "Caught Json");
            return response.json();
        }
        if (contentType.includes('text/html')) {
            console.log(contentType,"Caught HTML");
            return response.text();
        } 
        if (contentType.includes('image/jpeg')) {
            console.log(contentType,"Caught Image");
            // return response.json();
        }
        
        if (contentType.includes('text/plain')) {
            console.log(contentType, "Caught Text", response.text());
             return response.text();
        }

    })
    .then(data => {
       console.log("data",data); /* process your data further */
    })
    .catch(error => console.log(error));