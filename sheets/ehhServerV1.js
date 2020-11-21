let deployedUrl ="https://script.google.com/a/0dot1.live/macros/s/AKfycbyOQZ3JCvko4kI8_Fr9PoZjJA0ERjQftjHwf70VZwkf/dev";


function doGet() {
  
  const response = [ { status : "cool!"}];  
  return ContentService
  .createTextOutput(JSON.stringify(response))
  .setMimeType(ContentService.MimeType.JSON);
  
  
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
