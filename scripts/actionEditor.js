
var actionEditor = document.getElementById("ehhActionEditor");

//actionEditor.addEventListener('keydown', refresh);
actionEditor.addEventListener('keyup', refresh);

var jsonSyantax = ["{","["]





function refresh(e) { 
    var actionEditor = document.getElementById("ehhActionEditor");
    var output = document.getElementById("output");
    var buffer = actionEditor.value;
    processBuffer(e,buffer);
 //   console.log(buffer);
    output.innerHTML = buffer;
    buffer = "";
}

function processBuffer(event, input,buffer) {
   // console.log(event.key, event.which,input)
    //detect Short Cut....Look Up Short Dic..Execute Command
    //Detect Sytax 
    if (validate.isOneof(event.key, jsonSyantax)) { 
       
        actionEditor.value = actionEditor.value.toString().concat("}")         
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

