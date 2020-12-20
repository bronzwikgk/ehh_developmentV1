var data = {
    first: "firstName",
    last: "lastName",
    phoneNumber: "phoneNumber",
    city: "city",
};
var resourceUrl = "https://docs.google.com/spreadsheets/d/1mBZJ01Ddhl9fByyJ5K-JEsruO7XV51i7ctdnRJ6-hGk/edit#gid=1449573075";
const serviceUrl = "https://script.google.com/macros/s/AKfycbxeONL9wDhS1GOnHJapV-67BMKFQk-k9WMA5m4C77mROTCipMQ/exec";
let url = serviceUrl;
request = {
    method: 'GET',
    body: JSON.stringify(data)
}

