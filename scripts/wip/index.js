//https://medium.com/dailyjs/rewriting-javascript-converting-an-array-of-objects-to-an-object-ec579cafbfc7
function updateAttributesNvalues(input, output, currentRow, currentObj) {
  header = input[0];
  rowAttributes = currentRow.slice(3);
  if (rowAttributes.length > 0) {
      row = {};
     rowAttributes.forEach((value) => {
          if (value !== "") {
              key = input[0][currentRow.indexOf(value)];
              row[key] = value;
          }
      });
      //console.log("row",row)
      return row;
  }
}

function getChildren(input, output, currentRow, currentObj, d) { 
  if (!children) { var children = {}; }
  for (i = 0; i < input.length; i++) { 
//we can think of creating a 2d array of child Row and sending it for recusing to the main code.
      if (input[i][1] === d + 1 && input[i][2] ===currentRow[3]) {
         
          if (input[i][4] === 'Object') {
              childObj = {};
              // console.log("child found", input[i], "for", currentObj)
              children[input[i][3]] = updateAttributesNvalues(input, output, input[i], nwObj);
            //  input.splice(i, 1);
            //  console.log(input)
            //  children[currentRow[3]] = { ...getChildren(input, output, currentRow, nwObj, d) };
           
          } else if (input[i][4] === 'Array') {
              nwObj = [];
            //  nwObj.push(updateAttributesNvalues(input, output, input[i], nwObj));
            //  getChildren(input, output, input[i], nwObj, d);
            //  console.log(nwObj);

          } else if (input[i][4] === 'String') {
              // nwObj = [];
              // nwObj.push(updateAttributesNvalues(input, output, input[i], nwObj));
              // getChildren(input, output, input[i], nwObj, d);
            //  console.log("String Found ", input[i]);
          }
      }
  }

 // console.log("Children",children);
  return children;
}
let fpp = [];
function arr2json2(input, output, depth, parentName, parent) {
  if (!output) { output = {}; }
  if (!parentName) { parentName = 'root'; }
  const maxDepth = Math.max(...splitArray(input, 2));
  if (!depth) { depth = 1; }

  // for (let i = 0; i < input.length; i++) {
  //   const type = input[i][4];

  //   if (input[i][1] === 1 && input[i][2] === 'root') {
  //     if (type === 'Object') {
  //       output[input[i][3]] = {};
  //     } else if (type === 'Array') {
  //       output[input[i][3]] = [];
  //     } else if (type === 'String') {
  //       output[input[i][3]] = '';
  //     }   
  //   }
  // }

  // if (depth > maxDepth) return output;

  // let maxD = 0;
  // let index = 0;

  // for (let i = 0; i < input.length; i++) {
  //   if (input[i][0] === 'id') continue;
  //   if (input[i][1] >= maxD) {
  //     maxD = input[i][1];
  //     index = i;
  //   } else {
  //     break;
  //   }
  // }

  // const newArr = input.slice(1, index + 1);
  // console.log('newArr', newArr);

  // const newObj = {};

  // const maxV = Math.max(...splitArray(newArr, 2));
  // const options = [];

  // for (let i = 0; i < newArr.length; i++) {
  //   if (newArr[i][1] === maxV) options.push(newArr[i][3])
  // }

  // console.log('elemets', elemets);

  // for (let i = 0; i < newArr.length; i++) {
  //   if (!newObj[newArr[2]]) {
  //     const type = newArr[i][4];

  //     if (type === 'Object') {
  //       newObj[newArr[i][3]] = {};
  //     } else if (type === 'Array') {
  //       newObj[newArr[i][3]] = [];
  //     } else if (type === 'String') {
  //       newObj[newArr[i][3]] = '';
  //     }      
  //   }
  // }

  // console.log('newObj', newObj)

  // for (let i = 0; i < input.length; i ++) {
  //   if (input[i][1] === maxDepth) {
  //     elemets.push(input[i]);
  //   } 
  // }

  // for (let i = 0; i < input.length; i ++) {
  //   if (input[i][0] === 'id') continue;
  //   if (input[i][1] === depth && input[i][2] === parent) elemets.push(input[i]);
  // }

  // console.log('elemets', elemets);

  // for (let i = 0; i < elemets.length; i++) {
  //   const type = elemets[i][4];

  //   if (parent === 'root') {
      // if (type === 'Object') {
      //   output[elemets[i][3]] = {};
      // } else if (type === 'Array') {
      //   output[elemets[i][3]] = [];
      // } else if (type === 'String') {
      //   output[elemets[i][3]] = '';
      // }
  //   } else {
  //     if (type === 'Object') {
  //       output[parent][elemets[i][3]] = {};
  //     } else if (type === 'Array') {
  //       output[parent][elemets[i][3]] = [];
  //     } else if (type === 'String') {
  //       output[parent][elemets[i][3]] = '';
  //     }
  //   }
  // }

  // arr2json2(input, output, depth + 1, 'quiz');

  // const elem = input.find(elem => elem[1] === 1);
  // if (elem) {
  //   const type = elem[4];

  //   if (type === 'String') {
  //     output[elem[3]] = '';
  //   } else if (type === 'Array') {
  //     output[elem[3]] === [];
  //   } else if (type === 'Object') {
  //     output[elem[3]] = {}
  //   }
  // }

  // console.log('output', output);
  // console.log(updateAttributesNvalues(input, output, input[1], {}))
  // console.log({ ... getChildren(input, output, input[1], {}, 2)  })
  //const maxDepth = Math.max(...splitArray(input, 2));
  // console.log("maxDepth", maxDepth)

  // for (d = 1; d <= maxDepth; d++) {
  //     console.log("iterating at depeth",d)
  //     for (i = 1; i < input.length; i++) { 
  //         if (input[i][1] === d) { 
  //             currentRow = input[i];
              
  //             if (input[i][4] === 'Object') {
  //                 nwObj = {};
                 
  //                 nwObj[input[i][3]] = updateAttributesNvalues(input, output, currentRow, nwObj);
  //                 nwObj[currentRow[3]] = { ... getChildren(input, output, currentRow, nwObj, d)  };
  //                 console.log("NewObj with children", nwObj);
                  
                 
  //             } else if (input[i][4] === 'Array') {
  //                 nwObj = [];
  //                 console.log("Array Found ", input[i]);
  //               //  nwObj.push(updateAttributesNvalues(input, output, input[i], nwObj));
  //                // getChildren(input, output, input[i], nwObj, d);
  //                 console.log(nwObj);

  //             } else if (input[i][4] === 'String') {
  //                 // nwObj = [];
  //                 // nwObj.push(updateAttributesNvalues(input, output, input[i], nwObj));
  //                 // getChildren(input, output, input[i], nwObj, d);
  //               console.log("String Found ",input[i]);
  //             } 
  //         }
  //     }
  // }


  // for (let d = 1; d <= maxDepth; d++) {
  //   for (let i = 0; i < input.length; i++) {
  //     const currentRow = input[i];
  //     const type = currentRow[4];

  //     if (type === 'Object') {
  //       let newObj = {};



  //       console.log('newObj', newObj);
  //     } else if (type === 'Array') {
  //       const newArr = [];

  //     } else if (type === 'String') {
  //       let newStr = '';
  //     }
  //   }
  // }

  const v = input.reduce((acc, val, i, arr) => {
    if (val[0] === 'id') return acc;

    const type = val[4];

    if (val[2] === 'root') {
      if (type === 'String') {
        acc[val[3]] = '';
      } else if (type === 'Array') {
        acc[val[3]] === [];
      } else if (type === 'Object') {
        acc[val[3]] = {}
      }

      return acc;
    }

    let parentObj;

    const fullPath = getPath(acc, val[2]);

    if (fullPath.length > 0) {
      // console.log('acc', acc)
      // console.log('fullPath', fullPath);
      parentObj = getParent(acc, val[2], fullPath);

      if (type === 'String') {
        parentObj[val[3]] = '';
      } else if (type === 'Array') {
        parentObj[val[3]] === [];
      } else if (type === 'Object') {
        parentObj[val[3]] = {}
      }

      const newF = setItemInParent(acc, val[2], parentObj, fullPath);
      console.log('fullPath', fullPath);
      console.log('newF', newF);
      return newF;
    }

    return acc;
  }, {});

  // console.log(output)
  return output;
}

