//1. create Model / NamedRange /Sheet for Object of use in sheet service >>Spreadsheet Resource . Eg Spreadsheet , namedRange , Sheet, range,cell.
//Sheet Helper Functions 

var ssId = "1sOAYeOP87x-G9-T-05J2IJ7Y99dG8uokGWwz9zEo_bM";




class processSheetNamedRange{
  static createNamedRange(){
  }
  
 
  //This function returns the an array of NamedRanges along with the requested AttributesOrProperty, majorly used for processing of NamedRanges. Options to be configured 
  static getNamedRanges(){
    var namedRanges = SpreadsheetApp.openById(ssId).getNamedRanges().forEach(function(namedRange,index){
      console.log(namedRange);
  });
    return namedRanges;
 
  }
  static getNamedRange(SheetID, NamedRangeIdOrName, range){
  }
  
static getNamedRangeValues() {
  var spreadsheetId = '1BxiMVs0XRA5nFMdKvBdBZjgmUUqptlbs74OgvE2upms';
  var rangeName = 'Class Data!A2:E';
  var values = Sheets.Spreadsheets.Values.get(spreadsheetId, rangeName).values;
  if (!values) {
    Logger.log('No data found.');
  } else {
    Logger.log('Name, Major:');
    for (var row = 0; row < values.length; row++) {
      // Print columns A and E, which correspond to indices 0 and 4.
      Logger.log(' - %s, %s', values[row][0], values[row][4]);
    }
  }
}
  static updateNamedRange(){
  }
  static deleteNamedRange(){
  }
}


function processRequest(request){
 
  
  var request = {
    resourceId : ssId,
    resourceService : 'SpreadsheetApp',
    resourceCommand : 'openById',
    request : 'getNamedRanges()',
    requestAttributes : {
      name : '',
      namedRangeID : ''
  }
}
  
  

var namedRangess = processSheetNamedRange.getNamedRanges();
console.log(namedRangess)


//  console.log(request.resourceService)
//  var resourceService = request.resourceService;
//  console.log(request.resourceCommand);
//  var resourceCommand = request.resourceCommand(request.resourceId);
//  var request = request.request;
//  var response = resourceService.resourceCommand.request;
//console.log(request)

}