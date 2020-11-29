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

//helper Function to get the name protoNameof an entity
function getEntityType(entity) {
    return Object.getPrototypeOf(entity).constructor.name;//entity.__proto__.constructor.name
}

var row = new Array('id', 'd', 'parent');
class objProcessor { 

 
    static createRow(input, output, currentRow, parent, id, d, key, options, callback) { 
        if (!currentRow) { var currentRow = []; }

        output[0].forEach((element, index) => {
            
            currentRow.push(input[output[0][index]]);
            
        });
      //  console.log('createRow',currentRow)
        return currentRow;
    }

    static iterateObj(input, output, currentRow, parent, id, d, key, options, callback) {
        if (!input) return;
        for (var key in input) {
            if ({}.hasOwnProperty.call(input, key)) {
               var tmp =  callback(input[key], output, currentRow, JSON.stringify(key), d, id, key, options, callback)
            }
        }

        return output;
    }
   
    static obj2Array(input, output, currentRow, parent, id, d, key, options, callback) { 
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
                console.log(id);
                id = id + 1;
                console.log(id);
                //console.log("objectFound", parent, currentRow, input, typeof input, key);
                input["parent"] = parent;
                input["id"] = id; id++;
                input["d"] = d;
                if (!input.type) { input["type"] = getEntityType(input); };
                
              //  console.log(input),
                    currentRow = objProcessor.createRow(input, output, [], parent, id, d, key);
               // console.log(currentRow,parent,key);

                objProcessor.iterateObj(input, output, currentRow, parent, d, id, key, options, objProcessor.obj2Array);
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
                console.log("string found", parent, currentRow, input, typeof input, key);
                currentRow = objProcessor.appendRow(input, output, currentRow, parent, id, d, key, options, callback);
            
                // console.log(parent,input);
                //
                break;
            case 'Function':
                var func = input.toString();
                console.log(func)
                console.log("function found", parent, currentRow, input, key);
                currentRow = objProcessor.appendRow(func, output, currentRow, parent, id, d, key, options, callback);
                // console.log(Object.getOwnPropertyNames(input));
                // createRow(key, output, parent, id, d);
                break;
            case 'Boolean' :
               // console.log("boolean found", parent, currentRow, input, typeof input, key);
                currentRow = objProcessor.appendRow(input, output, currentRow, parent, id, d, key, options, callback);
                //console.log(Object.getOwnPropertyNames(input));
                // createRow(key, output, parent, id, d);

                break;



            // Anything 59 or below is failing
            default:
             //   console.log(getEntityType(input));
        }
        

        return output;
    }

    static appendRow(input, output, currentRow, parent, id, d, key, options, callback) {
        // console.log(key);
        // console.log(typeof key,"saving",input, currentRow,id)
        if (output[0].indexOf(key) === -1 && typeof input !== null && typeof input !== undefined) {
            console.log("found New Attribute header", key,input.toString());
            output[0].push(key);
            currentRow.splice(output[0].indexOf(key), 0, input);
        }
       
        console.log(currentRow)
    }


}


function processTest(e) {
    e.preventDefault();
    var output = objProcessor.obj2Array(UserSchema, []);
    console.log(output)
    document.getElementById("output").innerText = JSON.stringify(output);



}

document.getElementById("get").addEventListener("click", processTest);
 