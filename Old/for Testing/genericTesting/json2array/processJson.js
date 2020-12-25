var jsonUrl = "https://raw.githubusercontent.com/bronzwikgk/ehh_developmentV1/main/json/sampleData/sampleSchemaV2.json";

function test(){
 var options = {
      recurse :'true',
      ignore : ['function','null',]
                };             
     var json4rmUrl = processJsonUrl(jsonUrl);
     console.log(json4rmUrl);
}              
function processJsonUrl() {
    var response = UrlFetchApp.fetch(jsonUrl);
    var json = response.getContentText();
    var data = JSON.parse(json);Logger.log(data);
    var options = {
      recurse :'false',
      ignore : ['function','null',]
                };
    var jsonOutput = iterateObj(data,"",options);
   // console.log("output",jsonOutput, typeof jsonOutput)
  
  return jsonOutput;
}



function iterateObj(obj,iterationResponse,options,input){
  if(!iterationResponse){iterationResponse={};}
  
  for(var key in obj){   
    if(typeof obj[key] === "object" && !obj[key].length){
    
      if(options.recurse === 'true'){
        var recurseResponse = {};
        recurseResponse [key] =  iterateObj(obj[key],recurseResponse[key],options);//console.log("rescurse Resposne",recurseResponse [key])
        iterationResponse [key] = recurseResponse[key];
      } 
    }
   // iterationResponse [key] = JSON.stringify(obj[key]);  
  }
  //console.log(" Response",iterationResponse);
return iterationResponse;
}



function iterateArray(input,arrayResponse,options,obj){
  if(!arrayResponse){arrayResponse =[];}
  for(var i=0; i<input.length;i++){
  arrayResponse.push(input[i]);
  }

console.log("resutnring from Array", arrayResponse)
return arrayResponse;
}