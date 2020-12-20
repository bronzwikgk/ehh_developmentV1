
//This function validates a valid Url, Returns True or false
function isValidUrl(string) {
    try {
        new URL(string);
    } catch (_) {
        return false;
    }

    return true;
}


/** Returns the name of a set property in an object, or else "unknown". */
function getOneOf(object) {
    for (var key in object) {
        return key;
    }
    return 'unknown';
}

//This function validates a valid Url, Returns True or false
function isValidHttpUrl(string) {
    let url;

    try {
        url = new URL(string);
    } catch (_) {
        return false;
    }

    return url.protocol === "http:" || url.protocol === "https:";
}


function isArray(o) {
    return o.length && Object.prototype.toString.call(o) === '[object Array]';
}


function isArrayObject(o) {
    return o.length&&typeof o === "object";
}

/**
* Checks that an HTMLelement has a non-empty `name` and `value` property.
* @param  {Element} element  the element to check
* @return {Bool}             true if the element is an input, false if not
*/
const isValidElement = element => {
    return element.name && element.value;
};

function find(entity, keyTofind) {
    //console.log("finding", keyTofind, "in", entity);
    var result = Object.keys(entity).filter(function (key, index, self) {
        return !key.indexOf(keyTofind);
    });
    return result;
}

function clean(obj) {
    var propNames = Object.getOwnPropertyNames(obj);
    for (var i = 0; i < propNames.length; i++) {
        var propName = propNames[i];
        if (obj[propName] === null || obj[propName] === undefined) {
            delete obj[propName];
        }
    }
    return obj;
}


//this function takes an relative path and returns with an absolute path.
function toAbsolute(relativePath) {
    //const url = new URL(url[, base])
    var absoluteURL = new URL(relativePath, document.baseURI).href
    // console.log(absoluteURL);
    return absoluteURL;
    //=> "https://stackoverflow.com/questions/mypath"
}

//helper Function to get the name protoNameof an entity
function getEntityType(entity) {
    return Object.getPrototypeOf(entity).constructor.name;//entity.__proto__.constructor.name
}

function save(entity, keyTitle) {
    // console.log("saving", keyTitle, JSON.stringify(entity));
    window.localStorage.setItem(keyTitle, JSON.stringify(entity));
}

//https://stackoverflow.com/questions/3710204/how-to-check-if-a-string-is-a-valid-json-string-in-javascript-without-using-try 
// var validjsontext = '{"firstnam":"James","surname":"Bond","mobile":["007-700-007","001-007-007-0007"]}'; 
// var invalidjsontext = '{"firstnam""James","surname":"Bond","mobile":["007-700-007","001-007-007-0007"]}'; 
// console.log("With Valid JSON Text: "+IsValidJSONString(validjsontext));
// console.log("With inValid JSON Text: "+IsValidJSONString(invalidjsontext));

function IsValidJSONString(str) {
    try {
        JSON.parse(str);
    } catch (e) {
        return false;
    }
    return true;
}

function containsFiles(event) {

    if (event.dataTransfer.types) {
        for (var i = 0; i < event.dataTransfer.types.length; i++) {
            if (event.dataTransfer.types[i] == "Files") {
                return true;
            }
        }
    }
    return false;
}

/** 
 * Returns true if the given test value is an object; false otherwise.
 */
function isObject_(test) {
    return Object.prototype.toString.call(test) === '[object Object]';
}

/** 
 * Returns true if the given test value is an array containing at least one object; false otherwise.
 */
function isObjectArray_(test) {
    for (var i = 0; i < test.length; i++) {
        if (isObject_(test[i])) {
            return true;
        }
    }

    return false;
}



const items = [1, false, "Devsage", 3.14]

function Iterator(Array)
{
    this.Array = Array
  this.index = 0
}


Iterator.prototype = {
  hasNext: function()
  {
    return this.index < this.items.length
  },
  next: function()
  {
    return this.items[this.index++]
  }
}

// const iter = new Iterator(items)

// console.log(iter.hasNext())

// while(iter.hasNext())
//   console.log(iter.next())

// console.log(iter.hasNext())




class dataHelpers { 
    //This function compares two array's
    static compare2Array(arr1, arr2) {
        arr1.sort(); arr2.sort();
        if (arr1.length !== arr2.length) return false;
        for (let i = 0; i < arr2.length; i++) {
            if (arr[i] !== arr2[i]) return false;
        }
        return true;
    }
}

//This function validates a valid Url, Returns True or false
function isValidUrl(string) {
    try {
        new URL(string);
    } catch (_) {
        return false;
    }

    return true;
}




//javascript create JSON object from two dimensional Array
function arrayToJSONObject(arr) {
    //header
    var keys = arr[0];
    output = {}
    //vacate keys from main array
    var newArr = arr.slice(1, arr.length);

    var formatted = [],
        data = newArr,
        cols = keys,
        l = cols.length;
    for (var i = 0; i < data.length; i++) {
        var d = data[i],
            o = {};
        for (var j = 0; j < l; j++)
            o[cols[j]] = d[j];
        output[d] = o;

    }
    return output;
}