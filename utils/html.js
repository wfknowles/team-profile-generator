const generateTeamHTML = teamData => {
    let teamHTML = [];

    for(const employeeData of teamData) {
        teamHTML.push(generateEmployeeHTML(employeeData));
    }

    return teamHTML.join('\n');
};

const generateEmployeeHTML = employeeData => {
    return `
    <!-- TEMPLATE CARD -->
    <div class="col-md-4">
        <div class="card">
            <div class="card-header">
                <h2>${employeeData.getName()}</h2>
                <h3><span class="fas ${generateRoleIcon(employeeData.getRole())}"></span> ${employeeData.getRole()}</h3>
            </div>
            <div class="card-body">
                <ul class="list-group list-group-flush">
                    <li class="list-group-item">
                        ID: ${employeeData.getID()}
                    </li>
                    <li class="list-group-item">
                        Email: <a href="mailto:${employeeData.getEmail()}" class="card-link">${employeeData.getEmail()}</a>
                    </li>
                    <li class="list-group-item">${generateEmployeeUnique(employeeData)}</li>
                </ul>
            </div>
        </div>
    </div>
    `;
}

const generateEmployeeUnique = employeeData => {
    switch (employeeData.constructor.name) {
        case 'Manager':
            return 'Office Number: ' + employeeData.getOfficeNumber();
        case 'Engineer':
            return 'Github: <a href="https://github.com/'+employeeData.getGithub()+'/">' + employeeData.getGithub() + '</a>';
        case 'Intern':
            return 'School: ' + employeeData.getSchool();
    }
}

const generateRoleIcon = role => {
    switch (role) {
        case 'Manager':
            return 'fa-mug-hot';
        case 'Engineer':
            return 'fa-glasses';
        case 'Intern':
            return 'fa-user-graduate';
    }
}

const generatePage = teamData => {
    return `
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Team Website</title>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/css/bootstrap.min.css"/>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.2/css/all.min.css">
        <link rel="stylesheet" href="./style.css">
    </head>
    <body class="container">
        <header>
            <h1>My Team</h1>
        </header>
        <main>
            <div class="row">
            ${generateTeamHTML(teamData)}
            </div>
        </main>  
    </body>
    </html>
    `;
};


module.exports = generatePage;