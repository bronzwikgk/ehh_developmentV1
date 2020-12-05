const isObject = t =>
    Object(t) === t

const set = (t, [k, v]) =>
    (t[k] = v, t)

const merge = (l = {}, r = {}) =>
    Object
        .entries(r)
        .map
        (([k, _]) =>
            isObject(_) && isObject(l[k])
                ? [k, merge(l[k], _)]
                : [k, _]
        )
        .reduce(set, l)


function fromJS(v, r = []) {
    switch (v?.constructor) {
        case Object:
            return Object
                .entries(v)
                .flatMap
                (([k, _]) =>
                    fromJS(_, [...r, k])
                )
        case Array:
            return v
                .flatMap
                ((_, k) =>
                    fromJS(_, [...r, k])
                )
        default:
            return [[...r, v]]
    }
}

function toJS(t) {
    return t.reduce
        ((r, _) => merge(r, toJS1(_))
            , {}
        )
}

function toJS1([v, ...more]) {
    if (more.length)
        return set
            (Number.isInteger(v) ? [] : {}
                , [v, toJS1(more)]
            )
    else
        return v
}

const input =
    { quiz: { sport: { q1: { question: "Which one is correct team name in NBA?", options: ["New York Bulls", "Los Angeles Kings", "Golden State Warriros", "Huston Rocket"], answer: "Huston Rocket" } }, maths: { q1: { question: "5 + 7 = ?", options: ["10", "11", "12", "13"], answer: "12" }, q2: { question: "12 - 8 = ?", options: ["1", "2", "3", "4"], answer: "4" } } } }

const result = toJS(fromJS(input))

console.log(JSON.stringify(result, null, 2))