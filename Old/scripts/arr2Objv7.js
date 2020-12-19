

function arr2Obj(inputTable) {
    for (i = inputTable.length - 1; i > 0; i--) {
        if (inputTable[i][1] == 2) {
            if (!inputTable[0][5]) inputTable[0][5] = {};
            inputTable[0][5][inputTable[i][3]] = inputTable[i][5];
            continue;
        }
        for (j = i - 1; j >= 0; j--) {
            if (inputTable[j][3] == inputTable[i][2] && inputTable[j][1] + 1 == inputTable[i][1]) {
                if (inputTable[j][4] == "Object") {
                    if (!inputTable[j][5]) inputTable[j][5] = {};
                    inputTable[j][5][inputTable[i][3]] = inputTable[i][5];
                } else if (inputTable[j][4] == "Array") {
                    if (!inputTable[j][5]) inputTable[j][5] = [];
                    inputTable[j][5].unshift(inputTable[i][5]);
                }
                break;
            }
        }
    }
    return inputTable[0][5];
}

