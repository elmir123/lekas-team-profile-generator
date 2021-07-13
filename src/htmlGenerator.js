//load Classes
const Manager = require('../lib/Manager');
const Engineer = require('../lib/Engineer');
const Intern = require('../lib/Intern');

//HTML Template
const generateHTML = (teamArray) => 
`
<!DOCTYPE html>
    <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Lekas Team Profile Generator</title>
            <script src="https://kit.fontawesome.com/3935230fd5.js" crossorigin="anonymous"></script>
            <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-wEmeIV1mKuiNpC+IOBjI7aAzPcEZeedi5yW5f2yOq55WWLwNGmvvx4Um1vskeMj0" crossorigin="anonymous">
        </head>
        <body>
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
                <div class="container-fluid" style="display: flex; flex-direction: row; justify-content: center; align-items: center;">
                <h1 class="display-5" href="#">Lekas Team Profile Generator</h1>
                </div>
            </nav>
            <div style="col col-md-4">
                ${teamCards(teamArray)}
            </div>
        </body>
    </html>
`;

//teamcards interation
const teamCards = (teamArray) => {
    //set the teamcard let
    let teamCardsHTML = '';
    //iterate over cards
    teamArray.forEach(element => {
        if(element instanceof Manager){
            teamCardsHTML = teamCardsHTML.concat(managerCard(element));
        }else if(element instanceof Engineer){
            teamCardsHTML = teamCardsHTML.concat(engineerCard(element));
        }else if(element instanceof Intern){
            teamCardsHTML = teamCardsHTML.concat(internCard(element));
        }else{
            throw("ERROR: Please check the input type.")
        }
    });

    return teamCardsHTML;
}

//manager HTML card
const managerCard = (manager) => {
    return `
    <div class="card text-center" style="margin: 20px;"> 
            <h5 class="card-title" style="padding: 10px;">
                <i class="fas fa-user-tie"></i> ${manager.name} : Manager
            </h5>
            <div class="card-body">
                <div class="card">
                    <div class="card-body">
                    <p><strong>ID: </strong> <span> ${manager.id} </span></p>
                    </div>
                </div>            
                <div class="card">
                    <div class="card-body">
                    <p><strong>Email: </strong><span><a href="mailto:${manager.email}">${manager.email} </a></span></p>
                    </div>
                </div>            
                <div class="card">
                    <div class="card-body">
                        <p><strong>Office Tel.: </strong><span> ${manager.officeNumber} </span></p>
                    </div>
                </div>            
            </div>
        </div>
    `;
}

//engineer HTML card
const engineerCard = (engineer) => {
    return `
    <div class="card text-center" style="margin: 20px;"> 
            <h5 class="card-title" style="padding: 10px;">
                <i class="fas fa-tools"></i> ${engineer.name} : Engineer
            </h5>
            <div class="card-body">
                <div class="card">
                    <div class="card-body">
                    <p><strong>ID: </strong> <span> ${engineer.id} </span></p>
                    </div>
                </div>            
                <div class="card">
                    <div class="card-body">
                    <p><strong>Email: </strong><span><a href="mailto:${engineer.email}">${engineer.email} </a></span></p>
                    </div>
                </div>            
                <div class="card">
                    <div class="card-body">
                        <p><strong>Github: </strong><span> <a href="https://github.com/${engineer.github}">${engineer.github}</a> </span></p>
                    </div>
                </div>            
            </div>
        </div>
    `;
}

//intern HTML card
const internCard = (intern) => {
    return `
    <div class="card text-center" style="margin: 20px;"> 
        <h5 class="card-title" style="padding: 10px;">
            <i class="fas fa-user-graduate"></i> ${intern.name} : Intern
        </h5>
        <div class="card-body">
            <div class="card">
                <div class="card-body">
                    <p><strong>ID: </strong> <span> ${intern.id} </span></p>
                </div>
            </div>            
            <div class="card">
                <div class="card-body">
                    <p><strong>Email: </strong><span><a href="mailto:${intern.email}">${intern.email} </a></span></p>
                </div>
            </div>            
            <div class="card">
                <div class="card-body">
                    <p><strong>School: </strong><span> ${intern.school} </span></p>
                </div>
            </div>            
        </div>
    </div> 
    `;
}
module.exports = generateHTML;