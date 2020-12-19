const UserSchema = { name: { type: String, required: true}, email: { type: String, required: true }, password: { type: String, required: true }, date: { type: Date, default: Date.now } };
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


console.log("input",schema);
var row = new Array('d', 'ehhId', 'parent','type','rowName')


//helper Function to get the name protoNameof an entity
function getEntityType(entity) {
    return Object.getPrototypeOf(entity).constructor.name;//entity.__proto__.constructor.name
}


function createRow(input, output, currentRow, parent, id, d, key, options, callback) {
    currentRow.push(id, d, parent, typeof input, key); 
    return currentRow;
}



function obj2Arr(input, output, currentRow, parent, id, d, key, options, callback) {
    
    if (!output) { var output = []; }
    if (!key) { var key = ""; }
    if (!d) { var d = 0; }
    if (!currentRow) { var currentRow = [];id++ }
   // id = id || 0;
  
  //  console.log(d,id)
    if (!parent) {
        var parent = "root";
        
        output.push(row);
        
    };
    console.log("input", getEntityType(input), input);

    switch (getEntityType(input)) {
        // If score is 90 or greater
        case 'Object':
          
          //  console.log(Object.entries(input))
           // console.log(id);
            //send to iteration with a new currentRow
            console.log("objectFound", parent, currentRow, input, typeof input, key)
           // validateHeaders =()
            //console.log(Object.getOwnPropertyNames(input));
            id++;
            console.log(id), id = id + 1;
           currentRow = createRow(input, output, [], parent, d, id, key);
            
             //console.log(currentRow,parent,key);
             
             iterateObj(input, output, currentRow, parent, d,id, key ,options, obj2Arr);
             output.push(currentRow);
            
            break;
        case 'Array':
            // console.log(Object.keys(input))
            //  console.log(Object.entries(input))
            // console.log(id);
            //send to iteration with a new currentRow
            console.log("ArrayFound", parent, currentRow, input, typeof input, key)
            //console.log(Object.getOwnPropertyNames(input));

            //currentRow = createRow(input, output, [], parent, d, id, key); d++;

            //console.log(currentRow,parent,key);

            //iterateObj(input, output, currentRow, parent, d, id, key, options, obj2Arr);
            //output.push(currentRow);

            break;
        
        case 'String':
           // console.log(Object.getOwnPropertyNames(input));
           //currentRow = appendRow(key,currentRow,currentRow,parent,id,d,input,output);
            console.log("string found", parent, currentRow,  input, typeof input,key);
           // console.log(parent,input);
       //
            break;
        case 'Function':
           console.log("function found", parent, currentRow,  input, typeof input, key);
           // currentRow = appendRow(key,currentRow,currentRow,parent,id,d,input,output);
            // console.log(Object.getOwnPropertyNames(input));
            // createRow(key, output, parent, id, d);
            break;
        case 'Boolean':
            console.log("boolean found", parent, currentRow, input, typeof input, key);
           // currentRow = appendRow(key,currentRow,currentRow,parent,id,d,input,output);
            //console.log(Object.getOwnPropertyNames(input));
            // createRow(key, output, parent, id, d);
            
            break;

       
        
        // Anything 59 or below is failing
        default:
            console.log(getEntityType(input));
    }
    
   // output.push([obj]);
    return output;
}


function appendRow(key,currentRow,currentRow,parent,d,id,input,output){
   // console.log(key);
    // console.log(typeof key,"saving",input, currentRow,id)
    if (output[0].indexOf(key) === -1 && typeof key !== null && typeof key !== undefined) {
           console.log("found New Attribute header", key);
          output[0].push(key);
        }
        currentRow.splice(output[0].indexOf(key),0,JSON.stringify(input))
}

function iterateObj(input, output,currentRow, parent, d,id, key,options, callback) {
    
    if (!input) return;
    for (var key in input) {
        if ({}.hasOwnProperty.call(input, key)) {
            parent = JSON.stringify(key);
         //   console.log(parent)
            callback(input[key], output, currentRow, parent, d,id, key,options, callback)
          
            
           

        }
    }
    
    
    
    return output;
 }











function recurse(obj) {
    for (var key in obj) { // works for objects and arrays 
        var item = obj[key];
        if (typeof item === "object")
            recurse(item);
        else
            console.log(key, item);
    }
}



function set() { 






}
function iterateArray() { 








}



function processTest(e) {
    e.preventDefault();
    var output = obj2Arr(UserSchema, []);
    console.log(output)
    document.getElementById("output").innerText = JSON.stringify(output);



}

document.getElementById("get").addEventListener("click", processTest);
