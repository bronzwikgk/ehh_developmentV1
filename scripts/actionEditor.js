
var actionEditor = document.getElementById("ehhActionEditor");

//actionEditor.addEventListener('keydown', refresh);
actionEditor.addEventListener('keyup', refresh);

var jsonSyantax = ["{","["]
// "{
// // define the 'conditions' for when ""hello world"" should display
// conditions: {
//     all: [{
//         fact: 'displayMessage',
//         operator: 'equal',
//         value: true
//     }]
// },
// // define the 'event' that will fire when the condition evaluates truthy
// event: {
//     type: 'message',
//         params: {
//         data: 'hello-world!'
//     }
// }
//     }"
var onAction = onAction: {
    "event": 'event',
    "target": 'target'
}
var rule = ruleName : { onAction.{ if.this.then.that }}


tempRule = {
    
    keyUpInputSyntaxCheck: {

        
}


}


function refresh(e) { 
    var actionEditor = document.getElementById("ehhActionEditor");
    var output = document.getElementById("output");
    var buffer = actionEditor.value;
    processBuffer(e,buffer);
 //   console.log(buffer);
    output.innerHTML = buffer;
    buffer = "";
}

function insertInEditor(editor,input,insertRange) { 

    // Find the current cursor position
    const startPos = textArea.selectionStart;
    const endPos = textArea.selectionEnd;
    // Get the current contents of the editor
    const before = textArea.value;
    // Get everything to the left of the start of the selection
    const left = before.substring(0, startPos);
    // Get everything to the right of the start of the selection
    const right = before.substring(endPos);
    // Concatenate the new contents.
    textArea.value = left + contents + right;
    // Move the cursor to the end of the inserted content.
    const newPos = startPos + contents.length;
    textArea.selectionStart = newPos;
    textArea.selectionEnd = newPos;
    app.setModified(true);
}

function processBuffer(event, input,buffer) {
   // console.log(event.key, event.which,input)
    //detect Short Cut....Look Up Short Dic..Execute Command
    //Detect Sytax 
    if (validate.isOneof(event.key, jsonSyantax)) { 
       
        actionEditor.value = actionEditor.value + "}"
      //  JSON.stringify(buffer).concat("}")
        console.log("Found match", event.key, event.target.selectionStart, actionEditor.value  )
        
    }
    
}
function executeRule(validation, callbackIfTrue, CallBackIfFalse) { 
    
}


class validate {
    static isEqual(a, b, key, value) {
        return a === b ? true : false;
    }
    static isEmpty(a) {
        return Object.keys(obj).length === 0 ? true : false;
    }
    static isOneof(a, b, key, value) {
      //  console.log(a,b)
      return b.indexOf(a) > -1 ? true : false;
    }
   
    static hasAllof(a, b) {

    }
    static numberValidator(factValue) {
        return Number.parseFloat(factValue).toString() !== 'NaN'
    }

}


// <script>
//     function newContent() {
//         document.open();
//       document.write("<h1>Out with the old, in with the new!</h1>");
//       document.close();
//     }
//   </script>
/**
   * Inserts a string into the editor.
   *
   * @param {string} contents Contents to insert into the document.
   */
app.insertIntoDoc = (contents) => {
   
};

async function start() {
    /**
     * Setup a new engine
     */
    const engine = new Engine()

    /**
     * Create a rule
     */
    engine.addRule({
        // define the 'conditions' for when "hello world" should display
        conditions: {
            all: [{
                fact: 'displayMessage',
                operator: 'equal',
                value: true
            }]
        },
        // define the 'event' that will fire when the condition evaluates truthy
        event: {
            type: 'message',
            params: {
                data: 'hello-world!'
            }
        }
    })

    /**
     * Define a 'displayMessage' as a constant value
     * Fact values do NOT need to be known at engine runtime; see the
     * 03-dynamic-facts.js example for how to pull in data asynchronously during runtime
     */
    const facts = { displayMessage: true }

    // engine.run() evaluates the rule using the facts provided
    const { events } = await engine.run(facts)

    events.map(event => console.log(event.params.data.green))
}

// start()

