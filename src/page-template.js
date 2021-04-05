const generateCards = teamData => {

    const manager = teamData.manager.map(function(job) {
        let managerHtml = `
        <div class= "card" style= "width: 18rem;">
        <h2>${job.name}</h2>
        <h4>Manager<h4>
        <p>ID: ${job.id}</p>
        <p>Email: <a href="mailto:${job.email}'>${job.email}</a></p>
        <p>Office Number: ${job.office}</p>
        </div>
        `
        return managerHtml
    });
}

module.exports = templateData => {
    return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">
        <title>My Team</title>
    </head>
    <body>
        <header>
        <h1 class="text-center">My Team</h1>
        </header>
        ${generateCards(templateData)}
    </body>
    </html>    
    `
};