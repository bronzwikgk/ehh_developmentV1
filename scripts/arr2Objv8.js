




function arr2(input, output, maxDepth) {
    
    for (let index = 0; index < maxDepth ; index++) {
        for (const currentRow of input) {
            if (currentRow[0] === 'ehhid') {
                header = currentRow;
                continue;
            }
            if (currentRow[1] === index + 1 && index + 1 === 1) {
                switch (currentRow[4]) {
                    case 'Object':
                        console.log(index, currentRow)

                        output[currentRow[3]] = {};
                        break;
                    case 'Array':
                        console.log(index, currentRow)

                        output[currentRow[3]] = [];
                        break;
                    case 'String':
                        console.log(index, currentRow)

                        break;
                    
                }
            } else if (currentRow[1] === index + 1) {
              //  console.log(index,currentRow)
                let path = currentRow[5];
                let splitPathArr = path.split('.');
                splitPathArr.splice(0, 2)
                appendInObject(currentRow, splitPathArr, output, {});
            }
        }
    }
    return output;
}

function appendInObject(currentRow, path, output, parentObj) { 
    if (path.length < 1) {
        switch (currentRow[4]) {
            case 'Object':
                output[currentRow[3]] = {};
                if (currentRow[6]) {
                    for (let index = 6; index < currentRow.length; index++) {
                        output[[currentRow[3]]][header[index]] = currentRow[index];
                    }
                }
                break;
            case 'String':
                if (Array.isArray(parentObj[currentRow[2]])) {
                    output.push(currentRow[3] || "")
                }
                break;
            case 'Array':
                output[currentRow[3]] = [];
                break;
        }
        return;
    } else {
        
        let objKey = path[0];
       // console.log(currentRow,objKey)
        path.splice(0, 1);
        appendInObject(currentRow, path, output[objKey], output);
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

//this function takes in a 2D array and a the columnNumber whose maximum value has to be returnd.
function getMax(inputTable, depthColumn) { 
    return Math.max(...splitArray(inputTable, depthColumn));
}


