//https://www.youtube.com/watch?v=K7VnBuOlCI8
//https://medium.com/swlh/traversing-trees-breadth-first-and-depth-first-searches-with-javascript-316f23c9fe8f
//https://www.youtube.com/watch?v=cVTbdo17mYs
//https://github.com/beforesemicolon/tutorials-files/blob/master/tree-generic.js
var array2d = [['id', 'd', 'parent', 'entity', 'type'],
    [1, 1, 'root', 'quiz', 'Object'],
    [2, 2, 'quiz', 'sport', 'Object'],
    [3, 3, 'sport', 'q1', 'Object'],
    [4, 4, 'q1', 'options', 'Array'],
    [5, 5, 'options', 'New York Bulls', 'String'],
    [6, 5, 'options', 'Los Angeles Kings', 'String'],
    [7, 5, 'options', 'Golden State Warriros', 'String'],
    [8, 5, 'options', 'Huston Rocket', 'String'],
    [9, 2, 'quiz', 'maths', 'Object'],
    [10, 3, 'maths', 'q1', 'Object'],
    [11, 4, 'q1', 'options', 'Array'],
    [12, 5, 'options', 10, 'String'],
    [13, 5, 'options', 11, 'String'],
    [14, 5, 'options', 12, 'String'],
    [15, 5, 'options', 13, 'String'],
    [16, 3, 'maths', 'q2', 'Object'],
    [17, 4, 'q2', 'options', 'Array'],
    [18, 5, 'options', 1, 'String'],
    [19, 5, 'options', 2, 'String'],
    [20, 5, 'options', 3, 'String'],
    [21, 5, 'options', 4, 'String']]

function arr2Obj(input, output, previousNode, previvousRow) {
    previousNode = {};
    previvousRow = [];
    console.log(input)
    for (i = 0; i < input.length; i++) {
        if (input[i][2] === 'root') {
            console.log(input[i]);
            node = {};
            node = input[i][3];
            output[node] = node;
            previousNode = node;
            previvousRow = input[i];
            
            
            var tmp = getChildren(input, node, previvousRow)
           // console.log("tmp", tmp);
         
        }
        // if (input[i][2] === previvousRow[3] && input[i][1] === previvousRow[1] +1 )
        //     console.log("childFound", input[i], "for", node);
        // }
        
    
    }

    console.log(output);
    return output;
}
//{"quiz":{"sport":{"q1":{"question":"Which one is correct team name in NBA?","answer":"Huston Rocket","options":["New York Bulls","Los Angeles Kings","Golden State Warriros","Huston Rocket"]}},"maths":{"q1":{"question":"5 + 7 = ?","answer":"12","options":["10","11","12","13"]},"q2":{"question":"12 - 8 = ?","answer":"4","options":["1","2","3","4"]}}}}



function getChildren(input, output, currentRow, currentNode) {

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
        var childrenObj = arr2Obj(childrenRows, output, currentRow[1], currentNode);
         console.log("childrenOBJ",childrenObj);
    }
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