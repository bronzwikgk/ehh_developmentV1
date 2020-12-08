//seems to have an issue with the root object.
//Need to add options.
//set has to be a seperate method
//Child index need to be created along with the path.
//

function getEntityType(entity) {
    return Object.getPrototypeOf(entity).constructor.name;//entity.__proto__.constructor.name
}
var row = new Array('ehhid', 'd', 'parent', 'root', "typeOf","path");

//A constructor class of creating any kind of object [ Object / Array / Node]
//has to be added, along with entire Crud operation.
class processData { 
   //This is kind of an constructor function. It should be able to create an object based on the input Schema object.
    //currently it creates a array/a Row on req using row as a base array.
    static createRow(input, output, previousRow, currentKey, d, path, parent) {
        var id = output.length;
        var newRow = [id, d, previousRow[3], currentKey, input?.constructor.name];
       console.log("row created",newRow)
        return newRow;
    }

    static updateRow(input, output, previousRow, currentRow, currentKey, d, path) {
        processData.fillEmptyDepth(currentRow, output)
     // console.log("current Key in updation",currentKey,input,currentRow,previousRow)
        //Adding the inputValue in the currentRow at the index of the currentKey, also deletes an empty space from before.
        currentRow.splice(output[0].indexOf(currentKey), 1, input);
      //  console.log("updated Row",currentRow)
        return currentRow;
    }
    static fillEmptyDepth(input, output) {
   // console.log("filling gap",input,output)
    for (var j = 1; j <= output[0].length - input.length; j++) {
        input.push("");
    }
        return input;
    }

    static processObj(input, output, previousRow, currentRow, currentKey, d, path,parent) {
    
        for (var key in input) {
            if (!input.hasOwnProperty(key)) continue;
            if (getEntityType(input[key]) === 'Object') {
       
                if (typeof currentRow[3] === 'undefined') { 
                    processData.updateRow(key, output, previousRow, currentRow, 'root', d, path);
                } else {
                    console.log("previous Row",previousRow)
                    var currentRow = processData.createRow(input[key], output, previousRow, key, d, path,parent);
                    output.push(currentRow); 
                    console.log("Hereaaaa", currentRow);
                }
              //  previousRow = currentRow;
                processData.Obj2(input[key], output, currentRow, currentRow, key, d, path,parent);// console.log("Sending for recursion", input[key], output, key, id, d, key, newRow)
            } else if (getEntityType(input[key]) === 'Array') {
            
                if (typeof currentRow[3] === 'undefined') {
                    processData.updateRow(key, output, previousRow, currentRow, 'root', d, path);

                } else {
                    var currentRow = processData.createRow(input[key], output, previousRow, key, d, path);
                    output.push(currentRow);   
                } 
              //  previousRow = currentRow;
                processData.Obj2(input[key], output, currentRow, currentRow, key, d, path);// console.log("Sending for recursion", input[key], output, key, id, d, key, newRow)
            } else if (getEntityType(input[key]) === 'String' || getEntityType(input[key]) === 'Function' || getEntityType(input[key]) === 'Boolean') {
               // console.log(input[key],previousRow,currentRow)
                processData.validateNupdate(key, output);
                    //facing issue here in findnig parent between Sample and Sample2.When we change the currentRow to parent row It works in sample2
               processData.updateRow(input[key], output, previousRow, previousRow, key, d, path);
            } else {
             //   console.log("errand", key, input[key],typeof key)
            }
        }
         return output;
    }

    static processArr(input, output, previousRow, currentRow, currentKey, d, path,parent) { 

        for (var i = 0; i < input.length; i++) {
            if (typeof input[i] === "object" && input[i] !== null) {
//                console.log("here",currentRow, input[i],currentKey)
                if (typeof currentRow[3] === 'undefined') {
                    console.log(currentRow)
                    processData.updateRow(currentKey, output, previousRow, currentRow, 'root', d, path);
                } else {
                    var currentRow = processData.createRow(input[i], output, previousRow, i, d, path);
                    output.push(currentRow); 
                }
                processData.Obj2(input[i], output, currentRow, currentRow, currentKey, d, path);
           
            } else {
             //creating Value Row for Array Parent
              var currentRow = processData.createRow(input[i], output, previousRow, input[i], d, path);
             
                output.push(currentRow);
               
            }
 
        }
    }
    static Obj2(input, output, previousRow, currentRow, currentKey, d, path,parent) { 
    
        if (!previousRow) {
            output.push(row);
            previousRow = output[0];
            parent = "root";
            path = '';
        };
        if (!d) { var d = 0; }
        d = d + 1;
        switch (input?.constructor) {
            case Object: 
                if (!currentRow) {
                 //   console.log("bigObj", typeof input, getEntityType(input), input)
                    var currentRow = processData.createRow(input, output, previousRow, previousRow[3], d, path, parent);
                    output.push(currentRow);
                   // console.log(currentRow);
                }
                return processData.processObj(input, output, currentRow, currentRow, currentKey, d, path);
            case Array:
             //  console.log(previousRow,currentRow)
                if (!currentRow) {
                 //   console.log("bigArray",typeof input, getEntityType(input),input)
                    var currentRow = processData.createRow(input, output, previousRow, previousRow[3], d, path, parent);
                    output.push(currentRow);
                }
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
    var in2 = sample2;
    console.log(in2)
    var outputArray = processData.Obj2(in2, []);
   console.log(outputArray)
 //   outputJson = array2Obj(outputArray);
  //  console.log(outputJson)
    document.getElementById("output").innerText = JSON.stringify(outputArray);
}


document.getElementById("get").addEventListener("click", processTest);

