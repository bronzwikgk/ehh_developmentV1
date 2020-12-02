//https://medium.com/dailyjs/rewriting-javascript-converting-an-array-of-objects-to-an-object-ec579cafbfc7
function updateAttributesNvalues(input, output, currentRow, currentObj) {
    header = input[0];
    rowAttributes = currentRow.slice(3);
    if (rowAttributes.length > 0) {

       rowAttributes.forEach((value) => {
            if (value !== "") {
                key = input[0][currentRow.indexOf(value)];
                currentObj[key] = value;
            }
        });
        //console.log("row",row)
        return currentObj;
    }
}
function getChildren(input, output, currentRow, currentObj, d) { 

    for (i = 1; i < input.length; i++) { 

        if (input[i][1] === d + 1 && input[i][2] ===currentRow[3]) {
           
            if (input[i][4] === 'Object') {
                nwObj = {};
               // console.log("child found", input[i], "for", currentObj)
                nwObj[input[i][3]] = updateAttributesNvalues(input, output, input[i], nwObj);
              //  getChildren(input, output, input[i], nwObj, d);
              //  console.log(nwObj);

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

//delete the
    return nwObj;
}
function arr2json2(input, output, currentRow) {
    if (!output) { var output = {}; }

    maxDepth = Math.max(...splitArray(input, 2));
    //   console.log("maxDepth", maxDepth)

    for (d = 1; d <= maxDepth; d++) {

        for (i = 1; i < input.length; i++) { 
           // console.log(input[i][1]);
            if (input[i][1] === d) { 

                if (input[i][4] === 'Object') {
                    nwObj = {}; 
                   
                    console.log("NewObj before children", nwObj, input[i][3], typeof input[i][3]);
                    nwObj = updateAttributesNvalues(input, output, input[i], nwObj);
                  
                   // getChildren(input, output, input[i], nwObj, d);
                    console.log("NewObj", nwObj);
                    
                   
                } else if (input[i][4] === 'Array') {
                    nwObj = [];
                  //  nwObj.push(updateAttributesNvalues(input, output, input[i], nwObj));
                   // getChildren(input, output, input[i], nwObj, d);
                    console.log(nwObj);

                } else if (input[i][4] === 'String') {
                    // nwObj = [];
                    // nwObj.push(updateAttributesNvalues(input, output, input[i], nwObj));
                    // getChildren(input, output, input[i], nwObj, d);
                 //   console.log("String Found ",input[i]);

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
