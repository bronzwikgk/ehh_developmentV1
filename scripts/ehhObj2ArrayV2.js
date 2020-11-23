//test links https://raw.githubusercontent.com/bronzwikgk/ehh_developmentV1/main/testData/rich-text-tools.json
//https://raw.githubusercontent.com/bronzwikgk/ehh_developmentV1/main/testData/package.json
function processRequest() {
    var requestURL = "https://raw.githubusercontent.com/bronzwikgk/ehh_developmentV1/main/testData/package.json";
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

    var payloadOutput = buildTable(payload);
    console.log("payload", payloadOutput);
    return payloadOutput;
}

var headerRow = ['id', 'd', 'name', 'parent', 'type'];

function buildTable(input,output,currentRow,parent) {
    if (!output) { var output = []; }
    if (!parent) {
        var parent = "root";
        id = 0;
        d = 0;
        setData(headerRow, output);
    };
    if (typeof input === 'object' && getEntityType(input) !== "Array") {
       // console.log("found object", parent,input);
        iterateObj2(input, output, currentRow, parent);
    } else if (typeof input === 'object' && getEntityType(input) === "Array") {
        //console.log("Array object", parent, key, input[key]);
    } else if (typeof input === 'string') {
        console.log("String Found", parent, input);
    }
   
    // getRows()
    // getAttributes()
    return output;
}

function iterateObj2(input, output, currentRow, parent) {
    for (var key in input) { 
        if ({}.hasOwnProperty.call(input, key)) {
            if (typeof input[key] === 'object' && getEntityType(input[key]) !== "Array") {
                var currentRow = [];// console.log("found object", key);
                currentRow.push(id);id++
                currentRow.push(d);
                currentRow.push(key);
                currentRow.push(parent);
                output.push(currentRow);
                iterateObj2(input[key], output, currentRow, key);
            } else if (typeof input[key] === 'object' && getEntityType(input[key]) === "Array") {
              // console.log("Array object", parent, key, input[key]);
            } else if (typeof input[key] === 'string') {
                 currentRow = [];              
            }
          
        }
    }

}


function setData(input, output, key, nextSW) {
    //  console.log(key, getEntityType(output), output.length);
    if (typeof input === 'Array') {

        iterateArray(input, output, key);

    }
    if (getEntityType(output) === 'Array') {
        //  console.log(key);
        if (!input) {
            output.push(key);
        } else {
            output.push(input);
        }

    }
    //console.log("output from Set",output);
    return output;
}



document.getElementById("btn").addEventListener("click", processRequest);