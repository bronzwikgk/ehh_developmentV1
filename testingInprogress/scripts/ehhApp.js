{
//ehhApp takes care of all the setup or initialising task, when served over HTTP.
//this is similar ot onInstall for a chrome Extension or webApp.
//List of function and features
// Detect Features from the Config.Json
//Set Nessecary Key's in LocalStorage
//Init Listeners
//init Dom..Assingn a ID to each element of Dom.More like Content/Index scripts file
}


console.log("ehh is Running is up");

window.onload = OnLoad();
function OnLoad(e) {
    sendMessage()
    //window storage == session storage
  //  console.log("ehh is running! on >>>", window.document.title, window.document.location.origin);
   // var response = sendMessage(this)
  //  var listeners = createEhhlisteners(this);
}


function createEhhlisteners(events, searchKey) {
  //  console.log("listernes created & Saved to local storagea at ", new Date().toLocaleString().replace(',', ''), this.constructor.name);
    var eventsArr = find(events, searchKey);
    //console.log(eventsArr);
    eventsArr.forEach(createListeners, event);
 //   save(eventsArr, this.constructor.name);
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

    if (e.constructor.name === 'PointerEvent' || e.type === 'selectstart' || e.type === 'selectionchange' || e.type === 'click') {
        return;
    }
    //console.log(e.constructor.name, e.type, "captured", e.target.constructor.name);
    //need better Logic, which works universally.//Output is not consistent.


    if (e.type === 'mousedown') {
        mD = true;
        mM = false;
    }
    if (e.type === 'mousemove') {
        mM = true;
        // console.log("mouseMove",mM)
    }
    if (e.type === 'mouseup') {
        mU = true; mD = false; mM = false;
        console.log("mouseUp");
    }


    if (mD && mM) {
        createElement(e);
        console.log("mouseDown", mD, "mouseMove", mM, "clickNDraw");
    }



}




// In ContentScript.js
chrome.extension.onMessage.addListener(function (request, sender, sendResponse) {
    if (request.content) {
        sendResponse({ content: "response message" });
        return true; // This is required by a Chrome Extension
    }
})

function sendMessage() { 
    chrome.runtime.sendMessage(data, function (response) { console.log('response', response);});
}
