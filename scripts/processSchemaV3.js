
var formElements = ["button", 'datalist', "div", 'fieldset', "form", "input", "label", 'legend', 'li', 'meter', 'optgroup', "option", 'output', 'progress', "select", "span", "textarea", "ul"];
var attributes = ["type","title","class","id","name","value","required"]



class processSchema { 

    static schema2(input, output,key,value) {
        if (!Object.keys(input).length) return;// if there's no keys, then the call returns undefined
        switch (input?.constructor) {
            case Object:
                processSchema.processObj(input, output,key,value);
            case Array:
                processSchema.processArr(input, output,key,value);
            case String:
            //processSchema.processString(input, output);
            default:
            // return
        }
        return output;
    }
    static create(input, output,key,value) { 

        if (getEntityType(output).includes("HTML")) {

            if (formElements.indexOf(input) < 0) { //check if the input is a formElement by crosschecking in the define array.
               // console.log("createRequest for ", input, output, value, formElements.indexOf(input))
               var nwEle = document.createElement("div");

               // nwEle.className = input;
              // console.log("divElement", nwEle);
            } else {
               var nwEle = document.createElement(input);
               // console.log("formElement", nwEle);
            }

            if(attributes.indexOf(input)>0){
            output.setAttribute(key,value);
                //console.log("attrbutes found",key,value)

            }
            if(typeof value === 'string') {
                var content = document.createTextNode(value);
                nwEle.appendChild(content);
              //  nwEle.setAttribute("value", value);
                //  console.log("setting Attributes", key, input, "in", output)
               // output.setAttribute(input, value);
            }
            return nwEle;
        }
    }
    static setAttributes(input, output, key) { 

    }

    static appendChild(input, output, key ,value) { 
        
        if (getEntityType(output).includes("HTML")) {

            if (getEntityType(input).includes("HTML") && typeof value !== 'string') {
                output.appendChild(input);
            }
            if (getEntityType(input).includes("String") && typeof value !== 'string') {
             //   output.appendChild(currentNode);
            }
           



        }





    }

    static processObj(input,output,key,value) { 

        for (var key in input) {
            if (getEntityType(input[key]) === 'Object') {  
              //  console.log("object", key, input[key])
                var currentNode = processSchema.create(key, output);
               
                processSchema.schema2(input[key], currentNode,key,input[key]);
               
                processSchema.appendChild(currentNode, output);

            } else if (getEntityType(input[key]) === 'Array') {  
                processSchema.schema2(input[key], currentNode,key,input[key]);
                //var currentNode = processSchema.create(key, output,key,input[key]);
                 processSchema.appendChild(currentNode, output);
            }else if (getEntityType(input[key]) === 'String' || getEntityType(input[key]) === 'Function' || getEntityType(input[key]) === 'Boolean') {  
                
                    var currentNode = processSchema.create(key, output,key,input[key]);
                    processSchema.appendChild(currentNode, output);
            } else {
                console.log("strays")
            }

        }
        return output;
    }
    static processArr(input, output,key,value) { 

        for (var i = 0; i < input.length; i++) {
            if (getEntityType(input[i]) === 'Object') {
                console.log("found Object in array", input[i])
            } else if (getEntityType(input[i]) === 'Array') {
                console.log("found Object in array", input[i])
            } else if (getEntityType(input[i]) === 'String' || getEntityType(input[i]) === 'Function' || getEntityType(input[i]) === 'Boolean') {
                
                var currentNode = processSchema.create(key, output, input[i], input[i]);
                    processSchema.appendChild(currentNode, output);
            } else {
            }
            //            console.log(input[i], getEntityType(input[i]));
         //   processSchema.setAppendEntity(input[i], output, input[i]);


        }



        return output;


    }
}

function getEntityType(entity) {
    return Object.getPrototypeOf(entity).constructor.name;//entity.__proto__.constructor.name
}

function processTest(e) {
    e.preventDefault();

    var in2 = basic;

    console.log(in2)
    outputElement = processSchema.create("output", document.getElementById("output"));
    console.log(outputElement)
    var outputE = processSchema.schema2(in2, outputElement);
    console.log("outputElement", outputE)
    //  const depth = getMax(outputArray,2);

    // var table = createTable(outputArray);
    // outputJson = arr2(outputArray,{} ,depth);
    // console.log(outputJson);
    //  document.getElementById("output").innerText = JSON.stringify(outputArray);
    document.getElementById("output").appendChild(outputE);
}


document.getElementById("get").addEventListener("click", processTest);


// var a = {
//     div:{
//         'class': "preference",
//         "label": "do you like cheese",
//         'type' : "checkBox"
//     }

// }
{/* <div class="preference">
    <label for="cheese">Do you like cheese?</label>
    <input type="checkbox" name="cheese" id="cheese">
</div>

<div class="preference">
    <label for="peas">Do you like peas?</label>
    <input type="checkbox" name="peas" id="peas">
</div> */}

