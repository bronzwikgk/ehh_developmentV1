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

function test() {
    output = obj2Array(sample);
    console.log(output);
    var ss = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
    // printArray(output,ss);
    // var range = ss.getRange(1, 1, output.length, output[0].length);
    //  range.setValues(output);
}


var row = new Array('id', 'd', 'parent', 'entity');


function updateRow(input, output, currentRow, prevRow, id, d, key, options, callback) {
   console.log("updating ",currentRow)
    fillEmptyDepth(currentRow, output[0])
    currentRow.splice(output[0].indexOf(key), 0, input);
      console.log("updated Row", currentRow, "for key", key, output[0], output[0].indexOf(key))
    return currentRow;
}

function createRow(input, output, parent, id, d, key, options, callback) {
    id = output.length;
    // console.log(id,d);
    var newRow = [id, d, parent];
    //  fillEmptyDepth(newRow,output[0])
    // console.log('createRow', newRow, output[0])
    return newRow;
}



function obj2Array(obj, output, currentRow, parentID, id, d, key) {
    if (!output) { var output = []; }
    if (!d) { var d = 0; }
    //console.log("current Depth",d)
    if (!parentID) {
        var parentID = "root";
        output.push(row);
        // console.log(output);
    };

    if (getEntityType(obj) === "Object" && obj !== null) {

        // console.log("Found Object",d);

        newRow = createRow(obj, output, parentID, id, d);
       //  output.push(newRow);
      //   console.log("newRow",newRow);
        iterateObj(obj, output, newRow, parentID, id, d);
    }
    if (getEntityType(obj) === "String" && obj !== null) {
        validateNupdate(parentID, output);
        console.log("Found Value", obj, output, currentRow, parentID, key);
        updateRow(obj, output, currentRow, parentID, id, d, key);
    }

    if (getEntityType(obj) === "Array" && obj !== null) {
        // console.log("Found Array",obj);
        iterateArray(obj);
    }
    return output;
}

function iterateArray(arr) {
    for (i = 0; i <= arr.length; i++) {
        if (typeof arr[i] === "object" && arr[i] !== null) {
            // console.log("Found Object in Array",arr[i]);
            obj2Array(arr[i]);
        }

    }
}


function iterateObj(obj, output, currentRow, prevRow, id, d) {
    d = d + 1;
    //console.log(d)
    for (var key in obj) {
      
        if (typeof obj[key] === "object" && obj[key] !== null) {
            newRow = createRow(key, output, prevRow, id, d);
            console.log("NewRow", newRow)
            newRow.push(key);
            output.push(newRow);
            // console.log(output)
            obj2Array(obj[key], output, newRow, key, id, d, key);
        }
        if (typeof obj[key] === "string" && obj[key] !== null) {
            obj2Array(obj[key], output, newRow, key, id, d, key);

        }

    }
}
function processTest(e) {
    e.preventDefault();
    console.log(sample)
    var output = obj2Array(sample, []);
    console.log(output)
    document.getElementById("output").innerText = JSON.stringify(output);
}

document.getElementById("get").addEventListener("click", processTest);

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
        //  console.log(input)
    }
    return input
}

//this function primarly check for the presence of a keys in any an array, if not present and options [ returns false and update and return position]
function validateNupdate(input, output) {

    if (output[0].indexOf(input) === -1 && typeof input !== null && typeof input !== undefined) {
        // console.log("found New Attribute header", input,input.toString(),output[0]);
        output[0].push(input);
        // currentRow.splice(output[0].indexOf(key), 0, input);
    }

    // console.log(output[0])
    return output;
}
