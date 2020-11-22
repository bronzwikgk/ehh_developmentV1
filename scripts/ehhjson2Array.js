

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
        json2ArrayOutput = iterateObj(input);
    }
    console.log("json2ArrayOutput",json2ArrayOutput);
    return json2ArrayOutput;
}


function iterateObj(input,iterateObjOutput,parent,options) {
    if (!input) return;
    if (!iterateObjOutput) { var iterateObjOutput = [];};
    if (!parent) { var parent = "root"; 
  rootnode = []
  rootnode.push("keyName");
  rootnode.push("parent");
  iterateObjOutput.push(rootnode);
  };
    for (var key in input) {

        if ({}.hasOwnProperty.call(input, key)) {
          
         
            
          if (typeof input[key] === 'object' && !input[key].length) { 
            var row = []; row.push(key);row.push(parent);iterateObjOutput.push(row);    
            iterateObj(input[key], iterateObjOutput,key);
            } else if (input[key].length) { 
                console.log("arrayFound", key, input[key],parent);
                iterateArray(input[key],row,key);
                console.log(row);
            }
           // console.log(key,input[key]);
           // iterateObjOutput = setData(input, iterateObjOutput, key);

    
            
        }
    }
    return iterateObjOutput;

}


function iterateArray(input,iterateArrayOutput,parent) {
  for(i=0;i<=input.length;i++){
    console.log(input[i]);
  }

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
  console.log("output from Set",output);
    return output;
}




document.getElementById("btn").addEventListener("click", processRequest);