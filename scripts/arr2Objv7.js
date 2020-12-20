// To build our tree, we’re going to want to:

// Iterate through the data array
// Find the parent element of the current element
// In the parent element’s object, add a reference to the child
// If there is no parent for an element, we know that will be our tree’s “root” element


function updateAttributesNvalues(input,currentRow) {
   console.log(currentRow)
    var header = input[0];
   
    var rowAttributes = currentRow.slice(6);
    if (rowAttributes.length > 0) {
        attri = {};
        rowAttributes.forEach((value) => {
            if (value !== "" && value !== 'undefined') {
                var key = input[0][currentRow.indexOf(value)];
                console.log(key,value);        
                attri[key] = value;
            }
        });
        console.log(attri);
        return attri;
    }
   
}
function arr2Obj(input) {

    var inputTable = [...input];
   
    d = inputTable[0].length;
    for (i = inputTable.length - 1; i >= 0; i--) {
        if (inputTable[i][1] == 1) {
            if (!outputObj) var outputObj = {};
            entity = inputTable[i];
            outputObj[entity[3]] = parentNode;
            continue;
        }
        for (j = i - 1; j >= 0; j--) {
            entity = inputTable[i];
            parent = inputTable[j];

            if (parent[3] == entity[2] && parent[1] + 1 == entity[1]) {

                if (!parentNode) var parentNode = {};
                parentNode[entity[3]] = entity[3];
                console.log(parentNode)
                break;

            }
        }
    }
    
    return outputObj;
}

function arr2Obj2(input) {
    inputTable = input;
    d = inputTable[0].length;
    for (i = inputTable.length - 1; i >= 0; i--) {
        if (inputTable[i][1] == 1) {
            if (!outputa) var outputa = {};
            entity = inputTable[i];
            outputa[entity[3]] = inputTable[i][d];
            continue;
        }
        for (j = i - 1; j >= 0; j--) {
            entity = inputTable[i];
            parent = inputTable[j];

            if (parent[3] == entity[2] && parent[1] + 1 == entity[1]) {

                //   console.log(inputTable[j][3], inputTable[i][2])
                // console.log("parent",parent,"entity",entity) 
                if (parent[4] == "Object") {
                    // console.log(inputTable[j], "entity")

                    if (!parent[d]) parent[d] = {};

                    parent[d][entity[3]] = entity[d];
                   // updateAttributesNvalues(inputTable, parent[d], entity);
                    //parent[d][entity[3]] = { ...,...entity[d] }
                   // parent[d][entity[3]] = 
                    
                   // console.log(parent);
                } else if (parent[4] == "Array") {
                    /// console.log(inputTable[j])
                    if (!parent[d]) parent[d] = [];
                    parent[d].unshift(entity[d]);
                    //   console.log(inputTable[j][5])
                } else if (parent[4] == "String") { 
               // console.log("Found Value",parent[4])
                }
                break;
           
            }
        }
    }

    return outputa;
}



