function getEntityType(entity) {
    return Object.getPrototypeOf(entity).constructor.name;//entity.__proto__.constructor.name
}
var row = new Array('ehhid', 'd', 'parent', 'entityName', "typeOf");

//A constructor class of creating any kind of object [ Object / Array / Node]
//has to be added, along with entire Crud operation.
class processData { 
   
    static createRow(input, output, previous, d, currentKey, currentObj,currentRow) {
      //  console.log("createRow ", input, output)
        var id = output.length;
        var newRow = [id, d, previous, currentKey, input?.constructor.name];
        return newRow;
    }
    
    static updateRow(input, output, previous, d, currentKey, currentObj, currentRow, options, callback) {
        console.log("updating Current Row", currentRow, output[0], currentKey)
         processData.fillEmptyDepth(currentRow, output[0])
        currentRow.splice(output[0].indexOf(currentKey), 1, input);
    // console.log("updated", currentRow, output[0])
        return currentRow;
    }
    static fillEmptyDepth(input, output) {
     console.log("filling gap",input,output)
    for (var j = 1; j <= output[0].length - input.length; j++) {
        input.push("");
    }
        return input;
    }

    static processObj(input, output, previous, d, currentKey, currentObj, currentRow) {
   
      //  console.log("processing", input, output)
   
        for (var key in input) {
            if (!input.hasOwnProperty(key)) continue;
            if (getEntityType(input[key]) === 'Object') { // console.log("object",key,input[key])
                currentObj = input[key];
                var currentRow = processData.createRow(input[key], output, previous, d, key, currentObj, currentRow);
                output.push(currentRow);
            // console.log("output",output)
                processData.Obj2(input[key], output, key, d, key, currentObj, currentRow);// console.log("Sending for recursion", input[key], output, key, id, d, key, newRow)
            } else if (getEntityType(input[key]) === 'Array') {
          //  console.log("Array",key,input[key])
                currentObj = input[key];
                var currentRow = processData.createRow(input[key], output, previous, d, key, currentObj, currentRow);
                output.push(currentRow);
                // console.log("output",output)
                processData.Obj2(input[key], output, key, d, key, currentObj, currentRow);// console.log("Sending for recursion", input[key], output, key, id, d, key, newRow)
            } else if (getEntityType(input[key]) === 'String' || getEntityType(input[key]) === 'Function' || getEntityType(input[key]) === 'Boolean') {
                var currentRow = processData.createRow(input[key], output, previous, d, key, currentObj, currentRow);

                output.push(currentRow);

                processData.validateNupdate(key, output);
                console.log(input[key], typeof input[key], input[key].toString(), output)
                processData.updateRow(input[key], output, previous, d, currentKey, currentObj, currentRow)
              
            } else {
                console.log("errand", key, input[key],typeof key)
            }
        }
         return output;
    }
    static processArr(input, output, previous, d, currentKey, currentObj, currentRow) { 

        for (var i = 0; i < input.length; i++) {
            if (typeof input[i] === "object" && input[i] !== null) {
               // console.log("Found Object in Array", input[i]);
                var newRow = processData.createRow(input[i], output, previous, d, input[i]);
                output.push(newRow);
                previous = key;
                processData.Obj2(input[i], output, key, previous, d, newRow);// 
            } else {
              //  console.log("Found value in Array", input[i], typeof input[i], previous, input[i]);
                var newRow = processData.createRow(input[i], output, previous, d, input[i]);
                output.push(newRow);
               
            }
             
        }
    }
    static Obj2(input, output, previous, d, currentKey, currentObj, currentRow) { 
       // console.log("main",input)
        if (!previous) {
            var previous = "root";
            output.push(row);
        };
        if (!d) { var d = 0; }
        d = d + 1;
        switch (input?.constructor) {
            case Object:   
                return processData.processObj(input, output, previous, d, currentKey);
            case Array:
               // console.log(input);
                return processData.processArr(input, output, previous, d);
            default:
                return
        } 
        console.log("output",output);
    }
   
     //this function primarly check for the presence of a keys in any an array, if not present and options [ returns false and update and return position]
    static validateNupdate(input, output) {
            if (output[0].indexOf(input) === -1 && typeof input !== null && typeof input !== undefined) {
                output[0].push(input);
            }
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

