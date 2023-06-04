const inquirer = require('inquirer');
const fs = require('fs');

const generateMD = ({name, description, installation, usage , contributing, test, questions1, questions2, license}) =>
`# ${name}

## Table of contents 
1. Description 
2. Installation 
3. Usage 
4. License
5. Contributing 
6. Tests 
7. Questions 





## Description :
${description}



## Installation :
${installation}



## Usage :
${usage}



## License :
${license}




## Contributing :
${contributing}



## Tests :
${test}




## Questions :
GitHub: ${questions1}
Email: ${questions2}
`



inquirer
.prompt([
    {
        type: 'input',
        name: 'name',
        message: 'What is the name of your project',
    },
    {
        type: 'input',
        name: 'description',
        message: 'Please describe your project.',
    },
    {
        type: '',
        name: 'instalation',
        message: '',
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Please explain the usage of your project here :',
    },
    {
        type: 'checkbox',
        name: 'license',
        message: 'What licenese are you using',
        choices: ['None','afl-3.0','apache-2.0','artisic-2.0','bsl-1.0','bsd-2-clause','bsd-3-clause','bsd-3-clause-clear','0bsd','cc','cc-0-1.0','cc-by-4.0','cc-by-sa-4.0','wtfpl','ecl-2.0',],
    },
    {
        type: 'input',
        name: ' contributing',
        message: 'Who all worked on this project',
    },
    {
        type: 'input',
        name: 'test',
        message: 'What is the suite of tets that you ran on the test?',
    },
    {
        type: 'input',
        name: 'questions1',
        message: 'Please enter your Github Username',
    },
    {
        type: 'input',
        name: 'questions2',
        message: 'Please enter your Email address'
    }
])
    .then((answers) =>{
    const readMePageContent = generateMD(answers);

    fs.writeFile('readMe.md', readMePageContent , (err) =>
        err ? console.log(err) : console.log('Succsefully created your readMe!')
    );

});