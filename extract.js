const axios = require('axios')

// Query the data source
const EXO_API_URL = "https://exoplanetarchive.ipac.caltech.edu/TAP/sync"

const extractFunction = () => {
    return axios.get(EXO_API_URL, {
        params: {
            query: "SELECT * FROM ps",
            format: "json"
        },
        responseType: "json"
    })
}

// Export
module.exports = { extractFunction }