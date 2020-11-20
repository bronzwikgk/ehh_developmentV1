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

// fetch(myRequest).then(function (response) {
//   //  console.log(response.type); // returns basic by default
    // response.blob().then(function (myBlob) {
    //     var objectURL = URL.createObjectURL(myBlob);
    //    // console.log(objectURL);
    //     //let outputResponse = document.createElement(outputResponse);
    //     let outputResponse = new Image();
    //     outputResponse.src = objectURL;
    //     document.getElementsByTagName('body')[0].appendChild(outputResponse)
      
    // });
// });

var myRequest = new Request('https://script.google.com/a/0dot1.live/macros/s/AKfycbxjy_A1pOVpuAEsJDXdnRbsA83S_1oy7Dt81hf0beLL/dev?action=get&prodid=g1234&prodid=g2435');
var tempo = processUrl.fetchUrl(myRequest);
console.log(tempo);
// fetch(myRequest)
//     .then(response => {
//         const contentType = response.headers.get('content-type');
//         console.log("response Type is ",contentType); 
//         if (contentType.includes('application/json')) {
//             console.log(contentType, "Caught Json");
//             return response.json();
//         }
//         if (contentType.includes('text/html')) {
//             console.log(contentType,"Caught HTML");
//             return response.text();
//         } 
//         if (contentType.includes('image/jpeg')) {
//             console.log(contentType, "Caught Image");
//             response.blob()
//                 .then(function (myBlob) {
//                     var objectURL = URL.createObjectURL(myBlob);
//                     let outputResponse = new Image();
//                     outputResponse.src = objectURL;
//                     document.getElementsByTagName('body')[0].appendChild(outputResponse)
//                 });
//         }
//         if (contentType.includes('text/plain')) {
//             console.log(contentType, "Caught Text");
//             return response.text();
//         }
//     })
//     .then(data => {
//         console.log("data is ", typeof data, data); /* process your data further */
//     })
//     .catch(error => console.log(error));

// var data = { "name": "test", "salary": "123", "age": "23" }
// var url = 'http://dummy.restapiexample.com/api/v1/create';



// // Example POST method implementation:
// async function postData(url, data) {
//     // Default options are marked with *
//     const response = await fetch(url, {
//         method: 'POST', // *GET, POST, PUT, DELETE, etc.
//         mode: 'cors', // no-cors, *cors, same-origin
//         cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
//         credentials: 'omit', // include, *same-origin, omit
//         headers: {
//             'Content-Type': 'application/json'
//             // 'Content-Type': 'application/x-www-form-urlencoded',
//         },
//         redirect: 'follow', // manual, *follow, error
//         referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
//         body: JSON.stringify(data) // body data type must match "Content-Type" header
//     });
//     return response.json(); // parses JSON response into native JavaScript objects
// }

// postData(url,data)
//     .then(data => {
//         console.log(data); // JSON data parsed by `data.json()` call
//     });