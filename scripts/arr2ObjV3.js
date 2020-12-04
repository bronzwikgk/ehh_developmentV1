function arr2Obj(inputTable, output, currentObj, currentRow) { 

    if (!output) { var output = {}; }
    //console.log(input)
    maxDepth = Math.max(...splitArray(inputTable, 2));
    console.log("input", inputTable)

    for (d = 1; d <= maxDepth; d++) {
        console.log("iterating at depth", d);
        for (i = 1; i < inputTable.length; i++) { 
            if (input[i][1] === d) { 
getnode()
            }
        }
    }
    console.log(output)
    return output;
}

function row2object(inputRow, outputObj,currentObj,currentRow) {




 }

function set(input, output, key) {
    switch (output?.constructor) {
        case Object:
            return output[key] = input[key];
        case Array:
            return output.push(input[key]);
        default:
            return "Output UnIdentified"
    }
}

function updateAttributesNvalues(input, currentObj, currentRow) {
    header = input[0];
    rowAttributes = currentRow.slice(2);
    if (rowAttributes.length > 0) {
        row = {};
        rowAttributes.forEach((value) => {
            if (value !== "") {
                key = input[0][currentRow.indexOf(value)];
                row[key] = value;
            }
        });
        //console.log("row",row)
        return row;
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
