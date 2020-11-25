var jsonUrl = "https://raw.githubusercontent.com/bronzwikgk/ehh_developmentV1/main/json/sampleData/sampleSchemaV2.json";


function test2() {
   var response = UrlFetchApp.fetch(jsonUrl);
    var json = response.getContentText();
    var data = JSON.parse(json);Logger.log("data from URL",data,isObjectArray_(data));
   var jsonArrayOutput = json2Arr(data);
  console.log("Json array output",jsonArrayOutput);
}
function json2Arr(input) {
  var output = output || {};
  var parent = parent || "root";
  var  depth = depth || 0;  

    for (var key in input) {
        if (!input.hasOwnProperty(key)) continue;
        if ((typeof input[key]) == 'object' && input[key] !== null) {
           current = [];
          current.push(key);
          current.push(parent);  
          json2Arr(input[key],current,key);
          
          
          
          console.log(current)
            for (var x in flatObject) {
                if (!flatObject.hasOwnProperty(x)) continue;

               output[key + '.' + x] = flatObject[x];
            }
        } else {
            output[key] = input[key];
        }
    }
    return output;
}




function flattenObject(ob) {
    var toReturn = {};

    for (var i in ob) {
        if (!ob.hasOwnProperty(i)) continue;

        if ((typeof ob[i]) == 'object' && ob[i] !== null) {
            var flatObject = flattenObject(ob[i]);
            for (var x in flatObject) {
                if (!flatObject.hasOwnProperty(x)) continue;

                toReturn[i + '.' + x] = flatObject[x];
            }
        } else {
            toReturn[i] = ob[i];
        }
    }
    return toReturn;
}


function temp(input,output,parent) {

    parent = parent || "root";
    for(var key in input){

      if (isObject_(input[key]) && input !== null) {
      //console.log("foundObject",input[key],key,typeof key)
      current = [];
      current.push(key);
      current.push(parent);  
      json2dArray(input[key],current,key)   
      output.push(current);
      }
      else {
      //console.log("found key",key)
      output.push(key);
      }
      
    }
   console.log(">>>>>",output) 
  return output
}

function json2dArray1(input,output,parent,current,depth,) {
    output = output || [];
    parent = parent || "root";
    depth = depth || 0;
  //console.log(parent)
  
  for(var key in input){
    
      //console.log("found key",key)
      if (typeof input[key] === 'object' && input[key] !== null && !input[key].length) {
      console.log("foundObject",key,input[key])
        current = [];
        json2dArray(input[key],current.push[key],parent);
        console.log("current",current);
        output.push(current); 
        console.log("output here",output)
      } else if (input[key].length) {
     // console.log("found Array",key,input[key]);

//        json2dArray(input[key],current);
        //console.log("current",current);
        output.push(current);
      } else {
        console.log("found key",key); 
      output.push(key);
      }
    }
  
  console.log("returning output",output)
  return output;
}

/** 
 * Returns true if the given test value is an object; false otherwise.
 */
function isObject_(test) {
  return Object.prototype.toString.call(test) === '[object Object]';
}

/** 
 * Returns true if the given test value is an array containing at least one object; false otherwise.
 */
function isObjectArray_(test) {
  for (var i = 0; i < test.length; i++) {
    if (isObject_(test[i])) {
      return true; 
    }
  }  

  return false;
}
