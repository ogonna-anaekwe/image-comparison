// reads files in the file system
const fs = require('fs');
// encodes/decodes jpeg images
const JPEG = require('jpeg-js');
var Buffer = require('buffer/').Buffer;

/**
 * Reads image paths from csv file, get the buffers of the respective
 * images, and then decode to JPEG
 * @param {object} row 
 */
const getImages = async (row) => {
    // // extract path to the image from the first and second
    // // field of each row in the csv file
    const imageOnePath = Object.values(row)[0];
    const imageTwoPath = Object.values(row)[1];

    // read file
    const imageOne = fs.readFileSync(imageOnePath);
    const imageTwo = fs.readFileSync(imageTwoPath);

    // convert to buffer (helps make the difference between different image formats immaterial)
    // afterwards, create a buffer for each file and decode jpeg from buffer
    const imageOneJPEG = JPEG.decode(Buffer.from(imageOne));
    const imageTwoJPEG = JPEG.decode(Buffer.from(imageTwo));

    return { imageOnePath, imageTwoPath, imageOneJPEG, imageTwoJPEG };
};

module.exports = getImages;