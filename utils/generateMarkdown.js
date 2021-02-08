// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  // console.log(license)
  if (license) {
    return license
  }
  return ""
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license) {
    return `https://choosealicense.com/licenses/${license}`
  }
  return ""
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license) {
    return `## License
  This project is licensed with ${license} license`
  }
  return ""
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  ${renderLicenseBadge(data.license[0])}
  
  ## Table of Contents
  
  ${data.description && '* [Description](#description)'}
  ${data.install && '* [Installation Instructions](#installation)'}
  ${data.usage && '* [Usage Information](#usage)'}
  ${data.contribution && '* [Contribution Guidelines](#contribution)'}
  ${data.test && '* [Test Instructions](#test)'}
  ${data.license && '* [License](#license)'}
  * [Questions](#questions)
  
  ${data.description && '## Description'}
  
  ${data.description}
  
  ${data.install && '## Installation'}
  
  ${data.install}
  
  ${data.usage && '## Usage'}
  
  ${data.usage}
  
  ${data.contribution && '## Contribution'}
  
  ${data.contribution}
  
  ${data.test && '## Test'}
  
  ${data.test}
  
  ${renderLicenseSection(data.license[2])}
  ${renderLicenseLink(data.license[1])}
  
  ## Questions
  
  Please contact me at:
  
  [GitHub](https://www.github.com/${data.userName})
  
  [Email](${data.email})
`;

}

module.exports = generateMarkdown;
