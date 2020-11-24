//test links https://raw.githubusercontent.com/bronzwikgk/ehh_developmentV1/main/testData/rich-text-tools.json
//https://jsonplaceholder.typicode.com/todos/1
//http://dummy.restapiexample.com/api/v1/employees
//https://developer.mozilla.org/en-US/docs/Web/API/Response/type
//https://raw.githubusercontent.com/bronzwikgk/ehh_developmentV1/main/testData/package.json
//https://raw.githubusercontent.com/bronzwikgk/ehh_developmentV1/main/testData/package.json
//https://raw.githubusercontent.com/bronzwikgk/ehh_developmentV1/main/json/sampleData/sampleSchemaV2.json
function processRequest() {
    var requestURL = "https://raw.githubusercontent.com/bronzwikgk/ehh_developmentV1/main/testData/testui.json";
    var output = fetchRequest(requestURL);
    console.log("output >>>>", output);
}
function fetchRequest(requestURL) {
    var requestResponse = fetch(requestURL)
        .then(response => { return response.json() })
        .then(function (data) {
            // console.log("data Recived",data)
            getPayload(data);
            return data;
        });
    //console.log("requestResponse", requestResponse);
    return requestResponse;
}
function getPayload(payload, payloadOutput) {

    var payloadOutput = obj2Array(payload);
    console.log("output array", payloadOutput);
    return payloadOutput;
}

var headerRow = ['id', 'd', 'key', 'parent', 'type'];

function obj2Array(input,output,currentRow,parent,id) { 
    if (!output) { var output = []; }
    if (!parent) {
        var parent = "root";
        id = 0;
        d = 0;
        setData([headerRow], output);
    };
    if (typeof input === 'object' && getEntityType(input) !== "Array") {
        id++;
        createRow(input,output,parent,id)
         console.log("found object", parent,input);
       // iterateObj2(input, output, currentRow, parent);
    } else if (typeof input === 'object' && getEntityType(input) === "Array") {
        console.log("Array object", parent, key, input[key]);
    } else if (typeof input === 'string') {
        console.log("String Found", parent, input);
    }
    return output;
}
function createRow(input, output, parent, id) {
    newRow = output[0];
    console.log("newRow", newRow);
    for (var key in input) { 
        if ({}.hasOwnProperty.call(input, key)) { 
            if (typeof input[key] === "string") { 
                console.log("value found",key,input[key])
            }


        } 
    }

}
function setData(input, output, key, nextSW) {
    //  console.log(input, getEntityType(input), output.length);
    if (input.constructor.name === 'Array') {

      // iterateArray(input, output, key);
       
    }
    if (output.constructor.name === 'Array') {
       // console.log(input);
        if (!input) {
            output.push(key);
        } else {
         //   console.log(input.constructor.name);
            output.push(input);
        }

    }
  // console.log("output from Set",output);
    return output;
}

function iterateArray(input, output, parent) {
    for (i = 0; i <= input.length; i++) {
        if (input[i]) { 
            console.log("Array Element", input[i], output);
            setData(input[i], output);
        }

    }

    return output
}

function recurse(obj) {
    for (var key in obj) { // works for objects and arrays 
        var item = obj[key];
        if (typeof item === "object")
            recurse(item);
        else
            console.log(key, item);
    }
}


document.getElementById("btn").addEventListener("click", processRequest);