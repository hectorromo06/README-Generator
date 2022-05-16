const generateInstall = installInput => {
  // if there are no install instructions return an empty string
  if (!installInput) {
    return '';
  }

  // generate the installation section if answer was provided
  return `## Installation
  ${installInput} 
  `;
};

const generateUsage = usageInput => {
  // if there is no usage information return an empty string
  if (!usageInput) {
    return '';
  }

  // generate the usage section if answer was provided
  return `## Usage
  ${usageInput}
  `;
};

const generateCont = contInput => {
  // if there are no contribution guidelines return an empty string
  if (!contInput) {
    return '';
  }

  // generate the contributing section if answer was provided
  return `## Contributing
  ${contInput}
  `;
};

const generateTest = testInput => {
  // if there are no test instructions return an empty string
  if (!testInput) {
    return '';
  }

  // generate the tests section if answer was provided
  return `## Tests
  ${testInput}
  `;
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
    test
  } = userInput;

  // create template for MarkDown
  let template =
    `# ${title}
  
  ## Description
  ${description}

  ${generateInstall(installInst)}

  ${generateUsage(usage)}

  ${generateCont(contribution)}

  ${generateTest(test)}
  `;

  return template;
};

module.exports = generateMarkdown;

// // TODO: Create a function that returns a license badge based on which license is passed in
// // If there is no license, return an empty string
// function renderLicenseBadge(license) {}

// // TODO: Create a function that returns the license link
// // If there is no license, return an empty string
// function renderLicenseLink(license) {}

// // TODO: Create a function that returns the license section of README
// // If there is no license, return an empty string
// function renderLicenseSection(license) {}