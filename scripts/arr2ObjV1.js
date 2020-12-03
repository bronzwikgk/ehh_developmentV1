//https://medium.com/dailyjs/rewriting-javascript-converting-an-array-of-objects-to-an-object-ec579cafbfc7
function updateAttributesNvalues(input, output, currentRow, currentObj) {
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

function getChildren(input, output, currentRow, currentObj, d,childrenRows) { 
    if (!children) { var children = {}; }
    for (i = 1; i < childrenRows.length; i++) { 
//we can think of creating a 2d array of child Row and sending it for recusing to the main code.       
            if (childrenRows[i][4] === 'Object') {
                childObj = {};
                 console.log("child found", input[i], "for", currentObj)
                currentObj[childrenRows[i][3]] = updateAttributesNvalues(childrenRows, output, childrenRows[i], nwObj);
              //  console.log("before splice",input[i]);
                input.splice(i, 1);
              //  console.log("After splice",input[i])
              //  children[currentRow[3]] = { ...getChildren(input, output, currentRow, nwObj, d) };
             
            } else if (input[i][4] === 'Array') {
                nwObj = [];
              //  nwObj.push(updateAttributesNvalues(input, output, input[i], nwObj));
              //  getChildren(input, output, input[i], nwObj, d);
              //  console.log(nwObj);

            } else if (input[i][4] === 'String') {
                // nwObj = [];
                // nwObj.push(updateAttributesNvalues(input, output, input[i], nwObj));
                // getChildren(input, output, input[i], nwObj, d);
              //  console.log("String Found ", input[i]);
            }
     
    }

   // console.log("Children",children);
    return currentObj;
}

function arr2json2(input, output, currentRow,currentObj,d,children) {
    if (!output) { var output = {}; table = input; }
   //console.log(input)
    maxDepth = Math.max(...splitArray(input, 2));
    console.log("input", input)

    for (d = 1; d <= maxDepth; d++) {
        
        console.log("iterating at depth", d)
        
        for (i = 1; i < input.length; i++) { 
           // console.log(input[i][1]);
            if (input[i][1] === d) { 
                currentRow = input[i];
                
                if (input[i][4] === 'Object') {
                    nwObj = {};
                    nwObj[currentRow[3]] = updateAttributesNvalues(input, output, currentRow, nwObj);
                    console.log("NewObj", nwObj);
                    children = table.filter((row, value) => { if (row[2] === currentRow[3] && row[1] === currentRow[1] + 1) return row;} );
                            
                   console.log("children", children);
                   // nwObj = { ...arr2json2(children, nwObj, currentRow, nwObj, d,children)}
                    output[currentRow[3]] = { ... nwObj[currentRow[3]]}
                    console.log("output", output)
                } else if (input[i][4] === 'Array') {
                    nwObj = [];
                 //   console.log("Array Found ", input[i]);
                  //  nwObj.push(updateAttributesNvalues(input, output, input[i], nwObj));
                   // getChildren(input, output, input[i], nwObj, d);
                    console.log(nwObj);

                } else if (input[i][4] === 'String') {
                    // nwObj = [];
                    // nwObj.push(updateAttributesNvalues(input, output, input[i], nwObj));
                    // getChildren(input, output, input[i], nwObj, d);
                 // console.log("String Found ",input[i]);

                }
            }
          

        }



    }
    console.log(output)
    return output;
}

//This function takes an array as input and extract a column as a return array
function splitArray(input,column) { 
     var output = [];
    for (i = 1; i < input.length; i++) {
        output.push(input[i][1]);
       
    }

  //  console.log(output);
    return output;
}


function createRowObject(input, output, currentRow) { 
   
    if (currentRow[4] === 'Object') {
        nwObj = {};
       
    }
    if (currentRow[4] === 'Array') {
        nwObj = [];
    }

    return nwObj;
}