/**
 * Function for set item in object
 * 
 * @param {object} obj 
 * @param {string} parent 
 * @param {any} item 
 * @param {Array<string>} fullPath 
 * 
 * @return object
 */
function setItemInParent(obj, parent, item, fullPath) {
  const newObj = {...obj}
  if (Object.keys(obj)[0] === parent) {
    newObj[parent] = {
      ...newObj[parent],
      ...item,
    };

    return newObj;
  } else {
    return setItemInParent(newObj[fullPath[0]], parent, item, fullPath.slice(1));
  }
}

/**
 * Function for get parent item of object
 * 
 * @param {object} obj 
 * @param {string} parent 
 * @param {Array<string>} fullPath 
 * 
 * @return parentObj
 */
function getParent(obj, parent, fullPath) {
  console.log('obj', obj);
  console.log('parent', parent);
  console.log('fullPath', fullPath);

  if (Object.keys(obj)[0] === parent) {
    return obj[parent];
  } else {
    return getParent(obj[fullPath[0]], parent, fullPath.slice(1));
  }
}

function getPath(obj, _key) {
  if(obj.constructor !== Object) {
      throw new TypeError('getPath() can only operate on object with Object as constructor');
  }
  var path = [];
  var found = false;

  function search(haystack) {
      for (var key in haystack) {
          path.push(key);
         
          if(key === _key) {
              found = true;
              break;
          }

          if(haystack[key].constructor === Object) {
              search(haystack[key]);
              if(found) break;
          }

          path.pop();
      }
  }

  search(obj);
  return path;
}

