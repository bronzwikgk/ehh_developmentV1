
const isObject = table => Object(table) === table

const set = (table, [key, inputObj]) => (table[key] = inputObj, table)

const merge = (l = {}, r = {}) => Object.entries(r).map(([key, _]) => isObject(_) && isObject(l[key]) ? [key, merge(l[key], _)] : [key, _]).reduce(set, l)


function fromJS(inputObj, r = []) {
    switch (inputObj?.constructor) {
        case Object:
            return Object.entries(inputObj).flatMap(([key, _]) =>fromJS(_, [...r, key]))
        case Array:
            return inputObj.flatMap((_, key) =>fromJS(_, [...r, key]))
        default:
            return [[...r, inputObj]]
    }
}

function toJS(table) {
    return table.reduce((r, _) => merge(r, toJS1(_)), {})
}

function toJS1([inputObj, ...more]) {
    if (more.length)
        return set(Number.isInteger(inputObj) ? [] : {}, [inputObj, toJS1(more)])
    else
        return inputObj
}

const input =
    { quiz: { sport: { q1: { question: "Which one is correct team name in NBA?", options: ["New York Bulls", "Los Angeles Kings", "Golden State Warriros", "Huston Rocket"], answer: "Huston Rocket" } }, maths: { q1: { question: "5 + 7 = ?", options: ["10", "11", "12", "13"], answer: "12" }, q2: { question: "12 - 8 = ?", options: ["1", "2", "3", "4"], answer: "4" } } } }

// jsonoutPut = fromJS(input);
// const result = toJS(fromJS(input))

//console.log(JSON.stringify(result, null, 2))

