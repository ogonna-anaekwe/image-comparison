# About
A simple image comparison program written in **Node.js**

# Requirements
- Homebrew (for macOS or Linux)
- NPM
- Node

To install Homebrew, run the following in your terminal
```/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install.sh)"```

To install Node and NPM, run the following in your terminal
```brew install node```

Confirm that **node** and **npm** are installed correctly by running
```node -v``` and ```node -npm```

Windows users can follow the guide [here](https://guide.freecodecamp.org/javascript/tutorials/how-to-install-node-js-and-npm-on-windows/) to install node and npm

# Running Program
First, ensure you have a csv file on your desktop named **imagesin.csv**. This file should have the absolute path to the images.

Then, follow these steps to run the program,
1. Clone this repo:
```git clone git@github.com:ogonna-anaekwe/image-comparison.git```

2. cd in folder and run ```npm i```

3. run ```npm run dev```

4. In your browser / postman, visit ```http:localhost:8080/version``` to confirm the version of the program. This confirms the program is live. Afterwards, visit ```http:localhost:8080/compare```. This does the image comparison using the **imagesin.csv** file as input, and it outputs **imagesout.csv** to the desktop showing the results of the image comparison.



