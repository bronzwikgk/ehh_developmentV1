

function arr2Obj(inputTable) {
    for (i = inputTable.length - 1; i > 0; i--) {
        if (inputTable[i][1] == 2) {
           // console.log("this",inputTable[i]);
            if (!output) output = {};
            output = parentNode;
            continue;
        }
        for (j = i - 1; j >= 0; j--) {
            entity = inputTable[i];
            parent = inputTable[j];
            if (parent[3] == entity[2] && parent[1] + 1 == entity[1]) { 
             //   console.log(inputTable[j][3], inputTable[i][2])
               // console.log("parent",parent,"entity",entity) 
                if (parent[4] == "Object") {
                    console.log(parent)
                    if (!parentNode) var parentNode = {};
                    parentNode[entity[3]] = entity;
                   // parentNode[entity[3]] = updateAttributesNvalues(inputTable, parentNode, entity);
                    console.log("entity", entity, "parent", parentNode)
                } else if (parent[4] == "Array") {
                   /// console.log(inputTable[j])
                    if (!parent[5]) parent[5] = [];
                    parent[5].unshift(entity[5]);
                    //   console.log(inputTable[j][5])
                }
                break;
            }
        }
    }

    return output;
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

    function createObject(input, output, currentRow) {
    if (currentRow[4] === 'Object') {
        //  console.log("creating Object for",currentRow)
        var newObj = {};
        updateAttributesNvalues(input, newObj, currentRow);
    }
    if (currentRow[4] === 'Array') {
        var newObj = [];
    }
    //  console.log("newobject",newObj,currentRow)
    return newObj;
}


function updateAttributesNvalues(input, output, currentRow) {
    var header = input[0];
    var rowAttributes = currentRow.slice(2);
    if (rowAttributes.length > 0) {
        rowAttributes.forEach((value) => {
            if (value !== "") {
                var key = input[0][currentRow.indexOf(value)];
                output[key] = value;
            }
        });
    }
}