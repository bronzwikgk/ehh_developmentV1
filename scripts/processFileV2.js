

class processFiles{
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



}
