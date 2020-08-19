const os = require('os');

/**
 * Converts bytes to gigabytes
 * @param {number} bytes 
 */
const toGigaBytes = (bytes) => {
    return bytes / (2**(10*3));
}

/**
 * Displays some OS information in the console.
 */
module.exports.displayInfo = () => {
    const output = `
    SYSTEM MEMORY: ${toGigaBytes(os.totalmem())} GB
    FREE MEMORY: ${toGigaBytes(os.freemem())} GB
    CPU CORES: ${os.cpus().length}
    CPU ARCH: ${os.arch()}
    PLATFORM: ${os.platform()}
    RELEASE: ${os.release()}
    USER: ${os.userInfo().username}
    `;
    console.log(output);
}