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
    
    var payloadOutput = obj2Array(payload);
    console.log("payload",JSON.stringify(payloadOutput));
    return payloadOutput;
}

function obj2Array(obj, output, currentRow, parent, d, id, options) {
    if (!output) { var output = []; }
    if (!parent) {
        var parent = "root";
        rootnode = [];
        id = 0;
        d = 0;
        rootnode.push("id");
        rootnode.push("d");
        rootnode.push("keyName");
        rootnode.push("parent");
        rootnode.push("type");
        //output.push(rootnode)
        setData(rootnode, output);
    };
   
    for (var key in obj) {
        if ({}.hasOwnProperty.call(obj, key)) {
            if (typeof obj[key] === 'object' && getEntityType(obj[key]) !== "Array") {
                currentRow = [];
                currentRow.push(id); id++;
                currentRow.push(d);
                currentRow.push(key);
                currentRow.push(parent);
                currentRow.push(typeof obj[key]);
              //  console.log("key", key, obj[key], typeof obj[key], obj[key].children,obj[key].length, )
            
               // obj2Array(obj[key], output, currentRow, key, d, id);
                output.push(currentRow);
             //   console.log("currentRow", currentRow, typeof currentRow);
            } else if(getEntityType(obj[key]) === "Array") { 
                // console.log("array found", parent, key, obj[key]) 
                //console.log(currentRow, typeof currentRow);
                currentRow = [];
                currentRow.push(id); id++;
                currentRow.push(d);
                currentRow.push(key);
                currentRow.push(parent);
                currentRow.push(typeof obj[key]);

                if (output[0].indexOf(key) === -1) {
                    //console.log("found New Attribute header", key);
                  //  output[0].push(key);
                   //console.log(currentRow, typeof currentRow);
                  //  currentRow.splice(output[0].indexOf(key), 0, obj[key]);//Inserts the value in the specific header position in the current
                    //console.log("currentRow", currentRow, typeof currentRow);
                   // output.push(currentRow);
                } else if (output[0].indexOf(key) !== -1) {
                   //  console.log("found Attribute Value", currentRow,obj[key]);
                  //  currentRow.splice(output[0].indexOf(key), 0, obj[key]);//Inserts the value in the specific header position in the current
                   //   console.log(currentRow);
                }
               // currentResponse.push(key, obj[key]);
            } else if (typeof obj[key] === 'string') {
                currentRow = output[0];
                console.log(currentRow);
                currentRow.push(id); id++;
                currentRow.push(d);
                currentRow.push(key);
                currentRow.push(parent);
                currentRow.push(typeof obj[key]);
               console.log("value found", parent, key, obj[key])
                if (output[0].indexOf(key) === -1) {
                   // console.log("found New Attribute header", key);
                    output[0].push(key);
                    console.log(output[0].indexOf(key));

                    currentRow.splice(output[0].indexOf(key), 0, obj[key]);//Inserts the value in the specific header position in the current
                } else if (output[0].indexOf(key) !== -1) {
                   // console.log("found Attribute Value", currentRow,obj[key]);
                  //  currentRow.splice(output[0].indexOf(key), 0, obj[key]);//Inserts the value in the specific header position in the current
                   // console.log(currentRow);
                }

                output.push(currentRow);
               // currentRow.push(key, obj[key]);
            }

           
        }
    }

    
  //  ;
 console.log("from obj2Array", output)
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

function iterateArray(input, output, parent) {
    for (i = 0; i <= input.length; i++) {
        setData(input, output);
    }
    return output
}

document.getElementById("btn").addEventListener("click", processRequest);