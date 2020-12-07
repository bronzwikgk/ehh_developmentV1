// An object consitis of below mentioned kind of entity
//an Object Entity with Typeof 'object' and getEntityType 'Object'.
// an Object Entity can have an object (Object / Array) inside it or a value.
//an Array Entity with Typeof 'object' and getEntityType 'Array'. 
// an 'Object' inside an array is a child of array, but then the array has values, they become it's values, with values/arrayname as attribute
// Keys inside an object with value [value cannot be an *Object] are attributes

var row = new Array('ehhid', 'd', 'parent', 'entityName', "typeOf");

function createRow(input, output, parent, id, d, key, options, callback) {
    id = output.length;
    var newRow = [id, d, parent,key,getEntityType(input)];
    return newRow;
}

function updateRow(input, output, currentRow, prevRow, id, d, key, options, callback) {
   // console.log("updating Current Row",currentRow, output[0],key)
    fillEmptyDepth(currentRow, output[0])
    currentRow.splice(output[0].indexOf(key), 1, input);
   // console.log("updated", currentRow, output[0])
    return currentRow;
}

function obj2Array(input, output, parentID, id, d, key, currentRow) {
    if (!output) { var output = [];}
    if (!d) { var d = 0; }
    d = d + 1;
    if (!parentID){
        var parentID = "root";
        output.push(row);
    };
    
    if (getEntityType(input) === 'Object') {
        console.log(Object.keys(input));
        for (var key in input) {
            if (!input.hasOwnProperty(key)) continue;
            if (getEntityType(input[key]) === 'Object') {
                //  console.log("Object Found", input[key], " in key", key, "parent", parentID,output)
                newRow = createRow(input[key], output, parentID, id, d, key);
                output.push(newRow);
                // console.log("Sending for recursion", input[key], output, key, id, d, key, newRow)
                obj2Array(input[key], output, key, id, d, key, newRow);
            } else if (getEntityType(input[key]) === 'Array') {
               // console.log("Array Found", input[key], " in key", key)
                newRow = createRow(input[key], output, parentID, id, d, key);
                output.push(newRow);
                // console.log("Sending for recursion", input[key], output, key, id, d, key, newRow)
                obj2Array(input[key], output, key, id, d, key, newRow);
            } else if (getEntityType(input[key]) === 'String' || getEntityType(input[key]) === 'Function' || getEntityType(input[key]) === 'Boolean') {
                newRow = createRow(input[key], output, parentID, id, d, key);
                output.push(newRow);
                
                validateNupdate(key, output);
             //   console.log(input[key], typeof input[key], input[key].toString(),output)
                updateRow(input[key].toString(), output, newRow, parentID, id, d, key);
              //  console.log("newRow", newRow)
              //   console.log("String Value Found", input[key], " in key", key, "parent", parentID, currentRow)
            } else {
               // console.log("errand", key, input[key],typeof key)
            }
        }
    } else if (getEntityType(input) === "Array") { 
        
        for (i = 0; i < input.length; i++) {
            if (typeof input[i] === "object" && input[i] !== null) {
            //    console.log("Found Object in Array", input[i]);
                newRow = createRow(input[i], output, parentID, id, d, key);
                output.push(newRow);
                obj2Array(input[i], output, key, id, d, key, newRow);
              
            } else {
               // console.log("Found value in Array", input[i], typeof input[i], parentID, input[i]);
                newRow = createRow(input[i], output, parentID, id, d, input[i]);
                output.push(newRow);
              //  obj2Array(input[i], output, parentID, id, d, key, currentRow);
            }
        }
     //   iterateArray(input, output,parentID,id,d,key,currentRow)   
    } else if (getEntityType(input) === 'String') { 
   // console.log("String Value Found", input, " in key", key, "parent", parentID, currentRow)
    }
   // console.log("String Value Found", input, " in key", key, "parent", parentID, currentRow)
    return output;
}

//helper Function to get the name protoNameof an entity
function getEntityType(entity) {
    return Object.getPrototypeOf(entity).constructor.name;//entity.__proto__.constructor.name
}

function fillEmptyDepth(input, header) {
//console.log("filling gap",input)
    for (j = 1; j <= header.length - input.length; j++) {
        input.push("");
    }
    return input
}

//this function primarly check for the presence of a keys in any an array, if not present and options [ returns false and update and return position]
function validateNupdate(input, output) {
    if (output[0].indexOf(input) === -1 && typeof input !== null && typeof input !== undefined) {
        output[0].push(input);    
    }
    return output;
}

function processTest(e) {
    e.preventDefault();
    console.log(sample)
    var outputArray = obj2Array(sample, []);
    console.log(outputArray)
    outputJson = array2Obj(outputArray);
 
   console.log(outputJson)
    document.getElementById("output").innerText = JSON.stringify(outputArray);
}

document.getElementById("get").addEventListener("click", processTest);
