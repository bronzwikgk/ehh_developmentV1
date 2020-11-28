/**
 * https://github.com/substack/js-traverse/blob/master/index.js
 * https://tybarts.wordpress.com/2016/01/26/how-do-you-loop-through-a-complex-json-tree-of-objects-and-arrays-in-javascript/#home
* general function to walk through a branch
* @param {object} parent the head of the branch
* @param {function} nodeFunction what to do with the node
* @param {function} getChildrenFunctiontion how to get the children
* @param {number} depth optional depth of node
* @return {object} the parent for chaining
*/
function traverseTree (parent, nodeFunction, getChildrenFunction, depth) {
  
  depth = depth || 0;
  // if still some to do
  if (parent) {
    
    // do something with the header
    nodeFunction (parent, depth++);
    
    // process the children
    (getChildrenFunction(parent) || []).forEach ( function (d) {
      traverseTree (d , nodeFunction , getChildrenFunction, depth);
    });
    
  }
  return parent;
}


////

function forIn(obj, fn, thisObj){
    var key, i = 0;
    for (key in obj) {
        console.log(key,obj)
      if (exec(fn, obj, key, thisObj) === false) {
          console.log(key,obj)
        break;
      }
    }
    function exec(fn, obj, key, thisObj){
      console.log(key,obj)
      return fn.call(thisObj, obj[key], key, obj);
    }
    return forIn;
  }
  

////
function traverse(x, level) {
  if (isArray(x)) {
    traverseArray(x, level);
  } else if ((typeof x === 'object') && (x !== null)) {
    traverseObject(x, level);
  } else {
    console.log(level + x);
  }
}

function isArray(o) {
  return Object.prototype.toString.call(o) === '[object Array]';
}

function traverseArray(arr, level) {
  console.log(level + "<array>");
  arr.forEach(function(x) {
    traverse(x, level + "  ");
  });
}

function traverseObject(obj, level) {
  console.log(level + "<object>");
  for (var key in obj) {
    if (obj.hasOwnProperty(key)) {
      console.log(level + "  " + key + ":");
      traverse(obj[key], level + "    ");
    }
  }
}



//////
/**
 * An object forEach. Calls |f| with each (key, value) pair of |obj|, using
 * |self| as the target.
 * @param {Object} obj The object to iterate over.
 * @param {function} f The function to call in each iteration.
 * @param {Object} self The object to use as |this| in each function call.
 */
function forEach(obj, f, self) {
  for (var key in obj) {
    if ($Object.hasOwnProperty(obj, key))
      $Function.call(f, self, key, obj[key]);
  }
}




function findByProp(o, prop, val, retprop) {
  if (o == null) return false;
  if (o[prop] === val) {
    return (retprop) ? o[retprop] : o;
  }
  var result, p;
  for (p in o) {
    if (o.hasOwnProperty(p) && typeof o[p] === 'object') {
      result = findByProp(o[p], prop, val);
      if (result) {
        return (retprop) ? result[retprop] : result;
      }
    }
  }
  return (retprop) ? result[retprop] : result;
}



function findById(o, id) {
  //Early return
  if (o.id === id) {
    return o;
  }
  var result, p;
  for (p in o) {
    if (o.hasOwnProperty(p) && typeof o[p] === 'object') {
      result = findById(o[p], id);
      if (result) {
        return result;
      }
    }
  }
  return result;
}



var forEach = function (collection, callback, scope) {
  if (Object.prototype.toString.call(collection) === '[object Object]') {
    for (var prop in collection) {
      if (Object.prototype.hasOwnProperty.call(collection, prop)) {
        callback.call(scope, collection[prop], prop, collection);
      }
    }
  } else {
    for (var i = 0, len = collection.length; i < len; i++) {
      callback.call(scope, collection[i], i, collection);
    }
  }
};