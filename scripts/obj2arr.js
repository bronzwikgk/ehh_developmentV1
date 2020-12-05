// An object consitis of below mentioned kind of entity
//an Object Entity with Typeof 'object' and getEntityType 'Object'.
// an Object Entity can have an object (Object / Array) inside it or a value.
//an Array Entity with Typeof 'object' and getEntityType 'Array'. 
// an 'Object' inside an array is a child of array, but then the array has values, they become it's values, with values/arrayname as attribute
// Keys inside an object with value [value cannot be an *Object] are attributes

var sample = {
    "quiz": {
        "sport": {
            "q1": {
                "question": "Which one is correct team name in NBA?",
                "options": [
                    "New York Bulls",
                    "Los Angeles Kings",
                    "Golden State Warriros",
                    "Huston Rocket"
                ],
                "answer": "Huston Rocket"
            }
        },
        "maths": {
            "q1": {
                "question": "5 + 7 = ?",
                "options": [
                    "10",
                    "11",
                    "12",
                    "13"
                ],
                "answer": "12"
            },
            "q2": {
                "question": "12 - 8 = ?",
                "options": [
                    "1",
                    "2",
                    "3",
                    "4"
                ],
                "answer": "4"
            }
        }
    }
}

var sample2 = {
    "menus": [
        {
            "command": "formatblock",
            "header": "- formatting -",
            "values": {
                "h1": "Title 1 &lt;h1&gt;",
                "h2": "Title 2 &lt;h2&gt;",
                "h3": "Title 3 &lt;h3&gt;",
                "h4": "Title 4 &lt;h4&gt;",
                "h5": "Title 5 &lt;h5&gt;",
                "h6": "Title 6 &lt;h6&gt;",
                "p": "Paragraph &lt;p&gt;",
                "pre": "Preformatted &lt;pre&gt;"
            }
        },
        {
            "command": "fontname",
            "header": "- font -",
            "values": [
                "Arial",
                "Arial Black",
                "Courier New",
                "Times New Roman"
            ]
        },
        {
            "command": "fontsize",
            "header": "- size -",
            "values": {
                "1": "Very small",
                "2": "A bit small",
                "3": "Normal",
                "4": "Medium-large",
                "5": "Big",
                "6": "Very big",
                "7": "Maximum"
            }
        },
        {
            "command": "forecolor",
            "header": "- color -",
            "values": {
                "red": "Red",
                "blue": "Blue",
                "green": "Green",
                "white": "White",
                "black": "Black"
            }
        },
        {
            "command": "backcolor",
            "header": "- background -",
            "values": {
                "white": "White",
                "red": "Red",
                "green": "Green",
                "black": "Black"
            }
        }
    ],
    "buttons": [
        {
            "text": "Clean",
            "command": "cleanDoc",
            "image": "icons\/clean.gif"
        },
        {
            "text": "Print",
            "command": "printDoc",
            "image": "icons\/print.png"
        },
        {
            "text": "Undo",
            "command": "undo",
            "image": "icons\/undo.gif"
        },
        {
            "text": "Redo",
            "command": "redo",
            "image": "icons\/redo.gif"
        },
        {
            "text": "Remove formatting",
            "command": "removeFormat",
            "image": "icons\/format.png"
        },
        {
            "text": "Bold",
            "command": "bold",
            "image": "icons\/bold.gif"
        },
        {
            "text": "Italic",
            "command": "italic",
            "image": "icons\/italic.gif"
        },
        {
            "text": "Underline",
            "command": "underline",
            "image": "icons\/underline.gif"
        },
        {
            "text": "Left align",
            "command": "justifyleft",
            "image": "icons\/justifyleft.gif"
        },
        {
            "text": "Center align",
            "command": "justifycenter",
            "image": "icons\/justifycenter.gif"
        },
        {
            "text": "Right align",
            "command": "justifyright",
            "image": "icons\/justifyright.gif"
        },
        {
            "text": "Numbered list",
            "command": "insertorderedlist",
            "image": "icons\/numberedlist.gif"
        },
        {
            "text": "Dotted list",
            "command": "insertunorderedlist",
            "image": "icons\/dottedlist.gif"
        },
        {
            "text": "Quote",
            "command": "formatblock",
            "value": "blockquote",
            "image": "icons\/quote.gif"
        },
        {
            "text": "Delete indentation",
            "command": "outdent",
            "image": "icons\/outdent.gif"
        },
        {
            "text": "Add indentation",
            "command": "indent",
            "image": "icons\/indent.gif"
        },
        {
            "text": "Hyperlink",
            "command": "createLink",
            "image": "icons\/hyperlink.gif"
        },
        {
            "text": "Cut",
            "command": "cut",
            "image": "icons\/cut.gif"
        },
        {
            "text": "Copy",
            "command": "copy",
            "image": "icons\/copy.gif"
        },
        {
            "text": "Paste",
            "command": "paste",
            "image": "icons\/paste.gif"
        }
    ]
}

