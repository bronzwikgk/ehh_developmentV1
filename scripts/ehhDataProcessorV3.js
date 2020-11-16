
function createEntity(input, output, outputType, model2Process) { 
   console.log(input.tagName,model2Process);
 
    switch (outputType) {
        case 'json':
            var output = {
                tagName: input.tagName,
                name: input.name,
                attributes: iterateObjectEntity(input.attributes,{}, arguments.callee.name),
               // childNodes: iterateArrayEntity(input.childNodes, [], arguments.callee.name),
                //  parent: nodeEl.parentNode.tagName,
                nodeType: input.nodeType,
                nodeValue: input.nodeValue
            }
            break;
        case 'html':
            output = 'Monday';
            break;
        case 'array':
            output = 'Tuesday';
            break;
       
        default:
            output = 'Invalid day';
    }
    console.log(output); // Tuesday
    return output;;
}

function iterateArrayEntity(input, iterateArrayResponse, outputType) {
   // console.log("iterateArrayResponse",iterateArrayResponse);
    if (!iterateArrayResponse) { var iterateArrayResponse = []; }
       console.log("input", input, typeof input, input.length, isObjectArray_(input), isArray(input));
       for (i = 0; i <= input.length; i++) {
        if (typeof input === 'object') {
            var key = {};
            if (input[i] != 'undefined' && typeof (input[i]) != "undefined") {
             //  console.log(input[i],iterateArrayResponse);
                key[input[i].name] = input[i].value;
               // console.log("temp", temp);
                iterateArrayResponse = setEntity(input, iterateArrayResponse, key);
            }
        }
    }
    console.log("iterateArrayResponse",iterateArrayResponse);
    return iterateArrayResponse;
}

function setEntity(input, output,key ,outputType) {
   // console.log(output, typeof output,);
    if (getEntityType(output) === 'Array') { 
        output.push(key);
    }




    return output;
}

function iterateObjectEntity(input, iterateObjResponse, outputType) {
    if (!iterateObjResponse) { var iterateObjResponse = {}; }
  //  console.log("input", input, typeof input, input.length, isObjectArray_(input), isArray(input));
    for (key in input) { 
     //  console.log("foundKey", key, input[key], input[key].valueOf());
        if (key && input[key] != undefined && input[key] != 'function' && typeof (input[key].value) != "undefined") { 
       
            console.log("foundKey", key, input[key], input[key].valueOf());
            iterateObjResponse = setEntity(input, iterateObjResponse,key)
        }
    }

    return iterateObjResponse;
}



