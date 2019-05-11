const runAll = require("npm-run-all");

runAll(['b-s', "b-c", "serv"], {parallel: true})
    .then(() => {
        console.log("done!");
    })
    .catch(err => {
        console.log("failed!");
    });