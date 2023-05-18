// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
    if(license === 'MIT') {
        return `![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)`;
    }
    else if(license === 'Apache') {
        return `![GitHub license](https://img.shields.io/badge/license-APACHE%202.0-blue.svg)`;
    }
    else if(license === 'GPL') {
        return `![GitHub license](https://img.shields.io/badge/license-GPL%203.0-blue.svg)`;
    }
    else if(license === 'BSD') {
        return `![GitHub license](https://img.shields.io/badge/license-BSD%203-blue.svg)`;
    }
    else if(license === 'None') {
        return `![GitHub license](https://img.shields.io/badge/license-None-blue.svg)`;
    }
    else {
      return `undefined entry`;
    }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if(license === 'MIT') {
      return `https://opensource.org/licenses/MIT`;
  }
  else if(license === 'Apache') {
      return `https://opensource.org/licenses/Apache-2.0`;
  }
  else if(license === 'GPL') {
      return `https://opensource.org/licenses/GPL-3.0`;
  }
  else if(license === 'BSD') {
      return `https://opensource.org/licenses/BSD-3-Clause`;
  }
  else if(license === 'None') {
      return ``;
  }
  else {
      return `undefined entry`;
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if(license === 'MIT') {
      return `MIT License`;
  }
  else if(license === 'Apache') {
      return `Apache License 2.0`;
  }
  else if(license === 'GPL') {
      return `GPL License 3.0`;
  }
  else if(license === 'BSD') {
      return `BSD License 3`;
  }
  else if(license === 'None') {
      return ``;
  }
  else {
    return `undefined entry`;
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown({title,description,tableOfContents,installation,license,usage,contributing,tests,questions}) {
  let licenseBadge = renderLicenseBadge(license);
  let licenseLink = renderLicenseLink(license);
  let licenseSection = renderLicenseSection(license);
  tableOfContents = tableOfContents.split(' ');
  for (let i = 0; i < tableOfContents.length; i++) {
    tableOfContents[i] = `* ${tableOfContents[i]}`;
  }
  tableOfContents = tableOfContents.join(`
  `);

  return `# ${title}
  ## Description 
  ${description}
  ## Table of Contents
  ${tableOfContents}
  ## Installation
  ${installation}
  ## Usage
  ${usage}
  ## License
  ${licenseBadge}
  ${licenseLink}
  ${licenseSection}
  ## Contributing
  ${contributing}
  ## Tests
  ${tests}
  ## Questions
  ${questions}
`;
}

module.exports = generateMarkdown;
