function array2Obj(params) {

    let output = {}
    let depth = 0;
    let len;
    let prevKey;
    let columns = [];

    for (const [i, key] of params.entries()) {

        if (i === 0) {
            var idx = {};
            for (const [j, ele] of key.entries()) {
                idx[ele] = j
            }
            columns = params[0];

        } else {
            var ref;
            var istype;
            let arr;
            if (depth < key[idx.d]) {


                if (key[idx.d] === 1 && key[idx.id] === 1) {
                    output[key[idx.parent]] = {}

                    ref = output[key[idx.parent]];
                    istype = key[idx.type]


                } else {
                    if (istype === "Object") {
                        
                        ref[key[idx.parent]] = {}
                        ref = ref[key[idx.parent]]
                        istype = key[idx.type]

                        if(len > 5) {
                            for(let lidx = 5; lidx< prevKey.length; lidx++) {
                                ref[columns[lidx]] = prevKey[lidx]
                            }
                            
                        }

                    }
                    else if (istype === "Array") {
                     
                        ref[key[idx.parent]] = []
                        ref = ref[key[idx.parent]]
                        istype = key[idx.type]

                    }

                }

                depth = key[idx.d];
            } else if (depth > key[idx.d]) { 
                if (key[idx.d] === 2)
                    ref = output.root[key[idx.parent]]
                else if (key[idx.d] === 3)
                    ref = output.root.quiz[key[idx.parent]]
                depth = key[idx.d]
                istype = key[idx.type]
            
            }
            else if (depth === key[idx.d]) {

                if (istype === "String") {
                   
                    arr = ref;
                    arr.push(key[idx.entity])
                    depth = key[idx.d];
                    istype = key[idx.type]
                }
            }
            len = key.length;
            prevKey = key;
        }
    }
    return output.root;
}