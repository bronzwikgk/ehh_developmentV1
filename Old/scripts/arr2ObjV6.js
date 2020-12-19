
const sampleData = [["ehhid", "d", "parent", "name", "typeOf", "path", "question", "answer"], [1, 1, "name", "quiz", "Object", ".name"], [2, 2, "quiz", "sport", "Object", ".name.quiz"], [3, 3, "sport", "q1", "Object", ".name.quiz.sport", "Which one is correct team name in NBA?", "Huston Rocket"], [4, 4, "q1", "options", "Array", ".name.quiz.sport.q1"], [5, 5, "options", "New York Bulls", "String", ".name.quiz.sport.q1.options"], [6, 5, "options", "Los Angeles Kings", "String", ".name.quiz.sport.q1.options"], [7, 5, "options", "Golden State Warriros", "String", ".name.quiz.sport.q1.options"], [8, 5, "options", "Huston Rocket", "String", ".name.quiz.sport.q1.options"], [9, 2, "quiz", "maths", "Object", ".name.quiz"], [10, 3, "maths", "q1", "Object", ".name.quiz.maths", "5 + 7 = ?", "12"], [11, 4, "q1", "options", "Array", ".name.quiz.maths.q1"], [12, 5, "options", "10", "String", ".name.quiz.maths.q1.options"], [13, 5, "options", "11", "String", ".name.quiz.maths.q1.options"], [14, 5, "options", "12", "String", ".name.quiz.maths.q1.options"], [15, 5, "options", "13", "String", ".name.quiz.maths.q1.options"], [16, 3, "maths", "q2", "Object", ".name.quiz.maths", "12 - 8 = ?", "4"], [17, 4, "q2", "options", "Array", ".name.quiz.maths.q2"], [18, 5, "options", "1", "String", ".name.quiz.maths.q2.options"], [19, 5, "options", "2", "String", ".name.quiz.maths.q2.options"], [20, 5, "options", "3", "String", ".name.quiz.maths.q2.options"], [21, 5, "options", "4", "String", ".name.quiz.maths.q2.options"]]

const output = {};
let header = [];

getMaxDepth = (data) => {
    let count = 0;
    for (const instance of data) {
        if (instance[1] !== 'd' && instance[1] > count) {
            count = instance[1];
        }
    }
    return count;
}

insertInObject = (instance, splitPathArr, output1, parentObj) => {
    if (splitPathArr.length < 1) {
        switch (instance[4]) {
            case 'Object':
                console.log(output)
                console.log(output1, instance)
                output1[instance[3]] = {};
                if (instance[6]) {
                    for (let index = 6; index < instance.length; index++) {
                        output1[[instance[3]]][header[index]] = instance[index];
                    }
                }
                break;
            case 'String':
                if (Array.isArray(parentObj[instance[2]])) {
                    output1.push(instance[3] || "")
                }
                break;
            case 'Array':
                output1[instance[3]] = [];
                break;
        }
        return;
    } else {
        let objKey = splitPathArr[0];
        splitPathArr.splice(0, 1);
        console.log(output1, objKey)
        insertInObject(instance, splitPathArr, output1[objKey], output1);
    }
}

main = (data, depth) => {
    for (let index = 0; index < depth - 1; index++) {
        for (const instance of data) {
            if (instance[0] === 'ehhid') {
                header = instance;
                continue;
            }
            if (instance[1] === index + 1 && index + 1 === 1) {
                switch (instance[4]) {
                    case 'Object':
                        output[instance[3]] = {};
                        break;
                    case 'String':
                        break;
                    case 'Array':
                        output[instance[3]] = [];
                        break;
                }
            } else if (instance[1] === index + 1) {
                let path = instance[5];
                let splitPathArr = path.split('.');
                splitPathArr.splice(0, 2)
                insertInObject(instance, splitPathArr, output, {});
            }
        }
    }
};

const depth = getMaxDepth(sampleData);
main(sampleData, depth);
console.log(output)