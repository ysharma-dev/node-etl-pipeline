const fs = require('fs').promises

const loadFunction = (transformedData, outputFilePath) => {
    if(!outputFilePath) {
        throw new Error("Filepath required as second argument")
    }
    return fs.writeFile(outputFilePath, JSON.stringify(transformedData, null, 2))
}

module.exports = { loadFunction }