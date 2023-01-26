// template for creating README file
// const fs = require("fs");
// const path = require("path");
// const inquirer = require("inquirer");
// const generateMarkdown = require("./utils/generateMarkdown");

// // array of questions for user
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

// // function to write README file
// function writeToFile(fileName, data) {}

// // function to initialize program
// function init() {}

// // function call to initialize program
// init();

// My first attempt at creating README generator
const fs = require("fs");
const path = require("path");
const inquirer = require("inquirer");
const util = require("util");

const writeFileAsync = util.promisify(fs.writeFile);

const licences = {
  "Apache 2.0 License": {
    url: "https://opensource.org/licenses/Apache-2.0",
    imageUrl: "https://img.shields.io/badge/License-Apache_2.0-blue.svg",
  },
  "Boost Software License 1.0": {
    url: "https://www.boost.org/LICENSE_1_0.txt",
    imageUrl: "https://img.shields.io/badge/License-Boost_1.0-lightblue.svg",
  },
  "BSD 3-Clause License": {
    url: "https://opensource.org/licenses/BSD-3-Clause",
    imageUrl: "https://img.shields.io/badge/License-BSD_3--Clause-blue.svg",
  },
  "BSD 2-Clause License": {
    url: "https://opensource.org/licenses/BSD-2-Clause",
    imageUrl: "https://img.shields.io/badge/License-BSD_2--Clause-orange.svg",
  },
  CC0: {
    url: "http://creativecommons.org/publicdomain/zero/1.0/",
    imageUrl: "https://licensebuttons.net/l/zero/1.0/80x15.png",
  },
  "CC0 1.0": {
    url: "http://creativecommons.org/publicdomain/zero/1.0/",
    imageUrl: "https://img.shields.io/badge/License-CC0_1.0-lightgrey.svg",
  },
  "Attribution 4.0 International": {
    url: "https://creativecommons.org/licenses/by/4.0/",
    imageUrl: "https://licensebuttons.net/l/by/4.0/80x15.png",
  },
  "CC BY 4.0": {
    url: "https://creativecommons.org/licenses/by/4.0/",
    imageUrl: "https://img.shields.io/badge/License-CC_BY_4.0-lightgrey.svg",
  },
  "Attribution-ShareAlike 4.0 International": {
    url: "https://creativecommons.org/licenses/by-sa/4.0/",
    imageUrl: "https://licensebuttons.net/l/by-sa/4.0/80x15.png",
  },
  "CC BY-SA 4.0": {
    url: "https://creativecommons.org/licenses/by-sa/4.0/",
    imageUrl:
      "https://img.shields.io/badge/License-CC_BY--SA_4.0-lightgrey.svg",
  },
  "CC BY-NC 4.0": {
    url: "https://creativecommons.org/licenses/by-nc/4.0/",
    imageUrl:
      "https://img.shields.io/badge/License-CC_BY--NC_4.0-lightgrey.svg",
  },
  "Attribution-NoDerivates 4.0 International": {
    url: "https://creativecommons.org/licenses/by-nc/4.0/",
    imageUrl: "https://licensebuttons.net/l/by-nc/4.0/80x15.png",
  },
  "CC BY-ND 4.0": {
    url: "https://creativecommons.org/licenses/by-nc/4.0/",
    imageUrl:
      "https://img.shields.io/badge/License-CC_BY--NC_4.0-lightgrey.svg",
  },
  "Attribution-NonCommmercial-ShareAlike 4.0 International": {
    url: "https://creativecommons.org/licenses/by-nc-sa/4.0/",
    imageUrl: "https://licensebuttons.net/l/by-nc-sa/4.0/80x15.png",
  },
  "CC BY-NC-SA 4.0": {
    url: "https://creativecommons.org/licenses/by-nc-nd/4.0/",
    imageUrl:
      "https://img.shields.io/badge/License-CC_BY--NC--SA_4.0-lightgrey.svg",
  },
  "Attribution-NonCommercial-NoDerivatives 4.0 International": {
    url: "https://creativecommons.org/licenses/by-nc-nd/4.0/",
    imageUrl: "https://licensebuttons.net/l/by-nc-nd/4.0/80x15.png",
  },
  "CC BY-NC-ND 4.0": {
    url: "https://creativecommons.org/licenses/by-nc-nd/4.0/",
    imageUrl:
      "https://img.shields.io/badge/License-CC_BY--NC--ND_4.0-lightgrey.svg",
  },
  "Eclipse Public License 1.0": {
    url: "https://opensource.org/licenses/EPL-1.0",
    imageUrl: "https://img.shields.io/badge/License-EPL_1.0-red.svg",
  },
  "GNU GPL v3": {
    url: "https://www.gnu.org/licenses/gpl-3.0",
    imageUrl: "https://img.shields.io/badge/License-GPLv3-blue.svg",
  },
  "GNU GPL v2": {
    url: "https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html",
    imageUrl: "https://img.shields.io/badge/License-GPL_v2-blue.svg",
  },
  "GNU AGPL v3": {
    url: "https://www.gnu.org/licenses/agpl-3.0",
    imageUrl: "https://img.shields.io/badge/License-AGPL_v3-blue.svg",
  },
  "GNU LGPL v3": {
    url: "https://www.gnu.org/licenses/lgpl-3.0",
    imageUrl: "https://img.shields.io/badge/License-LGPL_v3-blue.svg",
  },
  "GNU FDL v1.3": {
    url: "https://www.gnu.org/licenses/fdl-1.3",
    imageUrl: "https://img.shields.io/badge/License-FDL_v1.3-blue.svg",
  },
  "The Hippocratic License 2.1": {
    url: "https://firstdonoharm.dev",
    imageUrl:
      "https://img.shields.io/badge/License-Hippocratic_2.1-lightgrey.svg",
  },
  "The Hippocratic License 3.0": {
    url: "https://firstdonoharm.dev",
    imageUrl:
      "https://img.shields.io/badge/License-Hippocratic_3.0-lightgrey.svg",
  },
  "IBM Public License Version 1.0": {
    url: "https://opensource.org/licenses/IPL-1.0",
    imageUrl: "https://img.shields.io/badge/License-IPL_1.0-blue.svg",
  },
  "ISC License (ISC)": {
    url: "https://opensource.org/licenses/ISC",
    imageUrl: "https://img.shields.io/badge/License-ISC-blue.svg",
  },
  MIT: {
    url: "https://opensource.org/licenses/MIT",
    imageUrl: "https://img.shields.io/badge/License-MIT-yellow.svg",
  },
  "Mozilla Public License 2.0": {
    url: "https://opensource.org/licenses/MPL-2.0",
    imageUrl: "https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg",
  },
  "Attribution License (BY)": {
    url: "https://opendatacommons.org/licenses/by/",
    imageUrl: "https://img.shields.io/badge/License-ODC_BY-brightgreen.svg",
  },
  "Open Database License (ODbL)": {
    url: "https://opendatacommons.org/licenses/odbl/",
    imageUrl: "https://img.shields.io/badge/License-ODbL-brightgreen.svg",
  },
  "Public Domain Dedication and License (PDDL)": {
    url: "https://opendatacommons.org/licenses/pddl/",
    imageUrl: "https://img.shields.io/badge/License-PDDL-brightgreen.svg",
  },
  "The Perl License": {
    url: "https://opensource.org/licenses/Artistic-2.0",
    imageUrl: "https://img.shields.io/badge/License-Perl-0298c3.svg",
  },
  "The Artistic License 2.0": {
    url: "https://opensource.org/licenses/Artistic-2.0",
    imageUrl: "https://img.shields.io/badge/License-Artistic_2.0-0298c3.svg",
  },
  "SIL Open Font License 1.1": {
    url: "https://opensource.org/licenses/OFL-1.1",
    imageUrl: "https://img.shields.io/badge/License-OFL_1.1-lightgreen.svg",
  },
  Unlicense: {
    url: "http://unlicense.org/",
    imageUrl: "https://img.shields.io/badge/license-Unlicense-blue.svg",
  },
  WTFPL: {
    url: "http://www.wtfpl.net/about/",
    imageUrl: "https://img.shields.io/badge/License-WTFPL-brightgreen.svg",
  },
  Zlib: {
    url: "https://opensource.org/licenses/Zlib",
    imageUrl: "https://img.shields.io/badge/License-Zlib-lightgrey.svg",
  },
};

const promptUser = () => inquirer.prompt([...questions]);

const generateREADME = (answers) =>
  `
  ![License](${licences[answers.license].imageUrl})
  
  
  # ${answers.title}

  
  ## Table of Contents
  [Description](#description)<br>
  [Installation](#installation)<br>
  [Usage](#usage)<br>
  [License](#license)<br>
  [Contributing](#contributing)<br>
  [Tests](#tests)<br>
  [Questions](#questions)

  ## Description
  ${answers.description}
  ## Installation
  These steps should be followed to install this project: ${
    answers.installation
  }
  ## Usage
  This project should be used to ${answers.usage}
  ## License
  This project holds a ${answers.license} license.
  ## Contributing
  The following contributed to this project: ${answers.contributing}
  ## Tests
  ${answers.testing}
  ## Questions
  
  Please contact me via email if you have any further questions.

  [Contact Me](mailto:${answers.email})

  You can also visit my GitHub page if you would like to explore my work further.
  
  [GitHub page](https://github.com/${answers.github}/ "Visit my GitHub page")  
`;

promptUser()
  .then((answers) => writeFileAsync("README.md", generateREADME(answers)))
  .then(() => console.log("Successfully wrote to README.md"))
  .catch((err) => console.error(err));