const UserSchema = {
    name: {
        type: String, required: true
    }, email: {
        type: String, required: true
    }, password: {
        type: String, required: true
    }, date: {
        type: Date, default: Date.now
    }
};

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

var sample4 = {
    "id": "https://example.com/person.schema.json",
    "schema": "http://json-schema.org/draft-07/schema#",
    "title": "Person",
    "type": "object",
    "properties": {
        "firstName": {
            "type": "string",
            "description": "The person's first name."
        },
        "lastName": {
            "type": "string",
            "description": "The person's last name."
        },
        "age": {
            "description": "Age in years which must be equal to or greater than zero.",
            "type": "integer",
            "minimum": 0
        }
    }
}

var samplen = {
    "type": "Categorization",
    "elements": [
        {
            "type": "Category",
            "label": "Basic Information",
            "elements": [
                {
                    "type": "HorizontalLayout",
                    "elements": [
                        {
                            "type": "Control",
                            "scope": "#/properties/firstName"
                        },
                        {
                            "type": "Control",
                            "scope": "#/properties/secondName"
                        }
                    ]
                },
                {
                    "type": "HorizontalLayout",
                    "elements": [
                        {
                            "type": "Control",
                            "scope": "#/properties/birthDate"
                        },
                        {
                            "type": "Control",
                            "scope": "#/properties/nationality"
                        }
                    ]
                },
                {
                    "type": "Control",
                    "scope": "#/properties/provideAddress"
                },
                {
                    "type": "Control",
                    "scope": "#/properties/vegetarian"
                }
            ]
        },
        {
            "type": "Category",
            "label": "Address",
            "elements": [
                {
                    "type": "HorizontalLayout",
                    "elements": [
                        {
                            "type": "Control",
                            "scope": "#/properties/address/properties/street"
                        },
                        {
                            "type": "Control",
                            "scope": "#/properties/address/properties/streetNumber"
                        }
                    ]
                },
                {
                    "type": "HorizontalLayout",
                    "elements": [
                        {
                            "type": "Control",
                            "scope": "#/properties/address/properties/city"
                        },
                        {
                            "type": "Control",
                            "scope": "#/properties/address/properties/postalCode"
                        }
                    ]
                }
            ],
            "rule": {
                "effect": "SHOW",
                "condition": {
                    "scope": "#/properties/provideAddress",
                    "schema": {
                        "const": true
                    }
                }
            }
        },
        {
            "type": "Category",
            "label": "Additional",
            "elements": [
                {
                    "type": "Control",
                    "scope": "#/properties/vegetarianOptions/properties/vegan"
                },
                {
                    "type": "Control",
                    "scope": "#/properties/vegetarianOptions/properties/favoriteVegetable"
                },
                {
                    "type": "Control",
                    "scope": "#/properties/vegetarianOptions/properties/otherFavoriteVegetable",
                    "rule": {
                        "effect": "SHOW",
                        "condition": {
                            "scope": "#/properties/vegetarianOptions/properties/favoriteVegetable",
                            "schema": {
                                "const": "Other"
                            }
                        }
                    }
                }
            ],
            "rule": {
                "effect": "SHOW",
                "condition": {
                    "scope": "#/properties/vegetarian",
                    "schema": {
                        "const": true
                    }
                }
            }
        }
    ]
}
var row = new Array('ehhid', 'd', 'parent', 'entity', "type");

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
                console.log("newRow", newRow)
              //   console.log("String Value Found", input[key], " in key", key, "parent", parentID, currentRow)
            } else {
                console.log("errand", key, input[key],typeof key)
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

function printArray(outout, ss) {
    for (var i = 0; i <= output.length; i++) {
        if (output[i]) {
            console.log(output[i])
            ss.appendRow(output[i]);

        }
    }

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
