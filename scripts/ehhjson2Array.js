function iterateArray() { 

}

function processRequest() { 
    var requestURL = "https://raw.githubusercontent.com/bronzwikgk/ehh_developmentV1/main/json/sampleData/sampleSchemaV2.json";
    var output = fetchRequest(requestURL);
    console.log("output >>>>",JSON.stringify(output));


}

function fetchRequest(requestURL) { 
     var requestResponse = fetch(requestURL)
    .then(response => { return response.json()})
    .then(function (data){
     console.log("data Recived",data)
     getPayload(data);
      return data;
    });
   console.log("requestResponse", requestResponse);
    return requestResponse;
}




function getPayload(payload,payloadOutput) {
    console.log(payload,payload);
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
    console.log("json2ArrayOutput",json2ArrayOutput);
    return json2ArrayOutput;
}


function iterateObj(input,iterateObjOutput,parent,options) {
    if (!input) return;
    if (!iterateObjOutput) { var iterateObjOutput = []; };
    for (var key in input) {

        if ({}.hasOwnProperty.call(input, key)) {

            if (typeof input[key] === 'object' && !input[key].length) { 
                console.log("childFound", key, input[key]);
                recurseResponse = [];
                recurseResponse.concat(key);
                recurseResponse.concat(parent);
                iterateObj(input[key], recurseResponse,key);
                // iterateObjOutput = setData(input, iterateObjOutput, key);
                iterateObjOutput.push(recurseResponse);
                iterateObjOutput = setData(recurseResponse, iterateObjOutput, key);
            } else if (input[key].length) { 
                console.log("arrayFound", key, input[key]);
                // recurseResponse = [];
                // recurseResponse.concat(key);
                // recurseResponse.concat(parent);
                // iterateObj(input[key], recurseResponse,key);
                // // iterateObjOutput = setData(input, iterateObjOutput, key);
                // iterateObjOutput.push(recurseResponse);
                // iterateObjOutput = setData(recurseResponse, iterateObjOutput, key);
            }
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
      if(!input){
        output.push(key);
      } else{
        output.push(input);
      }
        
    }
  // console.log("output from Set",output);
    return output;
}




document.getElementById("btn").addEventListener("click", processRequest);