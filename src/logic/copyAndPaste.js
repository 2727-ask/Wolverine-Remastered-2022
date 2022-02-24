const fs = require('fs');
function copyAndPaste(source, destination) {
    fs.copyFile(source, destination, (err) => {
        if (err) throw err;
        console.log('File Copy Successfully.');
    });
}
export default copyAndPaste;