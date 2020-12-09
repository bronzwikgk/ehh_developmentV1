//https://www.youtube.com/watch?v=K7VnBuOlCI8
//https://medium.com/swlh/traversing-trees-breadth-first-and-depth-first-searches-with-javascript-316f23c9fe8f

//This function takes an array as input and extract a column as a return array
function splitArray(input, column) {
    var output = [];
    for (i = 1; i < input.length; i++) {
        output.push(input[i][1]);

    }

    //  console.log(output);
    return output;
}
class processArr { 
    static updateAttributesNvalues(input, output, currentRow) {
       var header = input[0];
        var rowAttributes = currentRow.slice(5);
        if (rowAttributes.length > 0) {
         rowAttributes.forEach((value) => {
                if (value !== "") {
                   var key = input[0][currentRow.indexOf(value)];
                    output[key] = value;
                }
            });
        }
    }
    static getChildren(input, output, currentRow) { 
       
        var childrenRows = input.filter((row, value) => {
            if (row[2] === currentRow[3] && row[1] === currentRow[1] + 1) {
                //console.log("delteing", inputTable[i], "currentObect", currentObj);
               // input.splice(row[1], 1);//slcing the child from the main table;
              //  console.log(input)
                return row;
            }
        });
        childrenRows.unshift(input[0]); //adding headers. 
        if (0 < childrenRows.length) { 
            processArr.iterateArr(childrenRows, output, currentRow[1]);
          // console.log("childrenOBJ",childrenObj);
        }
    
    }
    static createObject(input, output, currentRow) {
        if (currentRow[4] === 'Object') {
    //  console.log("creating Object for",currentRow)
            var newObj = {};
           processArr.updateAttributesNvalues(input, newObj, currentRow);
        }
        if (currentRow[4] === 'Array') {
            var newObj = [];
        }
  //  console.log("newobject",newObj,currentRow)
        return newObj;
    }

    static iterateArr(input, output, currentRow, d) {
      //  if (!parentObj) { var parentObj}
        var maxDepth = Math.max(...splitArray(input, 2));
        for (d = 1; d <= maxDepth; d++) {
          //  console.log("iterating at depth", d,);
            for (var i = 1; i < input.length; i++) {
                var entityType = input[i][4];
                if (input[i][1] === d && entityType === 'Object') {
              // console.log("found row", input[i]);
                    var currentObj = processArr.createObject(input, currentObj, input[i]);
                    processArr.getChildren(input, currentObj, input[i]);
                    console.log("found row", input[i], currentObj);
                     processArr.setEntity(currentObj, output, input[i][3]);
                    //   console.log(output);

                } if (input[i][1] === d && entityType === 'Array') {
                    // console.log("found row", input[i]);
                    var currentObj = processArr.createObject(input, currentObj, input[i]);
                  //  processArr.getChildren(input, currentObj, input[i]);
                   // console.log("found row", input[i], currentObj);
                    processArr.setEntity(currentObj, output, input[i][3]);
                    //   console.log(output);

                }
            }
        }
      //  console.log("out",output)
        return output;
    }
    static setEntity(input, output, key) {
        
        if (output?.constructor === Object) { 
            output[key] = input;
        } else if (output?.constructor === Array) {
            if (key) {
                output.push(input[key])
            } else {
                output.push(input);
            }
        }

        

        return output;
    }
    static setToPath(input, output, path) {
        var i;
        path = path.split('.');
        for (i = 0; i < path.length - 1; i++)
            output = output[path[i]];
        output[path[i]] = input;
        console.log(output);
    }
}

//this function taken a row and a table as in an input, if it find Children in next depth of the row Send back an array of children.
//else returns false/
function hasChildren(row, inputTable) {
    children = {};
    inputTable.shift()
    children = inputTable.filter((rowElement, i) => {
        // console.log("rowElement", rowElement,row)
        if (row[3] === rowElement[2] && rowElement[1] === row[1] + 1) {
            // inputTable.splice(rowElement[1], 1);
            // console.log("deleted ", rowElement,"from",inputTable)
            return rowElement;
        }
    });
    if (children.length > 0) {
        return children;
    } else {
        return false;
    }
    console.log("Children", children, "for",row);
}


function listToTree(data, options) {
    options = options || {};
    var ID_KEY = options.idKey || 'id';
    var PARENT_KEY = options.parentKey || 'parent';
    var CHILDREN_KEY = options.childrenKey || 'children';

    var tree = [],
        childrenOf = {};
    var item, id, parentId;

    for (var i = 0, length = data.length; i < length; i++) {
        item = data[i];
        id = item[ID_KEY];
        parentId = item[PARENT_KEY] || 0;
        // every item may have children
        childrenOf[id] = childrenOf[id] || [];
        // init its children
        item[CHILDREN_KEY] = childrenOf[id];
        if (parentId != 0) {
            // init its parent's children object
            childrenOf[parentId] = childrenOf[parentId] || [];
            // push it into its parent's children object
            childrenOf[parentId].push(item);
        } else {
            tree.push(item);
        }
    };

    return tree;
}