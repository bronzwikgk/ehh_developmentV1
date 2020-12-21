// To build our tree, we’re going to want to:

// Iterate through the data array
// Find the parent element of the current element
// In the parent element’s object, add a reference to the child
// If there is no parent for an element, we know that will be our tree’s “root” element
//https://github.com/alferov/array-to-tree/blob/master/index.js
//https://stackoverflow.com/questions/18017869/build-tree-array-from-flat-array-in-javascript
//https://github.com/iconifyit/30-Days-of-Algorithms/blob/master/src/05-array-to-tree.js

function child(entity,parent) {
    
    if (parent[3] == entity[2] && parent[1] - 1 == entity[1]) {
        console.log(entity,"is child of ",parent);
    } 
}


function buildTree(input) {

for(var i = 0;i<input.length;i++){

console.log(input[i])

}
    
}




function updateAttributesNvalues(input,currentRow) {
   console.log(currentRow)
    var header = input[0];
   
    var rowAttributes = currentRow.slice(6);
    if (rowAttributes.length > 0) {
        attri = {};
        rowAttributes.forEach((value) => {
            if (value !== "" && value !== 'undefined') {
                var key = input[0][currentRow.indexOf(value)];
                console.log(key,value);        
                attri[key] = value;
            }
        });
        console.log(attri);
        return attri;
    }
   
}

function arr2Obj(input) {

    var inputTable = [...input];
   
    d = inputTable[0].length;
    for (i = inputTable.length - 1; i >= 0; i--) {
        if (inputTable[i][1] == 1) {
            if (!outputObj) var outputObj = {};
            entity = inputTable[i];
            outputObj[entity[3]] = parentNode;
            continue;
        }
        for (j = i - 1; j >= 0; j--) {
            entity = inputTable[i];
            parent = inputTable[j];

            if (parent[3] == entity[2] && parent[1] + 1 == entity[1]) {

                if (!parentNode) var parentNode = {};
                parentNode[entity[3]] = entity[3];
                console.log(parentNode)
                break;

            }
        }
    }
    
    return outputObj;
}

function arr2Obj2(input) {
    inputTable = input;
    d = inputTable[0].length;
    for (i = inputTable.length - 1; i >= 0; i--) {
        if (inputTable[i][1] == 1) {
            if (!outputa) var outputa = {};
            entity = inputTable[i];
            outputa[entity[3]] = inputTable[i][d];
            continue;
        }
        for (j = i - 1; j >= 0; j--) {
            entity = inputTable[i];
            parent = inputTable[j];

            if (parent[3] == entity[2] && parent[1] + 1 == entity[1]) {

                //   console.log(inputTable[j][3], inputTable[i][2])
                // console.log("parent",parent,"entity",entity) 
                if (parent[4] == "Object") {
                    // console.log(inputTable[j], "entity")

                    if (!parent[d]) parent[d] = {};

                    parent[d][entity[3]] = entity[d];
                   // updateAttributesNvalues(inputTable, parent[d], entity);
                    //parent[d][entity[3]] = { ...,...entity[d] }
                   // parent[d][entity[3]] = 
                    
                   // console.log(parent);
                } else if (parent[4] == "Array") {
                    /// console.log(inputTable[j])
                    if (!parent[d]) parent[d] = [];
                    parent[d].unshift(entity[d]);
                    //   console.log(inputTable[j][5])
                } else if (parent[4] == "String") { 
               // console.log("Found Value",parent[4])
                }
                break;
           
            }
        }
    }

    return outputa;
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


//**
//* This method is used to convert an array with parent - child relationship into an array with tree structure
//* Receive an array with parent - child relationship as a parameter
//* Returns an array of tree structures
//** */
function translateDataToTree(data) {
    //Data without parent node
    let parents = data.filter(value => value.parentId == 'undefined' || value.parentId == null)

    //Data with parent node
    let childrens = data.filter(value => value.parentId !== 'undefined' && value.parentId != null)

    //Define the concrete implementation of transformation method
    let translator = (parents, childrens) => {
        //Traverse parent node data
        parents.forEach((parent) => {
            //Traversal of child node data
            childrens.forEach((current, index) => {
                //At this time, find a child node corresponding to the parent node
                if (current.parentId === parent.id) {
                    //Deep replication of sub node data is only supported here. For children's boots that don't know about deep replication, you can first learn about deep replication
                    let temp = JSON.parse(JSON.stringify(childrens))
                    //Let the current child node be removed from temp, which is the new data of child nodes. This is to make the number of iterations of child nodes less during recursion. The more layers of parent-child relationship, the more favorable
                    temp.splice(index, 1)
                    //Let the current child node be the only parent node to recursively find its corresponding child node
                    translator([current], temp)
                    //Put the found child node in the children attribute of the parent node
                    typeof parent.childrens !== 'undefined' ? parent.childrens.push(current) : parent.childrens = [current]
                }
            }
            )
        }
        )
    }

    //Call transformation method
    translator(parents, childrens)

    //Return the final result
    return parents
}