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
var row = new Array('id', 'd', 'parent', 'entity',"type");

function createRow(input, output, parent, id, d, key, options, callback) {
    id = output.length;
    var newRow = [id, d, parent,key,getEntityType(input)];
    return newRow;
}

function updateRow(input, output, currentRow, prevRow, id, d, key, options, callback) {
    fillEmptyDepth(currentRow, output[0])
    currentRow.splice(output[0].indexOf(key), 1, input);
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
                validateNupdate(key, output);
                updateRow(input[key].toString(), output, currentRow, parentID, id, d, key);
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
    console.log(sample2)
    var output = obj2Array(sample2, []);
    console.log(output)
    document.getElementById("output").innerText = JSON.stringify(output);
}

document.getElementById("get").addEventListener("click", processTest);
