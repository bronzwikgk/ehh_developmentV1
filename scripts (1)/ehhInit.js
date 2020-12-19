//ehhInit takes care of all the setup or initialising task, when served over HTTP.
//this is similar ot onInstall for a chrome Extension or webApp.
//List of function and features
// Detect Features from the Config.Json
//Set Nessecary Key's in LocalStorage
//Init Listeners
//init Dom..Assingn a ID to each element of Dom.


window.onload = OnLoad();
function OnLoad(e) {
    //window storage == session storage
    console.log("ehh is running! on >>>", window.document.title, window.document.location.origin);
    var listeners = createListeners(this);
}