function iterateArray() { 

}

function processRequest() { 
    var requestURL = "https://raw.githubusercontent.com/bronzwikgk/ehh_developmentV1/main/json/sampleData/sampleSchemaV2.json";
    var output = fetchRequest(requestURL);
    console.log(output);


}

function fetchRequest(requestURL) { 
    var tempo = fetch(requestURL)
    .then(response => response.json())
    .then(json => { getPayload(json,tempo) })
  //  console.log("requestResponse", tempo);
    return tempo;
}




function getPayload(payload,payloadOutput) {
   // console.log(payload);
    var payloadOutput = json2Array(payload);
    return payloadOutput;
}

function json2Array(input, json2ArrayOutput) { 
    if (!json2ArrayOutput) { var json2ArrayOutput = []; }
    
    if (input.length) { console.log("foundArray")}
    if (typeof input === 'object' && !input.length) {
      //  console.log("Found Object");
        json2ArrayOutput = iterateObj(input, json2ArrayOutput);
        
      

    }
    console.log(json2ArrayOutput);
    return json2ArrayOutput;
}


function iterateObj(input,iterateObjOutput,options) {
    if (!input) return;
    if (!iterateObjOutput) { var iterateObjOutput = {}; };
    for (var key in input) {

        if ({}.hasOwnProperty.call(input, key)) {
           // console.log(key,input[key]);
            iterateObjOutput = setData(input, iterateObjOutput, key);

    
            
        }
    }
    return iterateObjOutput;

}



function setData(input, output, key) { 
  //  console.log(key, getEntityType(output), output.length);
    if (getEntityType(output) === 'Array') { 
      //  console.log(key);
        output.push(key);
    }
  // console.log("output from Set",output);
    return output;
}




document.getElementById("btn").addEventListener("click", processRequest);