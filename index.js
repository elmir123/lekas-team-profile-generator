// Including packages needed
const inquirer = require('inquirer');
const fs = require('fs');
const util = require('util');

const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const generateHTML = require('./src/htmlGenerator');

//const htmlGenerator = 
let teamArray = [];

const htmlFile  = util.promisify(fs.writeFile);

const initialQuestions = [
    {
    type: 'input',
    message: "What is the team manager's name?",
    name: 'managerName',
    },
    {
    type: 'input',
    message: "What is the team manager's employee ID?",
    name: 'managerId',
    },
    {
    type: 'input',
    message: "What is the team manager's email address?",
    name: 'managerEmail',
    },
    {
    type: 'input',
    message: "What is the team manager's office tel. number?",
    name: 'managerOfficeNumber',
    }
];

const teamMemberPrompt = [
    {
        type: 'list',
        message: 'What type of team member would you like to add?',
        name: 'teamMemberType',
        choices: ['Engineer', 'Intern','[FINISH]']

    }
];

const engineerQuestions = [
    {
        type: 'input',
        message: "What is the engineer's name?",
        name: 'engineerName',
        },
        {
        type: 'input',
        message: "What is the engineer's employee ID?",
        name: 'engineerId',
        },
        {
        type: 'input',
        message: "What is the engineer's email address?",
        name: 'engineerEmail',
        },
        {
        type: 'input',
        message: "What is the engineer's Github username?",
        name: 'engineerGithubUsername',
        }
];

const internQuestions = [
    {
        type: 'input',
        message: "What is the interns's name?",
        name: 'internName',
        },
        {
        type: 'input',
        message: "What is the interns's employee ID?",
        name: 'internId',
        },
        {
        type: 'input',
        message: "What is the interns's email address?",
        name: 'internEmail',
        },
        {
        type: 'input',
        message: "What is the interns's school name?",
        name: 'internSchoolName',
        }
];

const teamManagerQuestions = () => {return inquirer.prompt(initialQuestions);}
const teamBuilderQuestions = () => {return inquirer.prompt(teamMemberPrompt);}

const addEngineer = () => {
    //Prompt questions
    inquirer.prompt(engineerQuestions)
    .then(
        (answers)=>{
            //add answers to the teamArray
            teamArray.push(new Engineer(answers.engineerName, answers.engineerId, answers.engineerEmail, answers.engineerGithubUsername));
        }
    )
    .then(
        ()=>{addTeamMembers();}
    )  
}

const addIntern = () => {
    //Prompt questions
    inquirer.prompt(internQuestions)
    .then(
        (answers)=>{
            //add answers to the teamArray
            teamArray.push(new Intern(answers.internName, answers.internId, answers.internEmail, answers.internSchoolName));
        }
    )
    .then(
        ()=>{addTeamMembers();}
    )
}

//handle team member adding by type
const addTeamMembers = () => {
    //Prompt for team building loop to add members to team array
    teamBuilderQuestions()
    .then(
        (answer) => {
            if(answer.teamMemberType === 'Engineer'){
                addEngineer();
            }else if(answer.teamMemberType === 'Intern'){
                addIntern();
            }else{
                exportHTML(teamArray);
                return;
            }
        }
    )
}

function init() {
    teamManagerQuestions()
        .then(
            //Add the team manager first
            (answers)=>{
                teamArray.push(new Manager(answers.managerName, answers.managerId, answers.managerEmail, answers.managerOfficeNumber));
            }
        )
        .then(
            () => {
                //move to team member questions
                addTeamMembers();
            }
        )
        .catch(
            (err) => console.error(err)
        )  
}
function exportHTML(teamArray){
    htmlFile('./dist/teamProfile.html', generateHTML(teamArray) )
}
// initialize app
init();