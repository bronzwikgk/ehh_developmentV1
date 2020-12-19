//https://jrsinclair.com/articles/2019/functional-js-traversing-trees-with-recursive-reduce/


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
   // console.log("Children", children, "for",row);
}

function arr2Obj(inputTable, output, currentObj, currentRow) { 
    if (!output) { var output = {}; }
    //console.log(input)
    maxDepth = Math.max(...splitArray(inputTable, 2));
 //   console.log("input", inputTable)
    for (d = 1; d <= maxDepth; d++) {

        console.log("iterating at depth", d);

        for (i = 1; i < inputTable.length; i++) { 

            if (inputTable[i][1] === d) { 
                currentRow = inputTable[i];
                currentObj = {};
                currentObj[currentRow[3]] = updateAttributesNvalues(inputTable, currentObj, currentRow, inputTable);
                if (hasChildren(currentRow, inputTable) !== "false") { 
                    children = { ...hasChildren(currentRow, inputTable) }
                    
                     childrenObj = arr2Obj(children, currentObj, currentObj, currentRow);
                    console.log("childrenObj", childrenObj , "of", currentObj);
                }
                output[currentRow[3]] = { ...currentObj ,...output};
             console.log("output here >>>",output)
            }
        }
    }
   console.log(output)
    return output;

}

function getChildren(input, currentObj, currentRow,inputTable) {

    if (!output) { var output = {}; }
    //console.log(input)
    maxDepth = Math.max(...splitArray(input, 2));
    //console.log("input", inputTable)
    childrenObj = {};
    children = input.filter((row, value) => {
        if (row[2] === currentRow[3] && row[1] === currentRow[1] + 1) {
            console.log("delteing", inputTable[i], "currentObect", currentObj);
            inputTable.splice(row[1], 1);
            return row;   
    } });
  //  console.log("children",children) 
    for (i = 1; i < children.length; i++) {
        if (children[i][1] === d) {
            currentRow = children[i];
            currentObj[currentRow[3]] = updateAttributesNvalues(inputTable, currentObj, currentRow, inputTable);
          //  getChildren(children, currentObj, currentObj, currentRow, inputTable);
            currentObj[currentRow[3]] = currentObj;
            }
    }
    console.log("current Obj with children",currentObj)
    return currentObj;
}


function row2object(inputRow, outputObj, currentObj, currentRow,inputTable) {
    if (!currentObj) { var currentObj = {}; }
    attributes = updateAttributesNvalues(inputTable, currentObj, currentRow, inputTable);
   
  // getChildren(inputTable, currentObj, currentRow);
   // console.log( "currentObect", currentObj)
    //if (children.length>0) { console.log("children", children) }
    set(attributes, currentObj, inputRow[3]);
   // console.log(currentObj)
    return currentObj;
}


function set(input, output, key) {
    switch (output?.constructor) {
        case Object:
            return output[key] = input;
        case Array:
            return output.push(input[key]);
        default:
            return "Output UnIdentified"
    }
}

function updateAttributesNvalues(inputTable, currentObj, currentRow) {
    header = inputTable[0];
    rowAttributes = currentRow.slice(2);
    if (rowAttributes.length > 0) {
        attrs = {};
        rowAttributes.forEach((value) => {
            if (value !== "") {
                key = inputTable[0][currentRow.indexOf(value)];
                //attrs[key] = value;
                set(value, attrs, key);
            }
        });
     //   console.log("attrs",attrs)
        return attrs;
    }
}

//This function takes an array as input and extract a column as a return array
function splitArray(input, column) {
    var output = [];
    for (i = 1; i < input.length; i++) {
        output.push(input[i][1]);

    }

    //  console.log(output);
    return output;
}
