



var actionEditor = document.getElementById("ehhActionEditor");

actionEditor.addEventListener('keydown', refresh);

function refresh(e) { 
    var actionEditor = document.getElementById("ehhActionEditor");

    var output = document.getElementById("output");
    console.log(e.key, e.code)
    console.log(actionEditor)

    var buffer = actionEditor.textContent;
    console.log(buffer);
    output.innerHTML = buffer;
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