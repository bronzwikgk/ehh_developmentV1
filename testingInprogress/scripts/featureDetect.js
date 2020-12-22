"use strict";
if (navigator.bluetooth) {
    document.body.innerHTML =
        "Web Bluetooth appears <strong>available</strong> via navigator.bluetooth." +
        "<p><button onclick='requestDevice()'>Click to attempt a device request.</button>";
} else {
    document.body.innerHTML =
        "Web Bluetooth <strong>not available</strong> via navigator.bluetooth.";
}

function requestDevice() {
    navigator.bluetooth.requestDevice(
        {
            filters: [{ services: ['device_information'] }]
        }).then(requestDeviceSuccess, requestDeviceFailure);
}
function requestDeviceSuccess() {
    document.body.innerHTML += "<p>requestDevice succeeded.";
}
function requestDeviceFailure(error) {
    document.body.innerHTML += "<p>" + error.message;
}