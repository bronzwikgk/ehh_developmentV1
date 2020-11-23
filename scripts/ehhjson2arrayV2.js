
function processRequest() {
    var requestURL = "https://raw.githubusercontent.com/bronzwikgk/ehh_developmentV1/main/json/sampleData/sampleSchemaV2.json";
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
    console.log(payload, payload);
    var payloadOutput = obj2Array(payload);
    return payloadOutput;
}

function obj2Array(obj, output, currentResponse, parent, d, id, options) { 
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
        setData(rootnode, output);
    };
    if (typeof obj === 'object' && !obj.length) {
        currentResponse = [];
        output.push(iterateObj(obj, currentResponse, parent))
        console.log("currentResponse", output);
    }


    console.log("from obj2Array",JSON.stringify(output))
    return output;
}

function iterateObj(input, output,currentObj) {
    if (!input) return; 
    for (var key in input) {
        if ({}.hasOwnProperty.call(input, key)) {
            currentObj = [];
            setData(key, currentObj);
            if (typeof input[key] === 'object') { 
                console.log(input[key]);
                 //   setData(iterateObj(input[key]),output)
                iterateObj(input[key], currentObj);
            }





            output.push(currentObj);
        }
    }
    return output;
}

function iterateArray(input, output, parent) {
    for (i = 0; i <= input.length; i++) {
        setData(input, output);
    }
return output
}

function setData(input, output, key,nextSW) {
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