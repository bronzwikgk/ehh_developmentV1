//https://stackoverflow.com/questions/15792794/convert-parent-child-array-to-tree
//https://stackoverflow.com/questions/18017869/build-tree-array-from-flat-array-in-javascript

//Need to add options.
//set has to be a seperate method
//Child index need to be created along with the path.
//


function getEntityType(entity) {
    return Object.getPrototypeOf(entity).constructor.name;//entity.__proto__.constructor.name
}
var row = new Array('ehhid', 'd', 'parent', 'node', "typeOf", "path");

class mutate { 

    static fillEmptyDepth(input, output) {
        // console.log("filling gap",input,output)
        for (var j = 1; j <= output[0].length - input.length; j++) {
            input.push("");
        }
        return input;
    }

    //this function primarly check for the presence of a keys in any an array, if not present and options [ returns false and update and return position]
    
    static validateNupdate(input, output) {

        if (output[0].indexOf(input) === -1 && typeof input !== null && typeof input !== undefined) {
            output[0].push(input);
        }
        // console.log(output[0], input);
        return output;
    }  
    
    static createRow(input, output, previousRow, currentKey, d, path) {
        var id = output.length;
        var newRow = [id, d, previousRow[3], currentKey, input?.constructor.name,path];
        return newRow;
    }

    static updateRow(input, output, previousRow, currentRow, currentKey, d, path) {
        mutate.fillEmptyDepth(currentRow, output)
        // console.log("current Key in updation",currentKey,input,currentRow,previousRow)
        //Adding the inputValue in the currentRow at the index of the currentKey, also deletes an empty space from before.
        currentRow.splice(output[0].indexOf(currentKey), 1, input);
        //  console.log("updated Row",currentRow)
        return currentRow;
    }
    static Obj2(input, output, previousRow, currentRow, currentKey,d, path, parent) { 
        if (!previousRow) {
            output.push(row);
            previousRow = output[0];
          //  parent = "root";
            path = '';
        };
        if (!d) { var d = 0; }
        d = d + 1;
        switch (input?.constructor) {
            case Object:
                // if (!currentRow) {
                //     path = path + '.' + previousRow[3];
                //     var currentRow = mutate.createRow(input, output, previousRow, previousRow[3], d, path, previousRow[3]);
                //     output.push(currentRow);
                //    // console.log("path",path);
                // }
                path = path + '.' + previousRow[3];
               mutate.processObj(input, output, previousRow, currentRow, currentKey, d, path, previousRow[3]);
            case Array:
                // if (!currentRow) {
                //     path = path + '.' + previousRow[3];
                //     var currentRow = mutate.createRow(input, output, previousRow, previousRow[3], d, path, previousRow[3]);
                //     output.push(currentRow);
                //     // console.log("path",path);
                // }
                path = path + '.' + previousRow[3];
                mutate.processArr(input, output, previousRow, currentRow, currentKey, d, path, previousRow[3]);
            default:
               // return
        } 
      //  console.log(output)
        return output;
    }
    static processObj(input, output, previousRow, currentRow, currentKey, d, path, parent) {
        for (var key in input) {
            if (!input.hasOwnProperty(key)) continue;
            if (getEntityType(input[key]) === 'Object' || getEntityType(input[key]) === 'Array') {
              // console.log(path)
                var currentRow = mutate.createRow(input[key], output, previousRow, key, d, path, previousRow[3]);
                output.push(currentRow); 
             //  console.log(currentRow)
                mutate.Obj2(input[key], output, currentRow, currentRow, currentKey, d, path, currentRow[3]);
            }  else if (getEntityType(input[key]) === 'String' || getEntityType(input[key]) === 'Function' || getEntityType(input[key]) === 'Boolean') {
                mutate.validateNupdate(key, output);
                mutate.updateRow(input[key], output, previousRow, previousRow, key, d, path);

            } else {
                //   console.log("errand", key, input[key],typeof key)
            }
        }
        return output;
    }
    static processArr(input, output, previousRow, currentRow, currentKey, d, path, parent) {

        for (var i = 0; i < input.length; i++) {
            if (typeof input[i] === "object" && input[i] !== null) {
              if (typeof currentRow[3] === 'undefined') {
              //      console.log(currentRow)
                    mutate.updateRow(currentKey, output, previousRow, currentRow, 'root', d, path);
                } else {
                    var currentRow = mutate.createRow(input[i], output, previousRow, previousRow[3] + i, d, path);
                    output.push(currentRow);
                }

                mutate.Obj2(input[i], output, currentRow, currentRow, currentKey, d, path);

            } else {
                //creating Value Row for Array Parent
                var currentRow = mutate.createRow(input[i], output, previousRow, input[i], d, path);
                output.push(currentRow);
            }
        }
        return output
    }
}

function processTest(e) {
    e.preventDefault();
    var in2 = sample;
    console.log("sample input",in2)
    var outputArray = mutate.Obj2(in2, []);
    console.log("outputArray",outputArray)
    outputJson = arr2Obj(outputArray,{});
     console.log("sample output from array",outputJson)
  //  document.getElementById("output").innerText = JSON.stringify(outputArray);
}


document.getElementById("get").addEventListener("click", processTest);

