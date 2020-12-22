console.log("client is up");

function iterateNode(node,callback) { 
    if (node.hasChildNodes()) {
        node.ChildNodes.forEach(iterateNode)
    } else if (node.nodeType === Text.TEXT_NODE) { 
        console.log("doSomething");
    }
}




function KeyPressHappened(e) {
    if (!e) e = window.event;
    var code;
    if ((e.charCode) && (e.keyCode == 0)) {

        code = e.charCode
        
    } else {
        code = e.keyCode;
    }
    console.log(code)

}

document.onkeypress = KeyPressHappened;