function array2Obj(table, outputObj) {
    if (!output) { var output = {}; }
    //console.log(input)
    maxDepth = Math.max(...splitArray(table, 2));
    console.log("input", table)

    for (d = 1; d <= maxDepth; d++) {
        console.log("iterating at depth", d)
        currentDepthRows = table.filter((row, value) => { if (row[1] === d) return row; });
      //  console.log(currentDepthRows)
         currentDepthObj={}
              currentDepthRows.forEach((currentRow, i) => {
                    currentObj = {};
                  currentObj[currentRow[3]] = updateAttributesNvalues(table, currentObj, currentRow);
                  children = {};
                  children = table.filter((row, value) => { if (row[2] === currentRow[3] && row[1] === currentRow[1] + 1) return row; });      
                  console.log(currentDepthObj)
                  currentObj = { ...array2Obj(children, currentObj) };
                  currentDepthObj[currentRow[3]] = { ...currentObj };          
        })
           
            console.log(currentDepthObj)
        output = { ...currentDepthObj };
    }

    console.log(output)
    return output;

}
function setData(input, output, key) {

    if (typeof output === 'Array') {
        output.push(input[key]);
    }
    if (typeof output === 'object' && input[key].value) {
       // console.log(input[key].name);
        output[input[key].name] = input[key].value;
    } 
    if (getEntityType(output).includes("HTML")) { 
        if (key === 'href' || key === 'src') {
            if (isValidUrl(input[key]) === false) {
                var absoluteUrl = toAbsolute(input[key]);
                output.setAttribute(key, absoluteUrl);
            } 
        } else {
            output.setAttribute(key, input[key]);
        }  
    }
    return output;
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
