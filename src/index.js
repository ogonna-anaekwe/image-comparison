// to create an express server
const express = require('express');
const app = express();
// to get version of application
const { version }= require('../package.json');
// to write image comparison to csv file
const csvOutput = require('../src/controllers/csvOutput');
// to help access env variables
require('dotenv').config();

// gives version
app.get('/version', (req, res) => {
  res.status(200).json({ version })
  // res.status(200).send('Hello world')
});

// calls the csvOutput controller
app.get('/compare', csvOutput);

const port = process.env.PORT

app.listen(port, () => {
  console.log(`Image Comparison SERVER listening on Port ${port}`)
  console.log('Press Ctrl+C to quit.')
})