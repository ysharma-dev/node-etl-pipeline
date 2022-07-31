const path = require('path')

// Imports ETL functions
const extractFunction = require('./extract').extractFunction
const transformFunction = require('./transform').transformFunction
const loadFunction = require('./load').loadFunction

// Set up the ETL pipeline
const startEtlPipeline = async () => {
    try {
        
        // Extract step
        const extractedData = await extractFunction()
        console.log(`Extracted ${extractedData.data.length} objects from the API`)

        // Transform step
        const transformedData = extractedData.data.map( objectToTransform => transformFunction(objectToTransform))

        // Load step
        await loadFunction(transformedData, path.join(__dirname, '/output.json'))
        console.log('Loading was successful, end of pipeline')

    } catch (error) {
        console.log(error)
    }
}

// Start the pipeline
startEtlPipeline()