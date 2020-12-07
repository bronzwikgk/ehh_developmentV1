function array2Obj(params) {
    let output = {}; let depth = 0; let len; let prevKey; let columns = []; let row = []; var index = 0
    for (const [i, key] of params.entries()) {

        if (i === 0) {
            var idx = {};
            for (const [j, ele] of key.entries()) {
                idx[ele] = j
            }
        //  console.log(idx);
            columns = params[0];
        } else {
            var ref; var istype; let arr;
         //   console.log(key,idx)
            if (depth <= key[idx.d]) {
                if (key[idx.d] === 1 && key[idx.id] === 1) {
                 //   output[key[idx.parent]] = {}
                    ref = output[key[idx.parent]];
                   // console.log("ref", ref, key, idx)
                    istype = key[idx.type]
                    row[key[idx.d]] = ref
                   // console.log(row,output)
                } else {       
                    if (Array.isArray(ref)) {
                        // let index = 0
                        if (depth === key[idx.d]) {
                            if (istype === "Object") {
                                ref[0] = {}
                                if (len > 5) {
                                    console.log("prevvvv", JSON.parse(JSON.stringify(ref)));
                                    for (let lidx = 5; lidx < prevKey.length; lidx++) {
                                        if (prevKey[lidx]) {
                                            ref[0][columns[lidx]] = prevKey[lidx]
                                        }
                                    }

                                }
                            }
                            else if (istype === "String") {

                                ref.push(key[idx.entity])
                                //ref = ref[index]
                                depth = key[idx.d];
                                istype = key[idx.type]
                            }
                        }
                        else {
                            if (istype == "Object") {
                                ref[0] = {}
                                if (len > 5) {
                                    for (let lidx = 5; lidx < prevKey.length; lidx++) {
                                        if (prevKey[lidx]) {
                                            ref[0][columns[lidx]] = prevKey[lidx]
                                        }
                                    }

                                }
                                ref = ref[0]

                                index = index + 1;

                                depth = key[idx.d];
                                istype = key[idx.type]
                            }
                            else if (istype == "Array") {
                                ref.push([])
                                ref = ref[index]
                                index = index + 1;
                                depth = key[idx.d];
                                istype = key[idx.type]
                            }
                        }
                    }
                    else {
                        index = 0
                        if (istype === "Object") {
                           //
                            ref[key[idx.parent]] = {}
                            //console.log("ref", ref, key, idx)
                            ref = ref[key[idx.parent]]
                            //console.log("ref", ref, key, idx)
                            istype = key[idx.type]
                            if (len > 5) {
                                for (let lidx = 5; lidx < prevKey.length; lidx++) {
                                    if (prevKey[lidx]) {
                                        ref[columns[lidx]] = prevKey[lidx]
                                    }
                                }
                            }
                            row[key[idx.d]] = ref
                        }
                        else if (istype === "Array") {
                            ref[key[idx.parent]] = []
                            ref = ref[key[idx.parent]]
                            istype = key[idx.type]
                            row[key[idx.d]] = ref
                        }
                    }
                }
                depth = key[idx.d];
            } else if (depth > key[idx.d]) {
                ref = row[key[idx.d]]
                depth = key[idx.d]
                istype = key[idx.type]
            }
            len = key.length;
            prevKey = key;
            console.log("my output", JSON.parse(JSON.stringify(output)));
        }
    }
    return output.root;
}