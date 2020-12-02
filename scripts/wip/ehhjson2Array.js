

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

function iterateObj(input,iterateObjOutput,currentRow,parent,d,id,options) {
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
          
          if (typeof input[key] === 'object' && !input[key].length ) { 
            var currentRow = []; currentRow.push(id); id++; currentRow.push(d); currentRow.push(key); currentRow.push(parent), currentRow.push(typeof input[key]);//to be done using Header Key as an array and using iterateArray and SetData
            //iterateObjOutput.push(row);
            //setData(currentRow, iterateObjOutput); d++;
            iterateObj(input[key], iterateObjOutput, currentRow, key, d, id);
         
          } else if (input[key].length) { 
             //console.log("arrayFound", key, input[key],parent);
            iterateArray(input[key], currentRow, key);
              //  console.log(row);
          }

          if (typeof input[key] === 'string') {
            if (iterateObjOutput[0].indexOf(key) === -1) {
              console.log("Headers", iterateObjOutput[0], key, iterateObjOutput[0].indexOf(key))
              iterateObjOutput[0].push(key);
              console.log("HeadersNow", iterateObjOutput[0], key, iterateObjOutput[0].indexOf(key))
            }
            if (iterateObjOutput[0].indexOf(key) !== -1) {
              keyIndex = iterateObjOutput[0].indexOf(key);
              currentRow.splice(keyIndex, 0,key + input[key]);
              console.log("current row", currentRow)
              iterateObjOutput.push(currentRow);
            }
            // check headers, update headers, insert values at the header position in currentRow
           // console.log("currentRow", currentRow);
            //currentRow.push(key, input[key]);
           // iterateObjOutput.push(currentRow);
        //  console.log(iterateObjOutput)
          //  setData(currentRow, iterateObjOutput);
           // console.log("left out", parent, currentRow, key, input[key], typeof input[key]);

          }
         
         
          //d++;
          // setData(input, iterateObjOutput, key);
        
        }
  }
  //  console.log('iterateObjOutput', iterateObjOutput)
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
  //console.log("output from Set",output);
    return output;
}

var headerRow = {
  'id': "", 'depth': "", 'name': "", 'parent': "",'type' : 'typeofRow'
}

var output2 = pushRow(headerRow,[]);
//console.log("output2",output2)
function pushRow(headers, data) {
  data = [];
  for (key in headers) { //console.log(key); data.push(key)
  }
  return data;
}


