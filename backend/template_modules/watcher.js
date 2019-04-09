const fs = require("fs");
let count = 0;

function watcher(pathWatch, callback = function() {}) {
    console.log(`liveReload: ${pathWatch}`)
    return new Promise((resolve, reject) => {
        const watcher = fs.watch(pathWatch, { recursive: true }, (eventType, filename) => {
            watcher.close();
            if (filename) {
                count++;
                console.log(`#${count}  ${filename}`)
                callback(filename)
                return resolve(filename)
            }
        });
    })
}

module.exports = watcher;