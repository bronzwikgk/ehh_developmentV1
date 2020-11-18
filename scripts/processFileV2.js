

class processFiles{
    // Some in-memory attributes of the new File objects that will be constructed.
    var fileData = {
    'sample.xml': {
        data: '<test>Hello!</test>',
        type: 'application/xml'
    },
    'sample.csv': {
        data: 'Test1,Test2\nHello1,Hello2',
        type: 'text/csv'
    },
    'sample.json': {
        data: JSON.stringify({ test: 'Hello!' }),
        type: 'application/json'
    }
}
    static verifyPermissions() {
        // Check for the various File API support.
        if (window.File && window.FileReader && window.FileList && window.Blob) {
            console.log("Great success! All the File APIs are supported.");
            return true; // 
        } else {
            alert('The File APIs are not fully supported in this browser.');
            return false; // 
        }
}
static newfile(){
    var file = new File(["foo"], "foo.txt", {
        type: "text/plain",
    });
    var file = new File([fileData[name].data], name, { type: fileData[name].type, lastModified: Date.now() });
    // See http://docs.webplatform.org/wiki/apis/file/URL/createObjectURL
    var url = URL.createObjectURL(file, { oneTimeOnly: true });

}



}
