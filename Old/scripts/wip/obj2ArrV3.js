function getEntityType(entity) {
    return Object.getPrototypeOf(entity).constructor.name;//entity.__proto__.constructor.name
}
var row = new Array('ehhid', 'd', 'parent', 'entityName', "typeOf","path");

//A constructor class of creating any kind of object [ Object / Array / Node]
//has to be added, along with entire Crud operation.
class processData { 
   //This is kind of an constructor function. It should be able to create an object based on the input Schema object.
    //currently it creates a array/a Row on req using row as a base array.
    static createRow(input, output, previous, d, currentKey, currentObj, currentRow, previousRow, previsouObj,path) {
   //    console.log(path,"previis",previousRow)
     //   var path = path + "." + previousRow[2];
      // console.log("path e",path)
        var id = output.length;
        var newRow = [id, d, previous, currentKey, input?.constructor.name,path];
        return newRow;
    }
    static updateRow(input, output, previous, d, currentKey, currentObj, currentRow, previousRow, previsouObj,options, callback) {
         //  console.log("updating Current Row", currentRow, output[0], currentKey,input)
           processData.fillEmptyDepth(currentRow, output)
          currentRow.splice(output[0].indexOf(currentKey), 1, input);//Adding the inputValue in the currentRow at the index of the currentKey, also deletes an empty space from before.
        //  console.log("updated", currentRow, output[0])
        return currentRow;
    }
    static fillEmptyDepth(input, output) {
   // console.log("filling gap",input,output)
    for (var j = 1; j <= output[0].length - input.length; j++) {
        input.push("");
    }
        return input;
    }

    static processObj(input, output, previous, d, currentKey, currentObj, currentRow, previousRow, previsouObj, path) {
       // console.log("path here", path)
       // console.log("processing", input, "at previous Row", previousRow)
        for (var key in input) {
            if (!input.hasOwnProperty(key)) continue;
            if (getEntityType(input[key]) === 'Object') { // console.log("object",key,input[key])
                currentObj = input[key];
                var path = previousRow[5] + "." + previous ;
                var currentRow = processData.createRow(input[key], output, previous, d, key, currentObj, currentRow, previousRow, previsouObj, path);
                output.push(currentRow);
                processData.Obj2(input[key], output, key, d, key, currentObj, currentRow, currentRow,  previsouObj, path);// console.log("Sending for recursion", input[key], output, key, id, d, key, newRow)
            } else if (getEntityType(input[key]) === 'Array') {
                currentObj = input[key];
               // var path = "." + previousRow[2] + "." + key;
                var path = previousRow[5] + "." + previousRow[3] + "." + key;
                console.log(path);
                var currentRow = processData.createRow(input[key], output, previous, d, key, currentObj, currentRow, previousRow, previsouObj, path);
                output.push(currentRow);
             //   console.log(input[key]);
                processData.Obj2(input[key], output, key, d, key, currentObj, currentRow, previousRow, previsouObj, path);// console.log("Sending for recursion", input[key], output, key, id, d, key, newRow)
            } else if (getEntityType(input[key]) === 'String' || getEntityType(input[key]) === 'Function' || getEntityType(input[key]) === 'Boolean') {
                currentObj = input[key];
           //    console.log("found value", key, input[key],currentRow);
                processData.validateNupdate(key, output);
                processData.updateRow(input[key], output, previous, d, currentKey, currentObj, currentRow, previousRow, previsouObj)
            //works for sample 1
                //   processData.updateRow(input[key], output, key, d, key, currentObj, previousRow)
            } else {
             //   console.log("errand", key, input[key],typeof key)
            }
        }
         return output;
    }

    static processArr(input, output, previous, d, currentKey, currentObj, currentRow, previousRow, previsouObj, path) { 

        for (var i = 0; i < input.length; i++) {
            if (typeof input[i] === "object" && input[i] !== null) {
             // console.log("Found Object in Array", input[i],getEntityType(input[i]));
                currentObj = input[i];
                var path = previousRow[5] + "." + previous;
                console.log(path)
                var currentRow = processData.createRow(input[i], output, previous, d, currentKey, currentObj, currentRow, previousRow, previsouObj, path);
              //  var currentRow = processData.createRow(input[i], output, previous, d, input[i], currentObj, currentRow, previousRow, previsouObj, path);
            output.push(currentRow);
               // console.log("cureentRow", currentRow);
                processData.Obj2(input[i], output, previous, d, input[i], currentObj, currentRow, previousRow, previsouObj, path)
            } else {
               // console.log(path)
             // console.log("Found value in Array", input[i], typeof input[i], previous, input[i]);
                var newRow = processData.createRow(input[i], output, previous, d, input[i], currentObj, currentRow, previousRow, previsouObj, path);
                output.push(newRow);
               
            }
             
        }
    }
    static Obj2(input, output, previous, d, currentKey, currentObj, currentRow, previousRow, previsouObj,path) { 
      //  console.log("path here ddd", path, input)

      //  console.log(" >>>", input)
        // console.log("main",input)
     //   console.log("path here >>>", path)
        if (!previous) {
            var previous = "root";
            output.push(row);
            previousRow = output[0];
            path = "";
        };
        if (!d) { var d = 0; }
        d = d + 1;
        switch (input?.constructor) {
            case Object:   
              //  console.log("Object  >>>", input, output, previous, d, currentKey, currentObj, currentRow, previousRow, previsouObj)// c
                return processData.processObj(input, output, previous, d, currentKey, currentObj, currentRow, previousRow, previsouObj,path);
            case Array:
             //console.log("array  >>>", input, output, previous, d, currentKey, currentObj, currentRow)// console.log(input);
                return processData.processArr(input, output, previous, d, currentKey, currentObj, currentRow, previousRow, previsouObj, path);
            default:
                return
        } 
        console.log("output",output);
    }
   
     //this function primarly check for the presence of a keys in any an array, if not present and options [ returns false and update and return position]
    static validateNupdate(input, output) {
      //  console.log(output[0],input)
            if (output[0].indexOf(input) === -1 && typeof input !== null && typeof input !== undefined) {
                output[0].push(input);
            }
            return output;
        }
  
}

function processTest(e) {
    e.preventDefault();
    var in2 = sample2;
    console.log(in2)
    var outputArray = processData.Obj2(in2, []);
   console.log(outputArray)
 //   outputJson = array2Obj(outputArray);
  //  console.log(outputJson)
    document.getElementById("output").innerText = JSON.stringify(outputArray);
}


document.getElementById("get").addEventListener("click", processTest);

