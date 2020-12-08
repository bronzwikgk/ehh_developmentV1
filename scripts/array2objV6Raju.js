function arr2Obj(params) {

    let output = {};
    let depth = 0;
    let len;
    let prevkey;
    let row = [];
    let columns = [];
    let index = 0;

    for (const [i, key] of params.entries()) {

        if (i === 0) {
            var idx = {};
            for (const [j, ele] of key.entries()) {
                idx[ele] = j
            }
            columns = params[0];

        } else {
            var ref, isType, entity;
            if (key[idx.d] === 1 && key[idx.id] === 1) {
                output[key[idx.parent]] = {}
                row[key[idx.d]] = output[key[idx.parent]]

                isType = key[idx.type]
                entity = key[idx.entity]

                if (isType === "Object")
                    output[key[idx.parent]][entity] = {}
                else if (isType === "Array")
                    output[key[idx.parent]][entity] = []

                ref = output[key[idx.parent]][entity];

                if (key.length > 5) {
                    for (let lidx = 5; lidx < key.length; lidx++) {
                        if (key[lidx]) {
                            ref[columns[lidx]] = key[lidx]
                        }
                    }

                }
                row[key[idx.d] + 1] = ref

                //depth = key[idx.d]

            }

            else {

                if (depth <= key[idx.d]) {



                    if (isType === "Array") {
                        // if(key[idx.parent] === entity) {

                        if (key[idx.type] === "Object") {
                            let obj = {}


                            ref.push(obj)









                            if (key.length > 5) {
                                for (let lidx = 5; lidx < key.length; lidx++) {
                                    if (key[lidx]) {
                                        obj[columns[lidx]] = key[lidx]
                                    }
                                }

                            }
                            console.log("hi btn", key[idx.d], params[i + 1]);

                            if (params[i + 1] && key[idx.d] < params[i + 1][1]) {
                                // console.log("hi", key[idx.d] , params[key[idx.id]+1]);
                                ref = obj
                                isType = key[idx.type]
                                row[key[idx.d] + 1] = ref
                            }


                        }
                        if (key[idx.type] === "String") {

                            ref.push(key[idx.entity])
                            // ref = obj
                            isType = "Array"

                        }
                        // else if (key[idx.type] === "Array") {
                        //     let arr = []

                        //     ref.push(arr)
                        //     ref = arr
                        //     isType = key[idx.type]


                        //     if (key.length > 5) {
                        //         for (let lidx = 5; lidx < key.length; lidx++) {
                        //             if (key[lidx]) {
                        //                 ref[columns[lidx]] = key[lidx]
                        //             }
                        //         }

                        //     }
                        // }
                        // }
                    }
                    else if (isType === "Object") {
                        if (key[idx.type] === "Object") {

                            if (depth === key[idx.d]) {
                                ref = row[depth]
                            }

                            let obj = {}
                            ref[key[idx.entity]] = obj;
                            ref = obj;
                            isType = key[idx.type]

                            row[key[idx.d] + 1] = ref

                            if (key.length > 5) {
                                for (let lidx = 5; lidx < key.length; lidx++) {
                                    if (key[lidx]) {
                                        obj[columns[lidx]] = key[lidx]
                                    }
                                }

                            }



                        }
                        else if (key[idx.type] === "Array") {
                            let arr = []
                            ref[key[idx.entity]] = arr;
                            ref = arr;
                            isType = key[idx.type]

                            row[key[idx.d] + 1] = ref

                            // if (key.length > 5) {
                            //     for (let lidx = 5; lidx < key.length; lidx++) {
                            //         if (key[lidx]) {
                            //             ref[columns[lidx]] = key[lidx]
                            //         }
                            //     }

                            // }
                        }
                    }

                }
                else if (depth > key[idx.d]) {
                    ref = row[key[idx.d]]
                    // isType = row[key[idx.d].isType]


                    if (Array.isArray(ref)) {
                        isType = "Array"
                    } else {
                        isType = "Object"
                    }

                    if (isType === "Array") {
                        // if(key[idx.parent] === entity) {

                        if (key[idx.type] === "Object") {
                            let obj = {}

                            ref.push(obj)



                            //  if(depth != key[idx.d]){

                            ref = obj
                            isType = key[idx.type]
                            row[key[idx.d] + 1] = ref
                            // }


                            if (key.length > 5) {
                                for (let lidx = 5; lidx < key.length; lidx++) {
                                    if (key[lidx]) {
                                        ref[columns[lidx]] = key[lidx]
                                    }
                                }

                            }
                        }
                        if (key[idx.type] === "String") {

                            ref.push(key[idx.entity])
                            // ref = obj
                            isType = "Array"

                        }
                        // else if (key[idx.type] === "Array") {
                        //     let arr = []

                        //     ref.push(arr)
                        //     ref = arr
                        //     isType = key[idx.type]


                        //     if (key.length > 5) {
                        //         for (let lidx = 5; lidx < key.length; lidx++) {
                        //             if (key[lidx]) {
                        //                 ref[columns[lidx]] = key[lidx]
                        //             }
                        //         }

                        //     }
                        // }
                        // }
                    }
                    else if (isType === "Object") {
                        if (key[idx.type] === "Object") {

                            let obj = {}
                            ref[key[idx.entity]] = obj;
                            ref = obj;
                            isType = key[idx.type]

                            row[key[idx.d] + 1] = ref

                            if (key.length > 5) {
                                for (let lidx = 5; lidx < key.length; lidx++) {
                                    if (key[lidx]) {
                                        ref[columns[lidx]] = key[lidx]
                                    }
                                }

                            }

                        }
                        else if (key[idx.type] === "Array") {
                            let arr = []
                            ref[key[idx.entity]] = arr;
                            ref = arr;
                            isType = key[idx.type]

                            row[key[idx.d] + 1] = ref

                            // if (key.length > 5) {
                            //     for (let lidx = 5; lidx < key.length; lidx++) {
                            //         if (key[lidx]) {
                            //             ref[columns[lidx]] = key[lidx]
                            //         }
                            //     }

                            // }
                        }
                    }
                }



            }
        }
        depth = key[idx.d]


    }

    return output.root
}