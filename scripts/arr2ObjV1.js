//https://medium.com/dailyjs/rewriting-javascript-converting-an-array-of-objects-to-an-object-ec579cafbfc7
function updateAttributesNvalues(input, output, currentRow, currentObj) {
    header = input[0];
    rowAttributes = currentRow.slice(3);
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

function getChildren(input, output, currentRow, currentObj, d) { 
    if (!children) { var children = {}; }
    for (i = 1; i < input.length; i++) { 
//we can think of creating a 2d array of child Row and sending it for recusing to the main code.
        if (input[i][1] === d + 1 && input[i][2] ===currentRow[3]) {
           
            if (input[i][4] === 'Object') {
                childObj = {};
                // console.log("child found", input[i], "for", currentObj)
                children[input[i][3]] = updateAttributesNvalues(input, output, input[i], nwObj);
              //  input.splice(i, 1);
              //  console.log(input)
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
    }

   // console.log("Children",children);
    return children;
}



function arr2json2(input, output, currentRow) {
    if (!output) { var output = {}; }
    

    maxDepth = Math.max(...splitArray(input, 2));
    //   console.log("maxDepth", maxDepth)

    for (d = 1; d <= maxDepth; d++) {
        console.log("iterating at depeth",d)
        for (i = 1; i < input.length; i++) { 
           // console.log(input[i][1]);
            if (input[i][1] === d) { 
                currentRow = input[i];
                
                if (input[i][4] === 'Object') {
                    nwObj = {};
                   
                    nwObj = updateAttributesNvalues(input, output, currentRow, nwObj);
                   // console.log("NewObj", nwObj);
                 //   tmp = getChildren(input, output, input[i], nwObj, d)
                    nwObj = { ... getChildren(input, output, currentRow, nwObj, d)  };
                    console.log("NewObj with children", nwObj);
                    output[currentRow[3]] = nwObj;
                    console.log("output",output)

                } else if (input[i][4] === 'Array') {
                    nwObj = [];
                    console.log("Array Found ", input[i]);
                  //  nwObj.push(updateAttributesNvalues(input, output, input[i], nwObj));
                   // getChildren(input, output, input[i], nwObj, d);
                    console.log(nwObj);

                } else if (input[i][4] === 'String') {
                    // nwObj = [];
                    // nwObj.push(updateAttributesNvalues(input, output, input[i], nwObj));
                    // getChildren(input, output, input[i], nwObj, d);
                  console.log("String Found ",input[i]);

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
