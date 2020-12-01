// An object consitis of below mentioned kind of entity
//an Object Entity with Typeof 'object' and getEntityType 'Object'.
// an Object Entity can have an object (Object / Array) inside it or a value.
//an Array Entity with Typeof 'object' and getEntityType 'Array'. 
// an 'Object' inside an array is a child of array, but then the array has values, they become it's values, with values/arrayname as attribute
// Keys inside an object with value [value cannot be an *Object] are attributes


function array2Json2(inputTable, output) {
   // maxDepth = max(inputTable[][1]);
    if (!output) { var output = {}; }
    for (i = 1; i < inputTable.length; i++) { 
        rwObject = getRow(inputTable, output, inputTable[i], i);
        children = getChild(inputTable, output, inputTable[i], rwObject)
        console.log(rwObject);
       // console.log(rwObject)
    }
}
 
function getRow(input, output, currentRow, nwRowObject) {
    if (!nwRowObject) { var nwRowObject = {}; }
    children = {}
    nwRowObject = new Object();
  //  nwRowObject[currentRow[3]] = getAttributes(input, output, currentRow, nwRowObject);
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
          
        }
    });
   console.log("children", children);
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
