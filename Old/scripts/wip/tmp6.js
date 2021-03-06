

function array2Json2(inputTable, output) {
   // maxDepth = max(inputTable[][1]);

    if (!output) { var output = {}; }
    for (i = 1; i < inputTable.length; i++) { 
       // console.log("here");
        rwObject = getRow(inputTable, output, inputTable[i], i);
       // console.log("rwObject",rwObject);
        children = getChild(inputTable, output, inputTable[i], rwObject)
        console.log("children",children)
      
    }
}
 

function getRow(input, output, currentRow, nwRowObject) {
    if (!nwRowObject) { var nwRowObject = {}; }
    children = {}
    nwRowObject = new Object();
  //  console.log(nwRowObject);
    attri = getAttributes(input, output, currentRow, nwRowObject);
  
    if (typeof attri !== 'undefined') { 
        nwRowObject[currentRow[3]]= attri
    }
  //  console.log(nwRowObject);
    return nwRowObject;
}


function getChild(input, output, currentRow, parentRow) {
    child = {};
    children = input.forEach((row, value) => {         // console.log("searchign child for ", currentRow[3], "at depth", currentRow[1], element, value)
        if (row[2] === currentRow[3] && row[1] === currentRow[1] + 1) {
         // console.log("Found child for ", currentRow[3], "at depth", currentRow[1], row[3])
            children[row[3]] = getRow(input, output, row);
            console.log("children", children);
        }
    });
  
    return children;
}


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


/*MATRIX TO JSON*/
let jsonData = [];
matrix.forEach(row => {
    let myObject = {}
    keys.forEach((key, i) => myObject[key] = row[i]);
    jsonData.push(myObject);
});
let myJsonData = JSON.stringify(jsonData);
console.log(myJsonData);