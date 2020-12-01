
function getAttributes(input, output, currentRow, row) {
    header = input[0];

    rowAttributes = currentRow.slice(4);
    if (rowAttributes.length > 0) {
        attr = {}
        //  console.log(rowAttributes)
        rowAttributes.forEach((value) => {
            if (value !== "") {
                key = input[0][currentRow.indexOf(value)];
                attr[key] = value;
            }
        });
        //   console.log(attr)
        return attr;
    }
}


function getRow(input, output, currentRow, nwRowObject) {
    if (!nwRowObject) { var nwRowObject = {}; }
    children = {}
    nwRowObject = new Object();
    //  console.log(nwRowObject);
    attri = getAttributes(input, output, currentRow, nwRowObject);

    if (typeof attri !== 'undefined') {
        nwRowObject[currentRow[3]] = attri
    }
    rwChild = getChild(input, output, currentRow);
    nwRowObject = { ...rwChild }
    //  console.log(nwRowObject);
    return nwRowObject;
}


function arr2json(input,output,currentRow) {
    if (!output) { var output = {}; }
   
    maxDepth = Math.max(...splitArray(input, 2));
 //   console.log("maxDepth", maxDepth)
 
    for (d = 1; d <= maxDepth; d++){
        const currentDepth = input.filter(row => row[1] === d);
        currentDepth.forEach(element => {
            rwObject = getRow(input, output, element);
            console.log(rwObject,"at depth",d);
        });
    }

}


function getChild(input, output, currentRow, parentRow) {
    child = {};
    children = input.forEach((row, value) => {
     //   console.log("searchign child for ", currentRow[3], "at depth", currentRow[1], row, value)
        if (row[2] === currentRow[3] && row[1] === currentRow[1] + 1) {
          //  console.log("Found child for ", currentRow[3], "at depth", currentRow[1], row[3])
            child[row[3]] = getRow(input, output, row);  
        }
    });
    
// console.log("children", child);
    return child;
}


//This function takes an array as input and extract a column 
function splitArray(input,column) { 
     var output = [];
    for (i = 1; i < input.length; i++) {
        output.push(input[i][1]);
       
    }

  //  console.log(output);
    return output;
}