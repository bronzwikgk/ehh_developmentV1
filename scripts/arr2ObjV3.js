function arr2Obj(inputTable, output, currentObj, currentRow) { 

    if (!output) { var output = {}; }
    //console.log(input)
    maxDepth = Math.max(...splitArray(inputTable, 2));
    console.log("input", inputTable)

    for (d = 1; d <= maxDepth; d++) {
        console.log("iterating at depth", d);
        for (i = 1; i < inputTable.length; i++) { 
            if (inputTable[i][1] === d) { 
                currentRow = inputTable[i];
                currentObj = row2object(currentRow, currentObj, currentObj, currentRow, inputTable);
                console.log("delteing", inputTable[i], "currentObect", currentObj)
                inputTable.splice(inputTable[i], 1);
                output[currentRow[3]] = currentObj;
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
    children = input.filter((row, value) => { if (row[2] === currentRow[3] && row[1] === currentRow[1] + 1) return row; });

    console.log("chidlren",children) 
    for (i = 1; i < children.length; i++) {
        if (children[i][1] === d) {
            currentRow = children[i];
                currentObj = row2object(currentRow, currentObj, currentObj, currentRow, inputTable);
            console.log("delteing", input[i], "currentObje", currentObj);
            input.splice(inputTable[i], 1);

              //  console.log("children", children);
                  childrenObj = getChildren(children, currentObj, currentObj, currentRow, inputTable);
                console.log("childrenObj", childrenObj);
                //  console.log(inputTable)
                //   break;
                // console.log("CurrentObj",currentObj);
            currentObj[currentRow[3]] = currentObj;
            }
        }
   
    console.log(currentObj)
    return currentObj;
}
function row2object(inputRow, outputObj, currentObj, currentRow,inputTable) {
    if (!currentObj) { var currentObj = {}; }
    attributes = updateAttributesNvalues(inputTable, currentObj, currentRow, inputTable);
    
    getChildren(inputTable, currentObj, currentRow);
    
    if (children.length>0) { console.log("children", children) }
     set(attributes, currentObj, inputRow[3]);
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
        //console.log("row",row)
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