function fullPathToParent(obj, parent, _fullPath) {
  const fullPath = [];

  if (_fullPath && _fullPath[_fullPath.length - 1] === parent) {
    return _fullPath;
    fpp = _fullPath
  } else {
    const keys = Object.keys(obj);

    for (let i = 0; i < keys.length; i++) {
      if (parent === keys[i]) {
        fullPath.push(keys[i]);
  
        return fullPath;
      }
    }

    // for (let i = 0; i < keys.length; i++) {
    //   fullPath.push(keys[i]);
    //   return fullPathToParent(obj, parent, fullPath);
    // }
    return fullPath;
    // return fullPathToParent(obj, parent, fullPath);
  }

  // const keys = Object.keys(obj);

  // for (let i = 0; i < keys.length; i++) {
  //   if (parent === keys[i]) {
  //     fullPath.push(keys[i]);

  //     return fullPath;
  //   }

  //   // if (parent === keys[i]) {
  //   //   fullPath.push(keys[i]);
  //   // }
  // }

  // for (let i = 0; i < keys.length; i++) {
  //   fullPath.push(keys[i]);
  //   const fP = fullPathToParent(obj, parent, fullPath);
  // }

  // return fullPath;
}

function searchInObj(obj, search) {
  const keys = Object.keys(obj);

  for (let i = 0; i < keys.length; i++) {
    if (keys[i] === search) {}
  }
}

//This function takes an array as input and extract a column as a return array
function splitArray(input, column) { 
  const output = [];
  for (i = 1; i < input.length; i++) {
      output.push(input[i][1]);
  }

//  console.log(output);
  return output;
}


function createRowObject(input, output, currentRow) { 
 
  if (currentRow[4] === 'Object') {
      nwObj = {};
     
  }
  if (currentRow[4] === 'Array') {
      nwObj = [];
  }

  return nwObj;
}

