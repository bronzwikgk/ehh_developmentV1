//this file creates adequate listerners required at run time.
//In development mode it also loggs performance and memory in selected console.
//https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener

//to be part of event Conductor.
window.onload = onLoad;

var eId = 0;
function onLoad(e){
    let docBody = window.document.getElementsByTagName("body")[0];
    if(!docBody.querySelector("ehh")){
        console.log("ehh tag not present")
        createElement(e, "ehh", docBody);
    }
   // console.log(docBody);
    let listeners = createEhhlisteners(this, 'on');
}

console.log("ehh is running!");
console.log(window.document.title);

let eventSource =  ["window","document","element", "image","video","device"];
let eventTrigger = ["mouse", "window", "ehh", "HTTP", "keyBoard"];

let resigteredListeners = {
    "onClick":{},
    "onMouseDown":{}
}
var event = {
    "origin": ["mouse", "window", "ehh", "HTTP", "keyBoard"],
    "eventState": {
        "currentState": "mouseMove",
        "previousState": "mouseDown",
        "predictNextState": ""
    }


}


i=0;

 //console.log(Object(events));
   // const arr = Object.entries(events);
    //console.log(arr.length);

function createEhhlisteners(events, searchKey) {
    
    var eventsArr = find(events,searchKey);
    //console.log(eventsArr);
    eventsArr.forEach(createListeners,event);
     save(eventsArr,this.constructor.name);
  console.log("listernes created & Saved to local storagea at ", new Date().toLocaleString().replace(',', ''), this.constructor.name);

}

//need to get each Listerner as an Object, Need memory and performance assesment as well.
function createListeners(event) {
    mD = false;
    mM = false;
    mU = true;
    document[event] = onEvent;
       //var ehhEvent = window.addEventListener(event, onEvent);
         //console.log("event Created",ehhEvent);
       //window[entity] = onEvent;
}


//this function acts like a event conductor, read it's event command mapp from a json file, which mapps 
//Ignore Events from Json to be implemented
//https://github.com/philipwalton/router/blob/master/index.js
function onEvent(e) {
      
  //  console.log(e.type);
   // console.log(curEvent,preEvent);
    if (e.type === 'onload') {
        console.log("loadEventFound")
    }

    if (e.constructor.name === 'PointerEvent' || e.type === 'selectstart' || e.type === 'selectionchange' || e.type === 'click'){
        return;
    }
    //console.log(e.constructor.name, e.type, "captured", e.target.constructor.name);
    //need better Logic, which works universally.//Output is not consistent.
   

    if(e.type==='mousedown'){
        mD = true;
        mM = false;  
    }
    if (e.type === 'mousemove') {
        mM = true;
   // console.log("mouseMove",mM)
    }
    if(e.type === 'mouseup'){
        mU =true; mD = false; mM = false;           
         console.log("mouseUp");
    }


  if(mD&&mM){
      createElement(e);
    console.log("mouseDown",mD,"mouseMove",mM,"clickNDraw");
  }



}



// Clear All //Clear Key to be implemented.

function clearStorage() {
    if (confirm("Are you sure you want to create a new text? This will erase all the content.")) {
        window.localStorage.clear();
        document.getElementById("content").innerHTML = "<p>Once upon a time...✏️</p>";
        location.reload();
    }
}

function registerDom(document) {
    var nodes = [];
    document.documentElement.querySelectorAll('*').forEach(function (node) {
        nodes.push(node.outerHTML);
    });
    save(nodes, document.title + "dom for session storage");

}



var mutationObserver = new MutationObserver(function (mutations) {
    mutations.forEach(function (mutation) {
        console.log(mutation);
    });
});