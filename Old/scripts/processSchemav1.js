//seems to have an issue with the root object.
//Need to add options.
//set has to be a seperate method
//Child index need to be created along with the path.
//https://adrianmejia.com/data-structures-for-beginners-graphs-time-complexity-tutorial/
var basic = {
    "form": {
        "name": {
            "lable": "Name",
            "description": "Nickname allowed",
            "type": "string"
        },
        "gender": {
            "title": "Gender",
            "description": "Your gender",
            "type": "string",
            "select": [
                "male",
                "female",
                "alien"
            ]
        }
    }
}


function getEntityType(entity) {
    return Object.getPrototypeOf(entity).constructor.name;//entity.__proto__.constructor.name
}
var row = new Array('ehhid', 'd', 'parent', 'entity', "typeOf", "path");

class processSchema { 

    static fillEmptyDepth(input, output) {
        // console.log("filling gap",input,output)
        for (var j = 1; j <= output[0].length - input.length; j++) {
            input.push("");
        }
        return input;
    }
    //this function primarly check for the presence of a keys in any an array, if not present and options [ returns false and update and return position]
    static validateNupdate(input, output) {

        if (output[0].indexOf(input) === -1 && typeof input !== null && typeof input !== undefined) {
            output[0].push(input);
        }
        // console.log(output[0], input);
        return output;
    }
    static createRow(input, output, previousNode, currentKey, d, path) {
        var id = output.length;
        var newRow = [id, d, previousNode[3], currentKey, input?.constructor.name, path];
        return newRow;
    }

    static updateRow(input, output, previousNode, currentNode, currentKey, d, path) {
        processSchema.fillEmptyDepth(currentNode, output)
        // console.log("current Key in updation",currentKey,input,currentNode,previousNode)
        //Adding the inputValue in the currentNode at the index of the currentKey, also deletes an empty space from before.
        currentNode.splice(output[0].indexOf(currentKey), 1, input);
        //  console.log("updated Row",currentNode)
        return currentNode;
    }
    static setEntity(input, output, key) { 
       var  outputType = getEntityType(output);
      //  console.log(outputType);
        switch (output?.constructor) { 
            case Object:
                output[key] = input[key];
            case Array:
                if (key) {
                    output.push(input[key])
                } else { 
                    output.push(input);
                }
            case String:
                default:
        }

        return output;
    }
    static Obj2(input, output, previousNode, currentNode, currentKey, d, path, parent) {
        if (!previousNode) {
            processSchema.setEntity(row, output);
            
            previousNode = output[0];
            //  parent = "root";
          //  console.log(previousNode);
            path = '';
        };
        if (!d) { var d = 0; }
        d = d + 1;
        switch (input?.constructor) {
            case Object:
              //  path = path + '.' + previousNode[3];
                processSchema.processObj(input, output, previousNode, currentNode, currentKey, d, path, previousNode);
            case Array:
           
              //  path = path + '.' + previousNode[3];
                processSchema.processArr(input, output, previousNode, currentNode, currentKey, d, path, previousNode);
            default:
            // return
        }
        //  console.log(output)
        return output;
    }
    static create(input,output){ 
        return createEle(input);
    }
    static processObj(input, output, previousNode, currentNode, currentKey, d, path, parent) {
        for (var key in input) {
            if (!input.hasOwnProperty(key)) continue;
            if (getEntityType(input[key]) === 'Object' || getEntityType(input[key]) === 'Array') {
                // console.log(path)
                var currentNode = processSchema.create(key, output);

                //var currentNode = processSchema.createRow(input[key], output, previousNode, key, d, path, previousNode[3]);
                processSchema.setEntity(currentNode, output);
                processSchema3(input[key], output);

            } else if (getEntityType(input[key]) === 'String' || getEntityType(input[key]) === 'Function' || getEntityType(input[key]) === 'Boolean') {
              //  processSchema.validateNupdate(key, output);
              //  processSchema.updateRow(input[key], output, previousNode, previousNode, key, d, path);
            } else {
                //   console.log("errand", key, input[key],typeof key)
            }
        }
        return output;
    }
    static processArr(input, output, previousNode, currentNode, currentKey, d, path, parent) {
        for (var i = 0; i < input.length; i++) {
            if (typeof input[i] === "object" && input[i] !== null) {
                if (typeof currentNode[3] === 'undefined') {
                    //      console.log(currentNode)   
                    
                    processSchema.updateRow(currentKey, output, previousNode, currentNode, 'root', d, path);
                    console.log("Finding Array Values", previousNode)
                } else {
                    console.log("Finding Array Values",currentNode)
                    var currentNode = processSchema.create(input[i][3], output);

                 //   var currentNode = processSchema.createRow(input[i], output, previousNode, previousNode[3] + i, d, path);
                    processSchema.setEntity(currentNode, output);
//                    output.push(currentNode);
                }
                processSchema3(input[key], output);

                //processSchema.Obj2(input[i], output, currentNode, currentNode, currentKey, d, path);

            } else {
                //creating Value Row for Array Parent
                var currentNode = processSchema.create(input[i][3], output);

                //var currentNode = processSchema.createRow(input[i], output, previousNode, input[i], d, path);
                processSchema.setEntity(currentNode, output);
           //     console.log(currentNode)
              //  output.push(currentNode);
            }
        }
        return output
    }
}

