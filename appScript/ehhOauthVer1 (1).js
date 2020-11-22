var serversheetId = '1cAbSk2mLzwuLwLgKxX_-Ve8-8UrUgSCWG7qj_OQ7MVM';


function doGet() {
  
  const response = [ { status : "cool!"}];
  
  return ContentService
  .createTextOutput(JSON.stringify(response))
 // .setMimeType(ContentService.MimeType.JSON);
}



function doPost(e){
  //{name : "joe"}

  const body = e.postData.contents;
  const bodyJson = json.parse(body);
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var tab = ss.getSheetByName("test");
  tab.appendRow([bodyJSON.name]);
}

/* INCLUDE HTML PARTS, EG. JAVASCRIPT, CSS, OTHER HTML FILES */
function include(filename) {
  return HtmlService.createHtmlOutputFromFile(filename)
      .getContent();
}

/**
 * Get the URL for the Google Apps Script running as a WebApp.
 */
function getScriptUrl() {
 var url = ScriptApp.getService().getUrl();
 return url;
}


function fetchUrl() {
  var token = ScriptApp.getOAuthToken();
  var apiKey = 'Your-API-Key-Goes-Here';
  var endPoint = 'https://script.googleapis.com/v1/processes';
  var headers = {
    'Accept':'application/json',
    'Authorization': 'Bearer ' + token
  };
  var options = {
    'method': 'GET',
    'headers': headers,
    'muteHttpExceptions': true
  }
  var url = endPoint + '?key=' + apiKey;
  var response = UrlFetchApp.fetch(url, options);
  Logger.log(response);
}