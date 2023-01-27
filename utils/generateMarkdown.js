// Set up object with licenses from GitHub
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

// function to generate markdown for README
function generateMarkdown(data) {
  return `
  ![License](${licences[data.license].imageUrl})
  
  
  # ${data.title}

  
  ## Table of Contents
  [Description](#description)<br>
  [Installation](#installation)<br>
  [Usage](#usage)<br>
  [License](#license)<br>
  [Contributing](#contributing)<br>
  [Tests](#tests)<br>
  [Questions](#questions)

  ## Description
  ${data.description}
  ## Installation
  These steps should be followed to install this project: ${data.installation}
  ## Usage
  This project should be used to ${data.usage}
  ## License
  This project holds a ${data.license} license.
  ## Contributing
  The following contributed to this project: ${data.contributing}
  ## Tests
  ${data.testing}
  ## Questions
  
  Please contact me via email if you have any further questions.

  [Contact Me](mailto:${data.email})

  You can also visit my GitHub page if you would like to explore my work further.
  
  [GitHub page](https://github.com/${data.github}/ "Visit my GitHub page")  
`;
}

module.exports = generateMarkdown;
