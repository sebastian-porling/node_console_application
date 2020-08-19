const readline = require('readline');
const fileSystem = require('./modules/fileSystem');
const httpServer = require('./modules/httpServer');
const operatingSystem = require('./modules/operatingSystem');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const fileName = 'package.json';
const port = 3000;

const prompt = `
Choose an option:
1.  Read ${fileName}
2.  Display OS info
3.  Start HTTP server
Type a number: `;

/**
 * Promts a question to the user and process the option.
 */
rl.question(prompt, (answer) => {

    switch(answer) {
        case "1":
            console.log("Reading file... \n");
            fileSystem.readAndPrintFileInfo(fileName);
            break;
        case "2":
            console.log("Displaying OS info... \n");
            operatingSystem.displayInfo();
            break;
        case "3":
            console.log("Starting HTTP server... \n");
            httpServer.start(port);
            break;
        default:
            console.log(`Invalid option: ${answer}`);
    }
    rl.close();
});
