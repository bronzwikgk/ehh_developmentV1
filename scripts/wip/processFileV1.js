//https://www.digitalocean.com/community/tutorials/js-file-reader
//https://web.dev/file-system-access/
//https://wicg.github.io/file-system-access/#api-showopenfilepicker
//https://developer.mozilla.org/en-US/docs/Web/API/Blob
https://www.html5rocks.com/en/tutorials/file/dndfiles//

const app = {
    appName: 'Text Editor',
    file: {
      handle: null,
      name: null,
      isModified: false,
    },
    options: {
      captureTabs: true,
      fontSize: 14,
      monoSpace: false,
      wordWrap: true,
    },
    hasFSAccess: 'chooseFileSystemEntries' in window ||
                 'showOpenFilePicker' in window,
    isMac: navigator.userAgent.includes('Mac OS X'),
};
  
if (app.hasNativeFS) {
 
 console.log('File System APIs', 'Native');
} else {
  console.log('File System APIs', 'Legacy');
  //gaEvent('File System APIs', 'Legacy');
}


class processFile {

    static getFile(fileHandle,location) {
        [fileHandle] = await window.showOpenFilePicker();
        const file = await fileHandle.getFile();
        const output = await file.text();
        return output;
    }
    static getNewFileHandle() {
        const options = {
          types: [
            {
              description: 'Text Files',
              accept: {
                'text/plain': ['.txt'],
              },
            },
          ],
        };
        const handle = await window.showSaveFilePicker(options);
        return handle;
      }


/**
 * Writes the contents to disk.
 *
 * @param {FileSystemFileHandle} fileHandle File handle to write to.
 * @param {string} contents Contents to write.
 */

 
      static writeFile(fileHandle, contents) {
        // Support for Chrome 82 and earlier.
        if (fileHandle.createWriter) {
          // Create a writer (request permission if necessary).
          const writer = await fileHandle.createWriter();
          // Write the full length of the contents
          await writer.write(0, contents);
          // Close the file and write the contents to disk
          await writer.close();
          return;
        }
        // For Chrome 83 and later.
        // Create a FileSystemWritableFileStream to write to.
        const writable = await fileHandle.createWritable();
        // Write the contents of the file to the stream.
        await writable.write(contents);
        // Close the file and write the contents to disk.
        await writable.close();
      }

      static deleteFile(fileHandle){
        directoryHandle.removeEntry('Abandoned Masterplan.txt')
      }
/**
 * Verify the user has granted permission to read or write to the file, if
 * permission hasn't been granted, request permission.
 *
 * @param {FileSystemFileHandle} fileHandle File handle to check.
 * @param {boolean} withWrite True if write permission should be checked.
 * @return {boolean} True if the user has granted read/write permission.
 */
      static verifyPermission(fileHandle, withWrite) {
        const opts = {};
        if (withWrite) {
          opts.writable = true;
          // For Chrome 86 and later...
          opts.mode = 'readwrite';
        }
        // Check if we already have permission, if so, return true.
        if (await fileHandle.queryPermission(opts) === 'granted') {
          return true;
        }
        // Request permission to the file, if the user grants permission, return true.
        if (await fileHandle.requestPermission(opts) === 'granted') {
          return true;
        }
        // The user did nt grant permission, return false.
        return false;
      }

}
