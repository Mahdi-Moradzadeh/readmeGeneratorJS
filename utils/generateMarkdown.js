// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
    if(license === 'MIT'|| license === 'mit') {
        return `![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)`;
    }
    else if(license === 'APACHE 2.0'|| license === 'apache 2.0'|| license === 'Apache 2.0'|| license === 'apache') {
        return `![GitHub license](https://img.shields.io/badge/license-APACHE%202.0-blue.svg)`;
    }
    else if(license === 'GPL 3.0'|| license === 'gpl 3.0'|| license === 'Gpl 3.0'|| license === 'gpl') {
        return `![GitHub license](https://img.shields.io/badge/license-GPL%203.0-blue.svg)`;
    }
    else if(license === 'BSD 3'|| license === 'bsd 3'|| license === 'Bsd 3'|| license === 'bsd') {
        return `![GitHub license](https://img.shields.io/badge/license-BSD%203-blue.svg)`;
    }
    else if(license === 'None'|| license === ''|| license === 'none') {
        return `![GitHub license](https://img.shields.io/badge/license-None-blue.svg)`;
    }
    else {
      return `undefined entry`;
    }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if(license === 'MIT'|| license === 'mit') {
      return `https://opensource.org/licenses/MIT`;
  }
  else if(license === 'APACHE 2.0'|| license === 'apache 2.0'|| license === 'Apache 2.0'|| license === 'apache') {
      return `https://opensource.org/licenses/Apache-2.0`;
  }
  else if(license === 'GPL 3.0'|| license === 'gpl 3.0'|| license === 'Gpl 3.0'|| license === 'gpl') {
      return `https://opensource.org/licenses/GPL-3.0`;
  }
  else if(license === 'BSD 3'|| license === 'bsd 3'|| license === 'Bsd 3'|| license === 'bsd') {
      return `https://opensource.org/licenses/BSD-3-Clause`;
  }
  else if(license === 'None'|| license === ''|| license === 'none') {
      return ``;
  }
  else {
      return `undefined entry`;
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if(license === 'MIT'|| license === 'mit') {
      return `MIT License`;
  }
  else if(license === 'APACHE 2.0'|| license === 'apache 2.0'|| license === 'Apache 2.0'|| license === 'apache') {
      return `Apache License 2.0`;
  }
  else if(license === 'GPL 3.0'|| license === 'gpl 3.0'|| license === 'Gpl 3.0'|| license === 'gpl') {
      return `GPL License 3.0`;
  }
  else if(license === 'BSD 3'|| license === 'bsd 3'|| license === 'Bsd 3'|| license === 'bsd') {
      return `BSD License 3`;
  }
  else if(license === 'None'|| license === ''|| license === 'none') {
      return ``;
  }
  else {
    return `undefined entry`;
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  let licenseBadge = renderLicenseBadge(data.license);
  let licenseLink = renderLicenseLink(data.license);
  let licenseSection = renderLicenseSection(data.license);
  //write a code to break down data.tableOfContent into a list
  for (let i = 0; i < data.tableOfContents.length; i++) {
    data.tableOfContents[i] = `* ${data.tableOfContents[i]}\n`;
  }
  
  return `# ${data.title}
  ## Description 
  ${data.description}
  ## Table of Contents
  ${data.tableOfContents}
  ## Installation
  ${data.installation}
  ## Usage
  ${data.usage}
  ## License
  ${licenseBadge}
  ${licenseLink}
  ${licenseSection}
  ## Contributing
  ${data.contributing}
  ## Tests
  ${data.tests}
  ## Questions
  ${data.questions}
`;
}

module.exports = generateMarkdown;
