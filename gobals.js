/**
 * Global - no window
 * __dirname -get directors name
 * __filename- get file path
 * require - function to use modules
 * module -info about current module
 * process - info about env
 */

console.log(process);

setInterval(() => {
    console.log(__filename);
}, 1000)