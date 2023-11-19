const inquirer = require('inquirer');
const fs = require('fs');

function generateMarkdown(data) {
  console.log(data);
  return `
# ${data.title}
# Description 
### ${data.description}
# Table of Contents
- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)
## Installation: 
### This application is installed by: ${data.installation}
# Usage
### ${data.usage}
## License
### ![badge](https://img.shields.io/badge/license-${data.license}-brightgreen)<br />
## Contributing
### ${data.contributing}
## Tests
### ${data.tests}
## Questions
### https://github.com/${data.questions};
### ${data.email}`
}

inquirer
  .prompt([
    {
      type: 'input',
      message: 'What is the title of this project?',
      name: 'title',
    },
    {
      type: 'input',
      message: 'Description:',
      name: 'description',
    },

    {
      type: 'input',
      message: 'How is this application installed?',
      name: 'installation',
    },
    {
      type: 'input',
      message: 'How is this application used?',
      name: 'usage',
    },
    {
      type: 'list',
      message: 'Choose a license?',
      choices: ["Apache",
        "GNU",
        "MIT",
        "Academic",
        "Open",],
      name: 'license',
    },
    {
      type: 'input',
      message: 'Who contributes to this application?',
      name: 'contributing',
    },
    {
      type: 'input',
      message: 'Tests?:',
      name: 'tests',
    },
    {
      type: 'input',
      message: 'What is your GitHub repository?',
      name: 'questions',
    },
    {
      type: 'input',
      message: 'What is your email?',
      name: 'email',
    },
  ])
  .then((response) =>
    fs.writeFileSync('README.md', generateMarkdown(response)
    )
  );