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

    var payloadOutput = buildTable(payload);
    console.log("payload", payloadOutput);
    return payloadOutput;
}
var headerRow = ['id', 'd', 'key', 'parent', 'type'];

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
        console.log("Array object", parent, key, input[key]);
    } else if (typeof input === 'string') {
        console.log("String Found", parent, input);
    }
    return output;
}
function iterateObj2(input, output, currentRow, parent) {
    for (var key in input) { 
        if ({}.hasOwnProperty.call(input, key)) {
            if (typeof input[key] === 'object' && getEntityType(input[key]) !== "Array") {
                var currentRow = [];
                currentRow.push(id); id++
                currentRow.push(d);
                currentRow.push(key);
                currentRow.push(parent);
                currentRow.push(typeof input[key]);
               // fillEmptyDepth(currentRow, output[0]);
                buildTable(input[key], output, currentRow, key);
                output.push(currentRow);
            } else if (typeof input[key] === 'object' && getEntityType(input[key]) === "Array") {

                console.log("Array object", parent, key, input[key]);
                if (!currentRow) {
                    currentRow = []
                    currentRow.push(id); id++
                    currentRow.push(d);
                    currentRow.push(key);
                    currentRow.push(parent);
                    currentRow.push(typeof input[key]);
                    fillEmptyDepth(currentRow, output[0]);
                    console.log(currentRow);
                }
                //  fillEmptyDepth(currentRow, output[0]);
                //  console.log("value found", parent, key, input[key],"output is ",output)
                if (output[0].indexOf(key) === -1) {
                    // console.log("found New Attribute header", key);
                    output[0].push(key);
                    //fillEmptyDepth(currentRow, output[0]);
                    // console.log(output[0].indexOf(key));
                  // currentRow.splice(output[0].indexOf(key), 0, input[key]);//Inserts the value in the specific header position in the current
                } else if (output[0].indexOf(key) !== -1) {
                    // console.log("found Attribute Value", currentRow,obj[key]);
                  //  currentRow.splice(output[0].indexOf(key), 0, input[key]);//Inserts the value in the specific header position in the current
                    // console.log(currentRow);
                }

                output.push(currentRow);

            } else if (typeof input[key] === 'string') {
             
               //  fillEmptyDepth(currentRow, output[0]);
              console.log("value found", parent, key, input[key], "output is ", output)
                if (!currentRow) {
                    currentRow = []
                    currentRow.push(id); id++
                    currentRow.push(d);
                    currentRow.push(key);
                    currentRow.push(parent);
                    currentRow.push(typeof input[key]);
                    fillEmptyDepth(currentRow, output[0]);
                    console.log(currentRow);
                }
                if (output[0].indexOf(key) === -1) {
                    // console.log("found New Attribute header", key);
                    output[0].push(key);
                    //fillEmptyDepth(currentRow, output[0]);
                   // console.log(output[0].indexOf(key));
                  currentRow.splice(output[0].indexOf(key), 0, input[key]);//Inserts the value in the specific header position in the current
                } else if (output[0].indexOf(key) !== -1) {
                     //console.log("found Attribute Value", currentRow,input[key]);
                      currentRow.splice(output[0].indexOf(key), 0, input[key]);//Inserts the value in the specific header position in the current
                    // console.log(currentRow);
                }

               // output.push(currentRow);
                // currentRow.push(key, obj[key]);
            }
            else {
                console.log(key, input[key]);
            }
          
        }
    }
    return output;
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
function fillEmptyDepth(input, header) { 
    for (j = 0; j <= header.length - input.length;j++) { 
        input.push("");
      //  console.log(input)
    }
return input
}
