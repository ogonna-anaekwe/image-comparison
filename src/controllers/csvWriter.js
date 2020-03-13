// writes to csv files
const createCsvWriter = require('csv-writer').createObjectCsvWriter;

const csvWriter = createCsvWriter({
    // path to csv output file
    path: '/Users/Ogonna/Desktop/imagesout.csv',    
    // headers of the csv output file
    header: [
        {
            id: 'imageOne', title: 'image 1' 
        },
        {
            id: 'imageTwo', title: 'image 2' 
        },
        {
            id: 'similar', title: 'similar' 
        },
        {
            id: 'elapsed', title: 'elapsed time (in secs)' 
        },
    ]
});

module.exports = csvWriter;