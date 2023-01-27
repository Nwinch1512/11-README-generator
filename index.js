const fs = require("fs");
const inquirer = require("inquirer");

const generateMarkdown = require("./utils/generateMarkdown");
const util = require("util");

const createFileAsync = util.promisify(fs.writeFile);

// array of questions for user
const questions = [
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
    type: "list",
    name: "license",
    message: "What type of license do you have?  Use arrow keys",
    choices: [
      "Apache 2.0 License",
      "Boost Software License 1.0",
      "BSD 3-Clause License",
      "BSD 2-Clause License",
      "CC0",
      "CC0 1.0",
      "Attribution 4.0 International",
      "CC BY 4.0",
      "Attribution-ShareAlike 4.0 International",
      "CC BY-SA 4.0",
      "Attribution-NonCommercial 4.0 International",
      "CC BY-NC 4.0",
      "Attribution-NoDerivates 4.0 International",
      "CC BY-ND 4.0",
      "Attribution-NonCommmercial-ShareAlike 4.0 International",
      "CC BY-NC-SA 4.0",
      "Attribution-NonCommercial-NoDerivatives 4.0 International",
      "CC BY-NC-ND 4.0",
      "Eclipse Public License 1.0",
      "GNU GPL v3",
      "GNU GPL v2",
      "GNU AGPL v3",
      "GNU LGPL v3",
      "GNU FDL v1.3",
      "The Hippocratic License 2.1",
      "The Hippocratic License 3.0",
      "IBM Public License Version 1.0",
      "ISC License (ISC)",
      "MIT",
      "Mozilla Public License 2.0",
      "Attribution License (BY)",
      "Open Database License (ODbL)",
      "Public Domain Dedication and License (PDDL)",
      "The Perl License",
      "The Artistic License 2.0",
      "SIL Open Font License 1.1",
      "Unlicense",
      "WTFPL",
      "Zlib",
    ],
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
    name: "email",
    message: "Enter your email address",
  },
];

// Arrow function to initiate questions prompt in Node JS
const init = () => inquirer.prompt([...questions]);

init()
  .then((data) => {
    const README = generateMarkdown(data);
    return createFileAsync("README.md", README);
  })
  .catch((err) => console.error(err));
