//This function takes an array as input and extract a column as a return array
function splitArray(input, column) {
    var output = [];
    for (i = 1; i < input.length; i++) {
        output.push(input[i][1]);

    }

    //  console.log(output);
    return output;
}

class processArr { 
    static updateAttributesNvalues(input, output, currentRow, currentObj) {
       var header = input[0];
       var  rowAttributes = currentRow.slice(3);
        if (rowAttributes.length > 0) {
           var row = {};
         rowAttributes.forEach((value) => {
                if (value !== "") {
                   var key = input[0][currentRow.indexOf(value)];
                    row[key] = value;
                }
            });
          // console.log("row",row)
            return row;
        }
    }
    static getChildren(input, output, currentRow) { 

        var childrenRows = input.filter((row, value) => {
            if (row[2] === currentRow[3] && row[1] === currentRow[1] + 1) {
                //console.log("delteing", inputTable[i], "currentObect", currentObj);
                input.splice(row[1], 1);
                return row;
            }
        });
      //  console.log("children", childrenRows)
        if (0<childrenRows.length) { 
            var childrenObj = processArr.arr2(childrenRows, childrenObj);
            console.log(childrenObj);
        }
        
        return childrenObj
    }
    static createObject(input, output, currentRow) {
        if (currentRow[4] === 'Object') {
            var newObj = {};
            newObj = processArr.updateAttributesNvalues(input, output, currentRow);
        }
        if (currentRow[4] === 'Array') {
            var newObj = [];
        }

        return newObj;

    }
    static arr2(input, output) {
        if (!d) { var d = 0; }
       // maxDepth = Math.max(...splitArray(input, 2));
        switch (input?.constructor) {
            case Object:
            case Array:
                processArr.iterateArr(input, output,d);
            default:
            // return
        }
        //  console.log(output)
        return output;
    }
    static iterateArr(input, output, d) { 
        d = d + 1;
        for (var i = 1; i < input.length; i++) { 
           var  entityType = input[i][4];
   //console.log(input[i], entityType);
            if (entityType === "Object" && input[i][1] === d) { 
                var currentObj = processArr.createObject(input, output, input[i]);
              //  processArr.getChildren(input, currentObj, input[i]);
                        console.log(currentObj);
                processArr.setEntity(currentObj, output, input[i][3]);
                
            } if (entityType === "Array" && input[i][1] === d) {
                console.log("found Array", input[i]);
            } if (entityType === "String" && input[i][1] === d) {
                console.log("found String", input[i]);
            }
          //  console.log("children",hasChildren(input[i],input))
        }
        return output;
    }
    static setEntity(input, output, key) {
        
        if (output?.constructor === Object) { 
            output[key] = input;
        } else if (output?.constructor === Array) {
            if (key) {
                output.push(input[key])
            } else {
                output.push(input);
            }
        }

        

        return output;
    }
}



//this function taken a row and a table as in an input, if it find Children in next depth of the row Send back an array of children.
//else returns false/
function hasChildren(row, inputTable) {
    children = {};
    inputTable.shift()
    children = inputTable.filter((rowElement, i) => {
        // console.log("rowElement", rowElement,row)
        if (row[3] === rowElement[2] && rowElement[1] === row[1] + 1) {
            // inputTable.splice(rowElement[1], 1);
            // console.log("deleted ", rowElement,"from",inputTable)
            return rowElement;
        }
    });
    if (children.length > 0) {
        return children;
    } else {
        return false;
    }
    console.log("Children", children, "for",row);
}