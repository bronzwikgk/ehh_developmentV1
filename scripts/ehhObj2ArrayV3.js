//test links https://raw.githubusercontent.com/bronzwikgk/ehh_developmentV1/main/testData/rich-text-tools.json
//https://jsonplaceholder.typicode.com/todos/1
//http://dummy.restapiexample.com/api/v1/employees
//https://developer.mozilla.org/en-US/docs/Web/API/Response/type
//https://raw.githubusercontent.com/bronzwikgk/ehh_developmentV1/main/testData/package.json
//https://raw.githubusercontent.com/bronzwikgk/ehh_developmentV1/main/json/sampleData/sampleSchemaV2.json
//https://raw.githubusercontent.com/bronzwikgk/ehh_developmentV1/main/testData/testui.json

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
    var payloadOutput = obj2Arr(payload);
    console.log("output array", payloadOutput);
    return payloadOutput;
}

var headerRow = ['ehhId', 'd', 'key', 'parent', 'type'];

function obj2Arr(ob,output,currentRw,parent) {
    var toReturn = {};
    if (!output) { var output = []; }
    if (!currentRw) { var currentRw = []; }
    if (!parent) {
        var parent = "root";
        id = 0;
        d = 0;
        output.push([headerRow]);
    };
    for (var key in ob) {
        if (!ob.hasOwnProperty(key)) continue;
        if ((typeof ob[key]) === 'object' && ob[key] !== null && !ob.length) { 
            var currentRw = [];
            // currentRw.push(id); id++
            // currentRw.push(d);
            // currentRw.push(key);
            // currentRw.push(parent);
            // currentRw.push(typeof ob[key]); // to be modified
            // output.push(currentRw);
           // console.log(currentRw,output);
            
            if (output[0][0].indexOf(key) === -1 ) {
               // console.log("found New Attribute header", key, ob[key]);
                output[0][0].push(key);
            }
            obj2Arr(ob[key], output, currentRw, key);
           // console.log(flatObject);
        }else if (output[0][0].indexOf(key) !== -1) {
            console.log("found New Attribute value", key, ob[key]);
            output[0][0].push(key);

        }

        
      
        
         
        
    }
  
    return output;
}





















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



function flattenObject (ob) {
    var toReturn = {};
    var output = [];
    for (var key in ob) {
        if (!ob.hasOwnProperty(key)) continue;
        if ((typeof ob[key]) == 'object' && ob[key] !== null) {
            var flatObject = flattenObject(ob[key]);
            for (var x in flatObject) {
                if (!flatObject.hasOwnProperty(x)) continue;
                console.log(key, ob[key]);
                toReturn[key + '.' + x] = flatObject[x];
            }
        } else {
           // output.push(ob[key])
        //    console.log(key, ob[key])
            

            toReturn[key] = ob[key];
        }
    }
    //return toReturn;
    return output;
};