// compares images and outputs pixel difference between images
const pixelmatch = require('pixelmatch');
// encodes/decodes png images
const PNG = require('pngjs').PNG;
// controller that reads in the image paths from the csv file
const getImages = require('./getImages');

/**
 * Compares images that are read from the csv file
 * @param {object} row 
 */
const compareImages = async (row) => {
    // get path/jpeg of both images
    const { imageOnePath, imageTwoPath, imageOneJPEG, imageTwoJPEG } = await getImages(row);

    // set width and height for difference between both images
    const imageDiff = new PNG({ width: imageOneJPEG.width, height: imageOneJPEG.height });

    // total pixels in imageOneJEG
    const imageOnePixels = imageOneJPEG.width * imageOneJPEG.height;

    // pixel difference between both images
    const pixelDifference = pixelmatch(imageOneJPEG.data, imageTwoJPEG.data, imageDiff.data, imageOneJPEG.width, imageOneJPEG.height, { threshold: 0.1 });

    // pixel difference as a ratio of imageOneJPEG
    const differenceRatio = (pixelDifference / imageOnePixels).toFixed(2);
    return { imageOnePath, imageTwoPath, differenceRatio };
}

module.exports = compareImages;