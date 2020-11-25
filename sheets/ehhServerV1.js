let deployedUrl ="https://script.google.com/macros/s/AKfycbw5ms6neWmUKNUilhwQpqtD8p62lEpsbaVWnp5tvUJnf0XrUk09/exec";


function doGet() {
  
  const response = [ { status : "cool!"}];  
  return ContentService
  .createTextOutput(JSON.stringify(response))
  .setMimeType(ContentService.MimeType.JSON);
  
  
}


function doPost(){



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
