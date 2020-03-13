# About
A simple image comparison program written in [Node.js](https://nodejs.org/en/).

# Requirements
- [Homebrew (for macOS or Linux)](https://brew.sh/)
- [NPM](https://www.npmjs.com/)
- Node
- Git

To install Homebrew, run the following in your terminal
```/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install.sh)"```

To install Node and NPM, run the following in your terminal
```brew install node```

To install Git, run the following in your terminal ```brew install git```

Confirm that **npm**, **node**, and **git** are installed correctly by running
```node -v``` and ```npm -v``` and ```git -version```. This should give you the version of node, npm, and git installed in your system.

Windows' users can follow this [guide](https://guide.freecodecamp.org/javascript/tutorials/how-to-install-node-js-and-npm-on-windows/) to install node and npm. Also, go [here](https://www.atlassian.com/git/tutorials/install-git#windows) to install git.

# Running Program
First, ensure you have a csv file on your desktop named **imagesin.csv**. This file should have the absolute paths to the images.

Then, follow these steps to run the program,
1. Clone this repo:
```git clone git@github.com:ogonna-anaekwe/image-comparison.git```

2. cd into project folder using ```cd image-comparison``` and run ```npm i```. This will install all the required packages/libraries needed for the program to function.

3. run ```npm run dev```. This starts an express server on port [8080](http://localhost:8080).

4. In your browser / postman, visit ```http:localhost:8080/version``` to confirm the version of the program. This confirms the program is live. Afterwards, visit ```http:localhost:8080/compare```. This does the image comparison using the **imagesin.csv** file as input, and it outputs **imagesout.csv** to the desktop showing the results of the image comparison. The high-level logic for this is described below.

# Program Logic
This program relies on 4 core functions/controllers: ```getImages.js```, ```csvWriter.js```, ```compareImages.js```, and ```csvOutput.js```. All functions are commented.

To get the image comparison results, we call first ping the ```/compare``` endpoint which then calls ```csvOutput.js```. ```csvOutput.js``` does the following:
1. Reads/Parses **imagesin.csv** using ```getImages.js```.
2. Loops through all rows in the csv file above, comparing field one and two (i.e. image 1 and image 2). This gives us the similarity ratio of both images as well as the execution time. This is done using ```compareImages.js```.
3. Writes the results to **imagesout.csv** using the model/format defined by ```csvWriter.js```.

# Note
**Ensure all images have the same height and width**. This is a requirement by the [pixelmatch](https://www.npmjs.com/package/pixelmatch) library which we leverage in comparing images. 

