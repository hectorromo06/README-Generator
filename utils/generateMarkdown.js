const generateInstall = installInput => {
  // if there are no install instructions return an empty string
  if (!installInput) {
    return '';
  }

  // generate the installation section if answer was provided
  return `## Installation
  ${installInput}`;
};

const generateUsage = usageInput => {
  // if there is no usage information return an empty string
  if (!usageInput) {
    return '';
  }

  // generate the usage section if answer was provided
  return `## Usage
  ${usageInput}`;
};

const generateCont = contInput => {
  // if there are no contribution guidelines return an empty string
  if (!contInput) {
    return '';
  }

  // generate the contributing section if answer was provided
  return `## Contributing
  ${contInput}`;
};

const generateTest = testInput => {
  // if there are no test instructions return an empty string
  if (!testInput) {
    return '';
  }

  // generate the tests section if answer was provided
  return `## Tests
  ${testInput}`;
};

// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
const renderLicenseBadge = license => {
  switch (license) {
    case 'none':
      return ``;
    case 'Apache License 2.0':
      return `[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`;
    case 'GNU General Public License v3.0':
      return `[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)`;
    case 'MIT License':
      return `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`;
    case 'BSD 2-Clause "Simplified" License':
      return `[![License](https://img.shields.io/badge/License-BSD_2--Clause-orange.svg)](https://opensource.org/licenses/BSD-2-Clause)`;
    case 'BSD 3-Clause "New" or "Revised" License':
      return `[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)`;
    case 'Boost Software License 1.0':
      return `[![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)`;
    case 'Creative Commons Zero v1.0 Universal':
      return `[![License: CC0-1.0](https://licensebuttons.net/l/zero/1.0/80x15.png)](http://creativecommons.org/publicdomain/zero/1.0/)`;
    case 'Eclipse Public License 2.0':
      return `[![License](https://img.shields.io/badge/License-EPL_1.0-red.svg)](https://opensource.org/licenses/EPL-1.0)`;
    case 'GNU Affero General Public License v3.0':
      return `[![License: AGPL v3](https://img.shields.io/badge/License-AGPL_v3-blue.svg)](https://www.gnu.org/licenses/agpl-3.0)`;
    case 'GNU General Public License v2.0':
      return `[![License: GPL v2](https://img.shields.io/badge/License-GPL_v2-blue.svg)](https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html)`;
    case 'GNU Lesser General Public License v3.0':
      return `[![License: LGPL v3](https://img.shields.io/badge/License-LGPL_v3-blue.svg)](https://www.gnu.org/licenses/lgpl-3.0)`;
    case 'Mozilla Public License 2.0':
      return `[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)`;
    case 'The Unlicense':
      return `[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)`;
  }
};

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
const renderLicenseLink = license => {
  switch (license) {
    case 'none':
      return ``;
    case 'Apache License 2.0':
      return `[Read More about Apache License 2.0](https://opensource.org/licenses/Apache-2.0)`;
    case 'GNU General Public License v3.0':
      return `[Read More about GNU General Public License v3.0](https://www.gnu.org/licenses/gpl-3.0)`;
    case 'MIT License':
      return `[Read More about MIT License](https://opensource.org/licenses/MIT)`;
    case 'BSD 2-Clause "Simplified" License':
      return `[Read More about BSD 2-Clause "Simplified" License](https://opensource.org/licenses/BSD-2-Clause)`;
    case 'BSD 3-Clause "New" or "Revised" License':
      return `[Read More about BSD 3-Clause "New" or "Revised" License](https://opensource.org/licenses/BSD-3-Clause)`;
    case 'Boost Software License 1.0':
      return `[Read More about Boost Software License 1.0](https://www.boost.org/LICENSE_1_0.txt)`;
    case 'Creative Commons Zero v1.0 Universal':
      return `[Read More about Creative Commons Zero v1.0 Universal](http://creativecommons.org/publicdomain/zero/1.0/)`;
    case 'Eclipse Public License 2.0':
      return `[Read More about Eclipse Public License 2.0](https://opensource.org/licenses/EPL-1.0)`;
    case 'GNU Affero General Public License v3.0':
      return `[Read More about GNU Affero General Public License v3.0](https://www.gnu.org/licenses/agpl-3.0)`;
    case 'GNU General Public License v2.0':
      return `[Read More about GNU General Public License v2.0](https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html)`;
    case 'GNU Lesser General Public License v3.0':
      return `[Read More about GNU Lesser General Public License v3.0](https://www.gnu.org/licenses/lgpl-3.0)`;
    case 'Mozilla Public License 2.0':
      return `[Read More about Mozilla Public License 2.0](https://opensource.org/licenses/MPL-2.0)`;
    case 'The Unlicense':
      return `[Read More about The Unlicense](http://unlicense.org/)`;
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
const renderLicenseSection = license => {
  if (license != 'none') {
    return `## License
    ${license}`;
  } else {
    return '';
  }
};


// TODO: Create a function to generate markdown for README
const generateMarkdown = userInput => {
  // Deconstruct object of user input
  const {
    title,
    description,
    installInst,
    usage,
    contribution,
    test,
    license
  } = userInput;

  // create template for MarkDown
  let template =
    `# ${title}
  ${renderLicenseBadge(license)}
  ## Description
  ${description}

  ${generateInstall(installInst)}

  ${generateUsage(usage)}

  ${generateCont(contribution)}

  ${generateTest(test)}

  ${renderLicenseSection(license)}
  ${renderLicenseLink(license)}
  `;

  return template;
};

module.exports = generateMarkdown;