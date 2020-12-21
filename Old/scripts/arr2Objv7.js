

function arr2Obj(inputTable) {
    d = inputTable[0].length;
    console.log(d);
    for (i = inputTable.length - 1; i > 0; i--) {
        if (inputTable[i][1] == 2) {
           // console.log("this",inputTable[i]);
            if (!output) output = {};

            output = inputTable[i][d];
            console.log(output, "here", inputTable[i][d], i)
            continue;
        }
        for (j = i - 1; j >= 0; j--) {
            entity = inputTable[i];
            parent = inputTable[j];
            
            if (parent[3] == entity[2] && parent[1] + 1 == entity[1]) {
               
             //   console.log(inputTable[j][3], inputTable[i][2])
               // console.log("parent",parent,"entity",entity) 
                if (parent[4] == "Object") {
                   // console.log(inputTable[j], "entity")

                    if (!parent[d]) parent[d] = {};

                    parent[d][entity[3]] = entity[d];

                } else if (parent[4] == "Array") {
                   /// console.log(inputTable[j])
                    if (!parent[d]) parent[d] = [];
                  //  parent[5].unshift(entity[5]);
                    //   console.log(inputTable[j][5])
                }
                break;
            }
        }
    }

    return output;
}



function arr2Obj3(inputTable) {
    for (i = inputTable.length - 1; i > 0; i--) {

        if (inputTable[i][1] == 2) {
            if (!inputTable[0][5]) inputTable[0][5] = {};
            inputTable[0][5][inputTable[i][3]] = inputTable[i][5];
            console.log(inputTable[0][5], "here", inputTable[i][5],i)
            continue;
        }
        for (j = i - 1; j >= 0; j--) {
           // console.log(j,i)
            if (inputTable[j][3] == inputTable[i][2] && inputTable[j][1] + 1 == inputTable[i][1]) {
            //    console.log(inputTable[j][3], inputTable[i][2])
                if (inputTable[j][4] == "Object") {
                    if (!inputTable[j][5]) inputTable[j][5] = {};
                    
                    inputTable[j][5][inputTable[i][3]] = inputTable[i][5];

                  console.log(inputTable[j][5], inputTable[i][5])

                } else if (inputTable[j][4] == "Array") {
                    if (!inputTable[j][5]) inputTable[j][5] = [];
                    inputTable[j][5].unshift(inputTable[i][5]);
                 //   console.log(inputTable[j][5])

                }
                break;
            }
        }

    }
    console.log(inputTable[0]);

    return inputTable[0][5];
}

