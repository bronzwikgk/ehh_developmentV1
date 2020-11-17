//referance Code https://github.com/azaslavsky/domJSON/blob/master/src/domJSON.js
//https://github.com/moappi/json2html/blob/master/json2html.js
//https://melaka.aspirethemes.com/ sample
//https://github.com/Jxck/html2json/blob/master/src/html2json.js
//This function set's a key from the subject to entity
function set(output, input, key) {

    if (!getEntityType(output).includes("HTML")) {
        output[input[key].name] = input[key].value;
    }
    //console.log(input, getEntityType(input),output);

    if (getEntityType(output).includes("HTML")) {
        // console.log(input, output);       
        if (key === 'href' || key === 'src') {

            if (isValidUrl(input[key]) === false) {
                //console.log("link found", element, key);
                var absoluteUrl = toAbsolute(input[key]);
                //  console.log(absoluteUrl);
                output.setAttribute(key, absoluteUrl);
                //element.removeAttribute(key);
                //console.log(element);
            } else {
               // console.log(key, input[key]);
                output.setAttribute(key, input[key]);

            }
        } else {
//            console.log(key, input[key]);
            output.setAttribute(key, input[key]);

             }

    }
    return output;
}
function iterarateObj(input, output, previousSW) {
    if (!output) { var output = {}; }
    for (var key in input) {
        if (input[key] && input[key].value !== undefined) {
            output = set(output, input, key);
        }
        if (previousSW === 'createJson2Html') {
            output = set(output, input, key);
        }
    }

    return output;
}
function iterateArray(input, output, previousSW) {
    // console.log(entity);
    if (!output) { var output = []; }
    input.forEach(function (element, index) {
        // console.log(input[index]);
        if (previousSW === 'createJsonFromNode') {
            if (input[index].nodeType === Node.ELEMENT_NODE || input[index].nodeType === Node.TEXT_NODE) {
                output.push(createJsonFromNode(input[index]));
            }
        }

        if (previousSW === 'createJson2Html') {
            // console.log("fromCreateJson  inside", output, key,input[key]);
            output.appendChild(createJson2Html(input[index]));
            // output = set(output, input, key);
        }
    });
    return output;
}

function ehhCreate(input, output, outputType ,previousSW) {
    console.log("Createing ", isObject_(output), "from", isObject_(input), typeof input, getEntityType(input));
    
    switch (outputType) {
        case 'json':
            var output = {
                tagName: input.tagName,
                name: input.name,
                attributes: iterarateObj(input.attributes, output, arguments.callee.name),
                childNodes: iterateArray(input.childNodes, output, arguments.callee.name),
                //  parent: nodeEl.parentNode.tagName,
                nodeType: input.nodeType,
                nodeValue: input.nodeValue
            }
            break;
        case 'html':
            ehhCase = 'Monday';
            break;
        case 'array':
            ehhCase = 'Tuesday';
            break;
        case 4:
            ehhCase = 'Wednesday';
            break;
        case 5:
            ehhCase = 'Thursday';
            break;
        case 6:
            ehhCase = 'Friday';
            break;
        case 7:
            ehhCase = 'Saturday';
            break;
        default:
            ehhCase = 'Invalid day';
    }
    console.log(output); // Tuesday


    return output;;
}

function createJsonFromNode(nodeEl) {
    // console.log(nodeEl.tagName.toLowerCase());
    var node = {
        tagName: nodeEl.tagName,
        name: nodeEl.name,
        attributes: iterarateObj(nodeEl.attributes, node, arguments.callee.name),
        childNodes: iterateArray(nodeEl.childNodes, node, arguments.callee.name),
        //  parent: nodeEl.parentNode.tagName,
        nodeType: nodeEl.nodeType,
        nodeValue: nodeEl.nodeValue
    }
    return node;
}

function createJson2Html(input) {
    //console.log(entity);
    if (input.nodeType === 1) {
        var output = document.createElement(input.tagName);
        //   htmlResponse.setAttribute(entity.parent, entity.parent.value)
        // console.log("HTML Attributes",input.attributes, output);
        //  sw = arguments.callee.name;
        iterarateObj(input.attributes, output, arguments.callee.name);
        //
        if (input.childNodes) {

            iterateArray(input.childNodes, output, arguments.callee.name);
            // console.log(temp);
            // htmlResponse.appendChild(temp);
        }
    }
    if (input.nodeType === 3) {
        //  console.log(entity);
        var output = document.createTextNode(input.nodeValue);
    }

    return output;
}