function processSchema3(input, output) {
    
    switch (input?.constructor) {
        case Object:
            processSchema.processObj(input, output);
        case Array:
            processSchema.processArr(input, output);
        case String:
            //  path = path + '.' + previousNode[3];
         //   processSchema.processObj(input, output);
        default:
        // return
    }

}
function createEle(elName) { 
    const nwEle = document.createElement(elName);
    return nwEle;
}

class process {
    static schema2(input, output) {
        

        // console.log(json.constructor.name)
        if (input.nodeType === 1) {
            var output = document.createElement(input.tagName);
            if (json.attributes) { process.iterateObj(input.attributes, output); }
            if (json.childNodes) { process.iterateArr(input.childNodes, output); }
        }
        if (input.nodeType === 3) {
            var output = document.createTextNode(input.textContent);
            if (input.childNodes) { process.iterateArr(input.childNodes, output); }
        }

        return output;
    }
    static iterateObj(obj, objResponse) {
        if (!obj) return;
        if (!objResponse) { var objResponse = {}; };
        for (var key in obj) {
            if ({}.hasOwnProperty.call(obj, key)) {
                //  console.log(key, obj[key],objResponse);
                objResponse = process.setData(obj, objResponse, key);
            }
        }
        return objResponse;
    }
    static iterateArr(arr, arrResponse) {
        if (!arr) return;
        if (!arrResponse) { var arrResponse = []; };
        for (var i = 0; i <= arr.length - 1; i++) {
            if (arr[i].nodeType != 'undefined') { //This is to check if the Array Element an HTML Element;
                if (arr[i].nodeType === Node.ELEMENT_NODE) {
                    if (getEntityType(arrResponse).includes("HTML")) {
                        arrResponse.appendChild(process.json2node(arr[i]));
                    } else {
                        arrResponse.push(process.node2json(arr[i]));
                    }
                    // arrResponse = process.setData(process.node2json(arr[i]),arrResponse); //Why is this not working
                }
                if (arr[i].nodeType === Node.TEXT_NODE) {
                    arrResponse.push(arr[i].textContent);
                    // arrResponse = process.setData(process.node2json(arr[i]),arrResponse); //Why is this not working
                }
            }
        }
        return arrResponse;
    }
    static setData(input, output, key) {

        if (typeof output === 'Array') {
            output.push(input[key]);
        }
        if (typeof output === 'object' && input[key].value) {
            // console.log(input[key].name);
            output[input[key].name] = input[key].value;
        }
        if (getEntityType(output).includes("HTML")) {
            if (key === 'href' || key === 'src') {
                if (isValidUrl(input[key]) === false) {
                    var absoluteUrl = toAbsolute(input[key]);
                    output.setAttribute(key, absoluteUrl);
                }
            } else {
                output.setAttribute(key, input[key]);
            }

        }


        return output;
    }
    static node2json(nodeEl) {
        //  var attributes = process.iterateObj(nodeEl.attributes, {})
        // var childNodes = process.iterateArr(nodeEl.childNodes, [])
        return {
            tagName: nodeEl.tagName,
            // childNodes,
            // attributes,
            attributes: process.iterateObj(nodeEl.attributes, {}),
            childNodes: process.iterateArr(nodeEl.childNodes, []),
            nodeType: nodeEl.nodeType
        };
    }
}
// function mapObject(obj, func, scope) {
//     var newObj = {}, key;
//     for (key in obj) {
//         if (obj[key] !== O[key]) {
//             newObj[key] = func.call(scope, obj[key], key, obj);
//         }
//     }
//     return newObj;
// }

// mapArray = function (arr, func, scope) {
//     var x = 0, xl = arr.length, newArr = new Array(xl);
//     for (; x < xl; ++x) {
//         newArr[x] = func.call(scope, arr[x], x, arr);
//     }
//     return newArr;
// };

