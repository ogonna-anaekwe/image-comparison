// measures execution time
const perf = require('execution-time')();
// reads files in the file system
const fs = require('fs');
// streams csv files
const csv = require('csv-parser');
// controller to write to csv
const csvWriter = require('./csvWriter');
// controller to compare images
const compareImages = require('./compareImages');

/**
 * Writes image comparison results to a csv file that will appear
 * on the device's desktop
 * @param {object} req 
 * @param {object} res 
 */
const getCSVOutput = (req, res) => {
    // specify the filename and headers of 
    // the csv file we'll be writing to
    csvWriter
    
    // container to hold image comparison results
    // this will eventually be written to a csv file
    const dataCSVWrite = []

    // TODO: update this with path to your csv input file
    fs.createReadStream('/Users/Ogonna/Desktop/imagesin.csv')
        .pipe(csv())
        .on('data', async (row) => {
            try {
                // initialize timer as this is when we start reading the contents of the csv file               
                perf.start()
                const { imageOnePath, imageTwoPath, differenceRatio } = await compareImages(row);

                // data to be sent to CSV
                dataCSVWrite.push({
                    imageOne: imageOnePath,
                    imageTwo: imageTwoPath,
                    similar: differenceRatio,
                    elapsed: (perf.stop().time / 1000).toFixed(3)
                });
            } catch (err) {
                console.log(err.message);
                throw err
            }
        })
        .on('end', () => {
            console.log('Successfully retrieved images from csv file');
            try {
                csvWriter.writeRecords(dataCSVWrite)
                    .then(() => {
                        console.log('Successfully compared images and wrote results to csv file');
                        res.status(200).send({ 'result': 'image comparison passed' })
                    });
            } catch (error) {
                res.status(400).send({ 'result': 'image comparison failed' })
                throw error
            }
        });
};

module.exports = getCSVOutput;
