# [ETL Pipeline] Data brokering with Node.js 

### Repository structure
```
.
├── extract.js
├── load.js
├── package-lock.json
├── package.json
├── pipeline.js
└── transform.js
```

`pipeline.js` - orchestrates the extract, transform, and load steps of an ETL pipeline  
`extract.js` - extracts data from the source (currently [TAP service](https://exoplanetarchive.ipac.caltech.edu/docs/TAP/usingTAP.html) from NASA's [exoplanets API](https://exoplanetarchive.ipac.caltech.edu/index.html) is queried)  
`transform.js` - transforms the data obtained from the TAP service
`load.js` - loads the transformed output into a JSON file  
`output.json` - is the final output of the ETL pipeline. This file is gitignored  

### Run the pipeline
```
npm install -y
node pipeline.js
```