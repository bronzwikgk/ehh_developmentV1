//https://www.fourmilab.ch/cellab/manual/ruledef-js.html

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
class entityRegistry {
    constructor() {
        this.items = new WeakSet();
    }

    addItem(entity) {
        if (this.hasItem(entity)) {
            throw new Error(
                `The entity can only contain one instance of item ${item}`
            );
        }
        return this.items.add(item);
    }

    removeItem(item) {
        return this.items.delete(item);
    }

    hasItem(item) {
        return this.items.has(item);
    }
};
// This creates an index which when called with sytax of createIndex.next().value will give you an index new value.
function* createIndex() {
    let number = 1;
    while (true)
        yield number++;
}

function serialize() {
    const languageOverridesByBufferId = {};
    this.languageOverridesByBufferId.forEach((languageId, bufferId) => {
        languageOverridesByBufferId[bufferId] = languageId;
    });
    return { languageOverridesByBufferId };
}

function deserialize(params) {
    for (const bufferId in params.languageOverridesByBufferId || {}) {
        this.languageOverridesByBufferId.set(
            bufferId,
            params.languageOverridesByBufferId[bufferId]
        );
    }
}

/**
 * 
 * 
 */
class actionEditor{
    constructor() {
        this.id = 'actionEditor' + createIndex();
        this.name = "actionEditor",
        this.style = style,
        this.attributes = attributes,
        this.nonWordCharList = '/\\()"\':,.;<>~!@#$%^&*|+=[]{}`?-…',
        this.parent = parent,
        this.url = document.location.url,
        this.textBuffer = { point, range },
        this.options = {
        autofocus: true,
        lineNumbers: true,
        mimeMode: ['html', 'richText', 'json', 'css', 'javascript'],
        this.output = [self,output],
        tabSize: 2,
        indentWithTabs: true
        };

    }
    

    
}
var actionEditor = document.getElementById("ehhActionEditor");

actionEditor.addEventListener('keyup', refresh);
var jsonSyantax = ["{", "["]
function refresh(e) {
    autoStart = true;
    var actionEditor = document.getElementById("ehhActionEditor");
    var output = document.getElementById("output");
    var buffer = actionEditor.value;
    processBuffer(e, buffer);
    //   console.log(buffer);
    output.innerHTML = buffer;
    buffer = "";
}

function insertInEditor(editor, input, insertRange) {

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
function processBuffer(event, input, buffer) {
    // console.log(event.key, event.which,input)
    //detect Short Cut....Look Up Short Dic..Execute Command
    //Detect Sytax 
    if (validate.isOneof(event.key, jsonSyantax)) {

        actionEditor.value = actionEditor.value + "}"
        //  JSON.stringify(buffer).concat("}")
        console.log("Found match", event.key, event.target.selectionStart, actionEditor.value)

    }

}



//actionEditor.addEventListener('keydown', refresh);


var onAction = {
    "onAction": {
    "event": 'event',
    "target": 'target'
    }
}
// This creates an index which when called with sytax of createIndex.next().value will give you an index new value.
function* createIndex() { 
    let number = 1;
    while (true)
        yield number++;
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
    static isNumber(factValue) {
        return Number.parseFloat(factValue).toString() !== 'NaN'
    }

}
class validation { 
    constructor(typeofValidation, input, options) {
            this.defaultValidation = validate.is(isEmpty, input, options.output.ifFalseCallback('continue')),
            this.typeofValidation = typeofValidation,
            this.name = typeofValidation,
            this.input = input,
            this.options = options,
            this.options.validateAgainst = options.validateAgainst,
            this.options.output,
        }    
}

class validationSet {
    and = every;
    or = some;
        constructor(validation, ifTrueCallBack, ifFalseCallback) {
        this.defaultValidation = validate.is(isArray, input, options.output.ifTrueCallback('continue'))
        this.validationSetName = validation.name,
        this.validation = this.validate.typeofValidation(input, options);
        this.actionIfTrue = ifTrueCallback;
        this.actionIfFalse = ifFalseCallback(...arguments,);
        this.options = { autoStart = true }
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

