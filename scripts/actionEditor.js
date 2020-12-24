
var actionEditor = document.getElementById("ehhActionEditor");

actionEditor.addEventListener('keydown', refresh);
actionEditor.addEventListener('keyup', refresh);

var jsonSyantax = ["{","}"]

function refresh(e) { 
    var actionEditor = document.getElementById("ehhActionEditor");
    var output = document.getElementById("output");
 //   console.log(e.key, e.code)
  //  console.log(actionEditor.value)
    var buffer = actionEditor.value;
    processBuffer(e,buffer);
 //   console.log(buffer);
    output.innerHTML = buffer;
}

function processBuffer(event, input) {
   // console.log(event.key, event.which,input)
    //detect Short Cut....Look Up Short Dic..Execute Command
    //Detect Sytax 

    console.log(validate.isOneof(event.key,jsonSyantax))
}
function executeRule(validation, callbackIfTrue, CallBackIfFalse) { 
    
}


class validate {
    static isEqual(a, b, key, value) {
        return a === b ? true : false;
    }
    static isEmpty(a) {
        return Object.keys(obj).length === 0 ? true : false;
    }
    static isOneof(a, b, key, value) {
        console.log(a,b)
      return b.indexOf(a) > -1 ? true : false;
    }
   
    static hasAllof(a, b) {

    }
    static numberValidator(factValue) {
        return Number.parseFloat(factValue).toString() !== 'NaN'
    }

}
// console.log(output)
// function compile() {
//     var html = document.getElementById("html");
//     var css = document.getElementById("css");
//     var js = document.getElementById("js");
//     var code = document.getElementById("code").contentWindow.document;

//     document.body.onkeyup = function () {
//         code.open();
//         code.writeln(
//             html.value +
//             "<style>" +
//             css.value +
//             "</style>" +
//             "<script>" +
//             js.value +
//             "</script>"
//         );
//         code.close();
//     };
// }

// compile();