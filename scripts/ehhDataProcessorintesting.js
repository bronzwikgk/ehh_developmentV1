//https://www.digitalocean.com/community/tutorials/js-tree-traversal
// create the nodeType constants if the Node object is not defined

class process {
    static hasProp(obj, prop) {
        return hasOwn.call(obj, prop);
    }
    static json2Array(json) {

        if (typeof json === "object") {
           // console.log(getEntityType(json), json);
            var json2ArrayResponse = process.iterateObj(json, []);
            
            // var output = document.createElement(json.tagName);
            // if (json.attributes) { process.iterateObj(json.attributes, output); }
            // if (json.childNodes) { process.iterateArr(json.childNodes, output); }
        }
        // if (json.nodeType === 3) {
        //     var output = document.createTextNode(json.textContent);
        //     if (json.childNodes) { process.iterateArr(json.childNodes, output); }
        // }
        
        return json2ArrayResponse;
    }   
    static iterateObj(obj, objResponse) {
        if (!obj) return;
        if (!objResponse) { var objResponse = {}; };
        for (var key in obj) {
            if ({}.hasOwnProperty.call(obj, key)) {
                 console.log(key, obj[key],objResponse);
            //    objResponse = process.setData(obj,objResponse,key);
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

                    if (getEntityType(arrResponse).includes("HTML")){
                        arrResponse.appendChild(process.json2Array(arr[i]));
                    } else {
                        arrResponse.push(process.array2Json(arr[i]));
                    }
                    
                    // arrResponse = process.setData(process.array2Json(arr[i]),arrResponse); //Why is this not working
                }
                if (arr[i].nodeType === Node.TEXT_NODE) {
                    arrResponse.push(arr[i].textContent);
                    // arrResponse = process.setData(process.array2Json(arr[i]),arrResponse); //Why is this not working
                }
            }

        }

        return arrResponse;
    }
    static setData(input, output,key) {

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
    static array2Json(nodeEl) {
      
        return {
            tagName: nodeEl.tagName,
            attributes: process.iterateObj(nodeEl.attributes, {}),
            childNodes: process.iterateArr(nodeEl.childNodes, []),
            nodeType : nodeEl.nodeType
        };
    }
}
