const fs = require('fs');

/**
 * Reads and prints out the file
 * @param fileName 
 */
module.exports.readAndPrintFileInfo = (fileName) => {
    if(fileName === "") return;
    const filePath = "./" + fileName;
    console.log(filePath);
    fs.readFile(filePath, 'utf-8', (error, content) => {
        if (!error) {
            console.log(content);
        }
    })
};
