// template for creating README file
// const fs = require("fs");
// const path = require("path");
// const inquirer = require("inquirer");
// const generateMarkdown = require("./utils/generateMarkdown");

// // array of questions for user
// const questions = [];

// // function to write README file
// function writeToFile(fileName, data) {}

// // function to initialize program
// function init() {}

// // function call to initialize program
// init();

// My first attempt at creating README generator

const inquirer = require("inquirer");
const fs = require("fs");
const util = require("util");

const writeFileAsync = util.promisify(fs.writeFile);

const promptUser = () =>
  inquirer.prompt([
    {
      type: "input",
      name: "title",
      message: "What would you like to call the project?",
    },
    {
      type: "input",
      name: "description",
      message:
        "How would you describe your project?  What is it?  Why did you build it?  How does it solve a problem?",
    },
    {
      type: "input",
      name: "installation",
      message: "Which steps should be taken to install your project?",
    },
    {
      type: "input",
      name: "usage",
      message: "How should your project be used?",
    },
    {
      type: "input",
      name: "contributing",
      message: "Who and what third-party assets contributed to this project?",
    },
    {
      type: "input",
      name: "testing",
      message: "How should this project be tested?",
    },
    {
      type: "input",
      name: "github",
      message: "Enter your GitHub Username",
    },
    {
      type: "input",
      name: "linkedin",
      message: "Enter your LinkedIn URL.",
    },
  ]);

const generateREADME = (answers) =>
  `# Title

  ## Description
  ## Table of Contents
  [Installation](#installation)
  [Usage](#usage)
  [License](#license)
  [Contributing](#contributing)
  [Tests](#tests)
  [Questions](#questions)

  ## Installation
  ## Usage
  ## License
  ## Contributing
  ## Tests
  ## Questions
  
  My GitHub username is ${answers.github}.
  
  [GitHub page](https://github.com/${answers.github}/ "Visit my GitHub page")
 
  My email address is ${answers.email}.

  [Contact Me](mailto:${answers.email})
  
  ## Badges

![badmath](https://img.shields.io/github/languages/top/lernantino/badmath)

`;

promptUser()
  .then((answers) => writeFileAsync("README.md", generateREADME(answers)))
  .then(() => console.log("Successfully wrote to README.md"))
  .catch((err) => console.error(err));
