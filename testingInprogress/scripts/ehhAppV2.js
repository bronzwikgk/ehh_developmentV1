{
    //ehhApp takes care of all the setup or initialising task, when served over HTTP.
    //this is similar ot onInstall for a chrome Extension or webApp.
    //List of function and features
    // Detect Features from the Config.Json
    //Set Nessecary Key's in LocalStorage
    //Init Listeners
    //init Dom..Assingn a ID to each element of Dom.More like Content/Index scripts file
}

class dataHelpers { 

static find(entity, keyTofind) {
   // console.log("finding", keyTofind, "in", entity);
    var result = Object.keys(entity).filter(function (key, index, self) {
        return !key.indexOf(keyTofind);
    });
    return result;
    }
static isEmpty(obj) {
        for (var prop in obj) {
            if (obj.hasOwnProperty(prop))
                return false;
        }

        return JSON.stringify(obj) === JSON.stringify({});
    }  
}

class localStorageHelpers { 

static save(entity, keyTitle) {
    // console.log("saving", keyTitle, JSON.stringify(entity));
    window.localStorage.setItem(keyTitle, JSON.stringify(entity));
    }
}
//https://github.com/philipwalton/router/blob/master/index.js
class ehhEvent { 
    // this function acts like a event conductor, read it's event command mapp from a json file.Ignore Events from Json to be implemented
    static onEvent(e) {
    // console.log(e.constructor.name, e.type, "captured", e.target.tagName);
    if (e.type === "pageshow") {
    
     //   initState(e);
        // createElement(e); // onmousedown(e); // onmousedown(e); // console.log("body");
    } if (e.constructor.name === "MouseEvent") {
     console.log(e.constructor.name, e.type, "captured", e.target);
        ehhState.changeState(e);
       // createElement(e); // onmousedown(e); // onmousedown(e); // console.log("body");
    }
    }
    static conductEvent(e) {
        if (e.type === "mouseover") {
            mouseOver(e);
            // createElement(e); // onmousedown(e); // onmousedown(e); // console.log("body");
        } else
            if (e.type === "click") {
                // console.log(e.constructor.name, e.type, "captured", e.target.constructor.name);
                click(e);
                // createElement(e); // onmousedown(e); // onmousedown(e); // console.log("body");
            } else {
                if (e.type === "contextmenu") {
                    // console.log(e.constructor.name, e.type, "captured", e.target.constructor.name);
                    //createElement(e); // onmousedown(e); // onmousedown(e); // console.log("body");
                    e.preventDefault();
                    rightClick(e);
                }
            }
    }
}
class app {

    static init(e) {
        console.log(e)
        var listeners = app.createListeners(e);
        var contextElement = document.createElement("INPUT");
        contextElement.setAttribute("type", "checkbox");
//        console.log(checkBox)
        ehhView.appendElement(e, contextElement, document.getElementsByTagName("body")[0]);
        contextElement.style.display = 'none';
        var states = ehhState.initState(e);
    }
    static createListeners(entity) {//   console.log(entity);
    var events = dataHelpers.find(entity, 'on');//  console.log("events Found",events);
    var a = events.forEach(app.create);    // console.log(a);
        localStorageHelpers.save(events, this.constructor.name + "listeners");  // console.log("listernes created & Saved to local storagea at ", new Date().toLocaleString().replace(',', ''), this.constructor.name);
    
    }
    static create(entity) { 
        window[entity] = ehhEvent.onEvent;
    }

    static gotMessage(message, sender, sendResponse) {
        console.log("message recived", message, sender.tab.id)
        sendMessage({ farewell: "goodbye" })
    }

    static sendMessage(recipient, message) {
        chrome.runtime.sendMessage(message, function (response) { console.log('response', response); });

    }
    
    static mouseOver(e) { 



    }
}

class ehhView { 
    //this function takes a 2d array as input and creates a table.
    //Major entities, <table> a table, <tr> a row,<th>  a col,<td> a cell.
    static createTable(tableData) {
    var table = document.createElement('table');
    var tableBody = document.createElement('tbody');
    tableData.forEach(function (rowData) {
        var row = document.createElement('tr');
        rowData.forEach(function (cellData) {
            var cell = document.createElement('td');
            cell.appendChild(document.createTextNode(cellData));
            row.appendChild(cell);
        });
        tableBody.appendChild(row);
    });
    table.appendChild(tableBody);

    return table;
    }
    
//should be able to create. HTML, Canvas,Iframe,Css,Js and everyother type of Element
    static createElement(e, elName,template, parent, defaultCss) {
        const nwEle = document.createElement(elName);
        nwEle.id = elName + eId; eId++;
        nwEle.className = "editable";
        nwEle.style.height = '100%';
        nwEle.style.width = '100%';
        nwEle.style.position = 'absolute';
        nwEle.style.border = '10px solid rgba(122, 122, 122, 0.288)';
        appendElement(e, nwEle, parent);
    }

    static appendElement(e, nwEle, parent, defaultSize) {
    parent.appendChild(nwEle);
  
}

static resize(mm, newElement, startX, startY) {
    //   console.log(newElement);
    var mouseOn = mm.target.tagName;

    if (newElement.className === "resizeable") {
        console.log("resize triggerd");
        //console.log("new element recived", newElement);//   

        var mm = window.addEventListener("mousemove", onmouseMove);  // 

        function onmouseMove(mm) {

            console.log("mouseon", mouseOn)
            var mX = mm.pageX;
            var mY = mm.pageY;
            var r = newElement.getBoundingClientRect();
            console.log(r);
            newElement.style.width = mX - r.left + "px";
            newElement.style.height = mY - r.top + "px";
            console.log(r.left, r.top, mX, mY);

            window.addEventListener("mouseup", onMouseup);

            function onMouseup() {

                window.removeEventListener("mousemove", onmouseMove);
                // console.log("listeners removed")
                window.removeEventListener("mouseup", onMouseup);
                return;
            }
        }

    }
}

}

class ehhState {
    static initState(e) {
    var nodes = [];
    //currentState = e.type;
    document.documentElement.querySelectorAll('*').forEach(function (node) {
        node.setAttribute("currentstate", "inDom"); node.setAttribute("prevstate", "");
        //  console.log(node);
    });
    }   
    static changeState(e) {
    
        var targetElement = e.target;
       console.log("changing state for event");
        // console.log(targetElement);
        let currentState = targetElement.getAttribute('currentstate'); //console.log("current state", currentState);  //console.log("prev state",prevState);
        let prevState = targetElement.getAttribute('prevstate');

        if (prevState === currentState) {
            targetElement.setAttribute('currentstate', e.type); //console.log(prevState);
             // console.log("New State",targetElement);
        //console.log("samestate",targetElement);
    } else {
        targetElement.setAttribute('prevstate', currentState); //console.log(prevState);
        targetElement.setAttribute('currentstate', e.type); //console.log(prevState);
        // console.log("New State",targetElement);
    }
  //  conductEvent(e);
    //console.log(targetElement.getAttributes(prevstate));

    }




}

//chrome.runtime.onStartup.addListener(function () {    // run startup function})
//window.onload = app.init();
window.onload = OnLoad();
function OnLoad(e) {
    //window storage == session storage
    console.log("ehh is running! on >>>", window.document.title, window.document.location.origin);
app.init(this);
}