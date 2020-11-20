
function getResponse() {
    var requestURL = "https://script.google.com/a/0dot1.live/macros/s/AKfycbxjy_A1pOVpuAEsJDXdnRbsA83S_1oy7Dt81hf0beLL/dev";
    var response = processUrl.fetchUrl(requestURL);
    console.log(JSON.stringify(response));
}

function setPayload() {
    var requestURL = "https://script.google.com/a/0dot1.live/macros/s/AKfycbxjy_A1pOVpuAEsJDXdnRbsA83S_1oy7Dt81hf0beLL/dev";
    var response = processUrl.fetchUrl(requestURL);
    console.log(JSON.stringify(response));
}

document.getElementById("btn").addEventListener("click", getResponse);
document.getElementById("btn2").addEventListener("click", setPayload);
