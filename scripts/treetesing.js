var data = [
    { "id": 2, "name": "first level 1", "pid": 0 },
    { "id": 3, "name": "second level 1", "pid": 2 },
    { "id": 5, "name": "third level 1", "pid": 4 },
    { "id": 100, "name": "third level 2", "pid": 3 },
    { "id": 6, "name": "third level 2", "pid": 3 },
    { "id": 601, "name": "third level 2", "pid": 6 },
    { "id": 602, "name": "third level 2", "pid": 6 },
    { "id": 603, "name": "third level 2", "pid": 6 }
];
// Array to tree structure data(the principle is to set the id to the key value, and then through pid to find whether the key is the same, the same is the child data of this data)
function arrayToJson(treeArray) {
    var r = [];
    var tmpMap = {};
    for (var i = 0, l = treeArray.length; i < l; i++) {
        // The id of each data as the key value of obj, the data is stored as a value into a temporary object
        tmpMap[treeArray[i]["id"]] = treeArray[i];
    }
    console.log('tmpMap', tmpMap)
    for (i = 0, l = treeArray.length; i < l; i++) {
        var key = tmpMap[treeArray[i]["pid"]];
        console.log('key', key)
            // Cycle the pid of each piece of data, if this temporary object has this key value, it means that the data corresponding to this key has children, need to push into
            // If this item of data belongs to which child of the data
        if (key) {
            // If this data has no children
            if (!key["children"]) {
                key["children"] = [];
                key["children"].push(treeArray[i]);
                // If this data has children
            } else {
                key["children"].push(treeArray[i]);
            }
        } else {
            // If there is no such Key value, it means that no data can be found, it means there is no parent, directly placed in the outermost layer
            r.push(treeArray[i]);
        }
    }
    return r
}

function test() { 
    arrayToJson(data);

}