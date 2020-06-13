const questions = [
    {
        type: "input",
        name: "github",
        message: "GitHub username?"
      },
      {
        type: "input",
        name: "email",
        message: "email?"
      },
      {
        type: "input",
        name: "URL to Project",
        message: "URL?"
      },
      {
        type: "input",
        name: "title",
        message: "Project name?"
      },
      {
        type: "input",
        name: "description",
        message: "Description of project"
      },
      {
        type: "list",
        name: "license",
        message: "License of project?",
        choices: ["None"]
      },
];


function writeToFile(fileName, data) {
    return fs.writeFileSync(path.join(process.cwd(), fileName), data);
  }
  
  function init() {
    inquirer.prompt(questions).then((inquirerResponses) => {
      writeToFile("readme.md", generateMarkdown({ ...inquirerResponses }));
    })
  }

init();
