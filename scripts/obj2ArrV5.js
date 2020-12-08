//works well with Sample
//has issues on rootObject
function getEntityType(entity) {
    return Object.getPrototypeOf(entity).constructor.name;//entity.__proto__.constructor.name
}
var row = new Array('ehhid', 'd', 'parent', 'root', "typeOf","path");

//A constructor class of creating any kind of object [ Object / Array / Node]
//has to be added, along with entire Crud operation.
class processData { 
   //This is kind of an constructor function. It should be able to create an object based on the input Schema object.
    //currently it creates a array/a Row on req using row as a base array.
    static createRow(input, output, previousRow,currentKey, d, path) {
   
       // console.log("previous row", previousRow,currentKey)
        var id = output.length;
        var newRow = [id, d, previousRow[3], currentKey, input?.constructor.name,path];
       // console.log(newRow)
        return newRow;
    }
    static updateRow(input, output, previousRow, currentRow, currentKey, d, path) {
       //  console.log("updating Current Row", currentRow, output[0], currentKey,input)
           processData.fillEmptyDepth(currentRow, output)
             currentRow.splice(output[0].indexOf(currentKey), 1, input);//Adding the inputValue in the currentRow at the index of the currentKey, also deletes an empty space from before.
        // console.log("updated", currentRow, output[0])
        return currentRow;
    }
    static fillEmptyDepth(input, output) {
   // console.log("filling gap",input,output)
    for (var j = 1; j <= output[0].length - input.length; j++) {
        input.push("");
    }
        return input;
    }

    static processObj(input, output, previousRow, currentRow, currentKey, d, path) {
     // console.log("path here", path)
       
        for (var key in input) {
            if (!input.hasOwnProperty(key)) continue;
            if (getEntityType(input[key]) === 'Object') { // console.log("object",key,input[key])
              //  console.log("Found Object in object",key ,input[key], getEntityType(input[key]), currentRow);

                if (typeof currentRow[3] === 'undefined') { 
                    processData.updateRow(key, output, previousRow, currentRow, 'root', d, path);
                  // console.log(">>>>????",currentRow, previousRow, path)
                  
                  
                    
                  //  console.log(key, input[key], currentRow)
                } else {
                    var currentRow = processData.createRow(input[key], output, previousRow, key, d, path);
                
                  output.push(currentRow);
                }
               
              
              //  var path = path + "." + previousRow[3];
               // console.log(currentRow, previousRow, path)
             //  output.push(path);
              //  console.log("{{{{",key,input[key],currentRow,previousRow)
                processData.Obj2(input[key], output, currentRow, currentRow, key, d, path);// console.log("Sending for recursion", input[key], output, key, id, d, key, newRow)
            } else if (getEntityType(input[key]) === 'Array') {
            
             
                if (typeof currentRow[3] === 'undefined') {
                    processData.updateRow(key, output, previousRow, currentRow, 'entityName', d, path);

                } else {
                    var currentRow = processData.createRow(input[key], output, previousRow, key, d, path);
                    //   console.log(key, input[key], currentRow)
                    output.push(currentRow);
                } // console.log(">>>>",key, currentRow, previousRow, input[key])
               // console.log("currentRow",currentRow)
            //    var path = previousRow[5] + "." + previousRow[3] + "." + key;
                processData.Obj2(input[key], output, currentRow, currentRow, key, d, path);// console.log("Sending for recursion", input[key], output, key, id, d, key, newRow)
            } else if (getEntityType(input[key]) === 'String' || getEntityType(input[key]) === 'Function' || getEntityType(input[key]) === 'Boolean') {
               
             //  console.log("found value", key, input[key], currentRow);
                processData.validateNupdate(key, output);
                processData.updateRow(input[key], output, previousRow, currentRow, key, d, path)
            } else {
             //   console.log("errand", key, input[key],typeof key)
            }
        }
         return output;
    }

    static processArr(input, output, previousRow, currentRow, currentKey, d, path) { 

        for (var i = 0; i < input.length; i++) {
            if (typeof input[i] === "object" && input[i] !== null) {
         //  console.log("Found Object in Array", input[i],getEntityType(input[i]),currentRow);
             //   var path = previousRow[5] + "." + previous;
                // console.log(path)               
             // console.log("currentRow???", currentRow)

                if (typeof currentRow[3] === 'undefined') {
                    processData.updateRow(currentKey, output, previousRow, currentRow, 'entityName', d, path);
                } else {
                 // console.log("currentRow???",currentRow)
                    var currentRow = processData.createRow(input[i], output, previousRow, i, d, path);
                   //  console.log(i, input[i], currentRow)
                    output.push(currentRow);
                }
                processData.Obj2(input[i], output, previousRow, currentRow, currentKey, d, path);
            //processData.Obj2(input[i], output, previous, d, currentKey, currentObj, currentRow, currentRow, previsouObj, path)
            } else {
               // console.log(path)
              //  console.log("Found value in Array", input[i], typeof input[i], previousRow, input[i]);
               // var currentRow = processData.createRow(input[i], output, previousRow, currentRow, currentKey, d, path);
                var currentRow = processData.createRow(input[i], output, previousRow, input[i], d, path);
                //   console.log(key, input[key], currentRow)
                output.push(currentRow);
               
               
            }
             
        }
    }
    static Obj2(input, output, previousRow, currentRow, currentKey, d, path) { 
      // console.log("cu", input, previousRow,currentRow)
        if (!previousRow) {
            output.push(row);
            previousRow = output[0];
            path = "";
        };
        if (!d) { var d = 0; }
        d = d + 1;
        switch (input?.constructor) {
            case Object: 
             
                if (!currentRow) {
                    var path =  previousRow[5]; 
                    var currentRow = processData.createRow(input, output, previousRow,currentKey, d, path)
                 //   console.log("found value", key, input[key], currentRow, output);
                   output.push(currentRow);
                }
                
                var path = previousRow[5] + "." + previousRow[3];
              //  console.log("Object  >>>", path, input, currentRow, previousRow)
                return processData.processObj(input, output, previousRow, currentRow, currentKey, d, path);
            case Array:
             //  console.log(previousRow,currentRow)
                if (!currentRow) {
                  
                    var currentRow = processData.createRow(input, output, previousRow, currentKey, d, path)
                    //   console.log("found value", key, input[key], currentRow, output);
                    output.push(currentRow);
                }
              //  var path = path + "." + previousRow[3];
             //  console.log("array  >>>", input, output, currentRow, previousRow)// console.log(input);
                return processData.processArr(input, output, currentRow, currentRow, currentKey, d, path);
            default:
                return
        } 
     //   console.log("output",output);
    }
   
     //this function primarly check for the presence of a keys in any an array, if not present and options [ returns false and update and return position]
    static validateNupdate(input, output) {
       
            if (output[0].indexOf(input) === -1 && typeof input !== null && typeof input !== undefined) {
                output[0].push(input);

        }
       // console.log(output[0], input);
            return output;
        }
  
}

function processTest(e) {
    e.preventDefault();
    var in2 = sample;
    console.log(in2)
    var outputArray = processData.Obj2(in2, []);
   console.log(outputArray)
 //   outputJson = array2Obj(outputArray);
  //  console.log(outputJson)
    document.getElementById("output").innerText = JSON.stringify(outputArray);
}


document.getElementById("get").addEventListener("click", processTest);

