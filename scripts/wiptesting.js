// console.log("hello from Testing");
// var jsonOutput = process.node2json(element);
// //var jsonOutput = createEntity(element, output, outputType, nodeEntityInJson);
// console.log(jsonOutput);
// var htmlOutput = process.json2node(jsonOutput);
// var temp = processFiles.verifyPermissions();
// console.log(temp);
// console.log(htmlOutput);

var url = 'http://dummy.restapiexample.com/api/v1/employees';
var urlResponse = processUrl.fetchUrl(url);
console.log("urlResponse",JSON.stringify(urlResponse),urlResponse);
// fetch('https://jsonplaceholder.typicode.com/todos/1')
//     .then(response => response.json())
//     .then(json => console.log(json))