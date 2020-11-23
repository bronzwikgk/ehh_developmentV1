

function processRequest() { 
    var requestURL = "https://raw.githubusercontent.com/bronzwikgk/ehh_developmentV1/main/json/sampleData/sampleSchemaV2.json";
    var output = fetchRequest(requestURL);
    console.log("output >>>>",JSON.stringify(output));}

function fetchRequest(requestURL) { 
     var requestResponse = fetch(requestURL)
    .then(response => { return response.json()})
    .then(function (data){
    // console.log("data Recived",data)
     getPayload(data);
      return data;
    });
   //console.log("requestResponse", requestResponse);
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


function iterateObj(input,iterateObjOutput,parent,d,id,options) {
    if (!input) return;
    if (!iterateObjOutput) { var iterateObjOutput = [];};
    if (!parent) { var parent = "root"; 
      rootnode = [];
      id = 0;
      d = 0;
      rootnode.push("id");
      rootnode.push("d");
      rootnode.push("keyName");
      rootnode.push("parent");
      rootnode.push("type");
      setData(rootnode, iterateObjOutput);

  };
    for (var key in input) {

        if ({}.hasOwnProperty.call(input, key)) {
          
          if (typeof input[key] === 'object'&& !input[key].length) { 
            var row = []; row.push(id); id++; row.push(d); row.push(key); row.push(parent), row.push(typeof input[key]);//to be done using Header Key as an array and using iterateArray and SetData
            //iterateObjOutput.push(row); 
            iterateObj(input[key], row, key, d,id);
            setData(row, iterateObjOutput); d++;
          } else if (input[key].length) { 

             //console.log("arrayFound", key, input[key],parent);
            
            iterateArray(input[key], row, key);
              //  console.log(row);
          }
          if (typeof input[key] === 'string') {
            console.log("row",row);
            console.log("left out", parent, key, input[key], typeof input[key]);  
            
          }
          
          //d++;
          // setData(input, iterateObjOutput, key);
          
        }
    }
    return iterateObjOutput;

}


function iterateArray(input,iterateArrayOutput,parent) {
  for(i=0;i<=input.length;i++){
   // console.log(input[i]);
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
  //console.log("output from Set",output);
    return output;
}




document.getElementById("btn").addEventListener("click", processRequest);