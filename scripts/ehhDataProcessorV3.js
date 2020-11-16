
function createEntity(input, output, outputType, model2Process) { 
   console.log(input.tagName,model2Process);
 
    switch (outputType) {
        case 'json':
            var output = {
                tagName: input.tagName,
                name: input.name,
                attributes: iterateArrayEntity(input.attributes,[], arguments.callee.name),
                //childNodes: iterateArrayEntity(input.childNodes, [], arguments.callee.name),
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

    console.log("input", input, typeof input, input.length, isObjectArray_(input),isArray(input));

    for (i = 0; i <= input.length; i++) {
        
        if (input[i] != 'undefined') {
            console.log(input[i],iterateArrayResponse);
            iterateArrayResponse = setEntity(input[i], iterateArrayResponse);
}
        

    }
    console.log(iterateArrayResponse);
    return iterateArrayResponse;
}

function setEntity(input, output, outputType) {
    console.log(output, typeof output,);
    if (getEntityType(output) === 'Array') { 
        output.push(input);
    }
    return output;
}

function iterateObjectEntity(input, output, outputType) {
    if (!iterateObjResponse) { var iterateObjResponse = {}; }
    console.log("input",input, typeof input);
    for (key in input) { 
       console.log("foundKey", key, input[key], input[key].valueOf());

        if (key && input[key] != undefined && input[key] != 'function') { 
          console.log("foundKey", key, input[key], input[key].valueOf());

        }
    }


}



