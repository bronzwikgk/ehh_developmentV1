
const UserSchema = { name: { type: String, required: true }, email: { type: String, required: true }, password: { type: String, required: true }, date: { type: Date, default: Date.now } };
var schema = {
    "name": {
        "title": "Name",
        "description": "Nickname allowed",
        "type": "string"
    },
    "gender": {
        "title": "Gender",
        "description": "Your gender",
        "type": "string",
        "enum": [
            "male",
            "female",
            "alien"
        ]
    }
}
console.log(schema)
//helper Function to get the name protoNameof an entity
function getEntityType(entity) {
    return Object.getPrototypeOf(entity).constructor.name;//entity.__proto__.constructor.name
}

var row = new Array('id', 'd', 'parent');


function createRow(input, output, newRow, previousRow, id, d, key, options, callback) {
    // const name = new Array(output[0].length); 
    // console.log(name)
    var newRow = [id, d, previousRow];
   // fillEmptyDepth(newRow,output[0])
    console.log('createRow', newRow, output[0])

    return newRow;
}


function fillEmptyDepth(input, header) {
    for (j = 0; j < header.length - input.length; j++) {
        input.push("");
        //  console.log(input)
    }
    return input
}

function  obj2Arraytmp(input, output, currentRow, parent, id, d, key, options, callback) {
    if (!output) { var output = []; }
    key = key || "";
    if (!d) { var d = 0; }
    if (!id) { var id = 0; }
    if (!currentRow) { var currentRow = []; }
    if (!parent) {
        var parent = "root";
        //  var parentRow = objProcessor.createRow(input, output, parentRow, parent, id, d, key, options, callback);
        output.push(row);
        // console.log(output);
    };
    switch (getEntityType(input)) {

        case 'Object':
         //   console.log(id);
            id = id + 1;
          //  console.log(id);
       
            
            if (!input.type) { input["type"] = getEntityType(input); };

            console.log(parent,input)
            currentRow = createRow(input, output, currentRow, parent, id, d, key);
          //  console.log(currentRow,parent,key,input);
            iterateObj(input, output, currentRow, parent, d, id, key, options, obj2Array);
            output.push(currentRow);
            break;
        case 'Array':
           
            // input["parent"] = parent;
            // input["id"] = id; id++;
            // input["d"] = d;
            if (!input.type) { input["type"] = getEntityType(input); };
           // validateNupdate(key, output);
                 console.log("arrayFound", parent, currentRow, input, typeof input, key);
          // currentRow = createRow(input, output, currentRow, parent, id, d, key);
             
           // currentRow = createRow(input, output, [], parent, id, d, key);
            // console.log(currentRow,parent,key,input);
            iterateArray(input, output, currentRow, key, id, d, key, options, obj2Array);
           // output.push(currentRow);

         
            break;

        case 'String':
            // console.log(Object.getOwnPropertyNames(input));
         //   console.log("string found", parent, currentRow, input, typeof input, key);
            validateNupdate(key, output);
          
             updateRow(input, output, currentRow, parent, id, d, key, options, callback);

            // console.log(parent,input);
            //
            break;
        case 'Function':
            var func = input.toString();
            //  console.log(func)
              console.log("function found", parent, currentRow, input, key);
         //   currentRow = objProcessor.appendRow(input.toString(), output, currentRow, parent, id, d, key, options, callback);
            // console.log(Object.getOwnPropertyNames(input));
            // createRow(key, output, parent, id, d);
            break;
        case 'Boolean':
             console.log("boolean found", parent, currentRow, input, typeof input, key);
          //  currentRow = objProcessor.appendRow(input, output, currentRow, parent, id, d, key, options, callback);
            //console.log(Object.getOwnPropertyNames(input));
            // createRow(key, output, parent, id, d);

            break;



        // Anything 59 or below is failing
        default:
          //  console.log(getEntityType(input), input);
    }


    return output;
}



function obj2Array(input, output, currentRow, previousRow, id, d, key, options, callback) {
    if (!output) { var output = []; }
    key = key || "";
    if (!d) { var d = 0; }
    if (!id) { var id = 0; }
    if (!currentRow) { var currentRow = []; }
    if (!previousRow) {
        var previousRow = "root";
        //  var parentRow = objProcessor.createRow(input, output, parentRow, parent, id, d, key, options, callback);
        output.push(row);
        // console.log(output);
    };


    if (getEntityType(input) === "Object") {
        currentRow = createRow(input, output, currentRow, parent, id, d, key, options, callback);
      //  iterateObj(input, output, currentRow, previousRow, d, id, key, options, callback);
        output.push(currentRow);
     }










    return output;
 }

function iterateArray(input, output, currentRow, parent, id, d, key, options, callback) { 

    for (i = 0; i < input.length; i++) { 
        if (typeof input[i] === 'object') { 
  //  console.log("found Object in array")

        }
        

    }

return output
}
function iterateObj(input, output, currentRow, parent, d, id, key, options, callback) { 
 
        if (!input) return;
        if (!output) { var output = []; }
        key = key || "";
        if (!d) { var d = 0; }
        if (!id) { var id = 0; }
        if (!currentRow) { var currentRow = []; }
        // if (!parent) {
        //     var parent = "key";
        //     //  var parentRow = objProcessor.createRow(input, output, parentRow, parent, id, d, key, options, callback);
        //   //  output.push(row);
        //     // console.log(output);

        // };

        for (var key in input) {
            if ((typeof input[key]) == 'object' && input[key] !== null) {
               // console.log(key, input[key]);
                // input["parent"] = parent;
                // input["id"] = id;
                // input["d"] = d;
                if (!input.type) { input["type"] = getEntityType(input); };
               // validateNupdate(key, output)
              //  var newRow = createRow(input, output, newRow, parent, id, d, key, options, callback); id = id + 1;
               // console.log(newRow);
                callback(input[key], output, currentRow, key, id, d, key, options, callback)
             //  output.push(newRow);

            } else {
                
                callback(input[key], output, currentRow, key, id, d, key, options);
              //   console.log('leftover', currentRow, key, input[key])
               // validateNupdate(key, output);
               // updateRow(input, output, currentRow, parent, id, d, key, options, callback);
                

                //  output[key] = input[key];
            }
        }
        return output;
}
    
function updateRow(input, output, currentRow, parent, id, d, key, options, callback) {
    // console.log(key);
   // console.log(output[0], typeof key, "saving", input[key], currentRow, output[0].indexOf(key))

    // if (output[0].indexOf(key) === -1 && typeof input !== null && typeof input !== undefined) {
    //      console.log("found New Attribute header", key,input.toString());
    //     output[0].push(key);
       
    // }
    fillEmptyDepth(currentRow, output[0])
  currentRow.splice(output[0].indexOf(key), 1, input);
    console.log("updated Row", currentRow, "for key", key, output[0], output[0].indexOf(key))
    return currentRow;
    
}

//this function primarly check for the presence of a keys in any an array, if not present and options [ returns false and update and return position]
function validateNupdate(input, output) {

    if (output[0].indexOf(input) === -1 && typeof input !== null && typeof input !== undefined) {
     //   console.log("found New Attribute header", input,input.toString());
        output[0].push(input);
       // currentRow.splice(output[0].indexOf(key), 0, input);
    }

   // console.log(output[0])
    return output;
}



function processTest(e) {
    e.preventDefault();
    var output = obj2Array(schema, []);
    console.log(output)
    document.getElementById("output").innerText = JSON.stringify(output);



}

document.getElementById("get").addEventListener("click", processTest);
