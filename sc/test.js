const createCards = eD => {
    console.log(eD);
    
        const engineer = eD.engineerArr.map(function(card) {
            let engineerCard = `
            <div class="card" style="width: 15rem; margin-left: 17px; border-width: 3px; color: black;">
            <h2 style="width: 15rem; margin-left: 17px;">${card.name}</h2>
            <h3 style="width: 15rem; margin-left: 17px;">Engineer</h3>
            <hr style="border-top: 3px dotted black;">
            <div class="card-body">
            <p><b>ID #:</b> ${card.id}</p>
            <p><b>Email:</b> <a href='mailto:${card.email}'>${card.email}</a></p>
            <p><b>Github:</b> <a href="https://github.com/${card.github}" target="_blank">${card.github}</a></p>
            </div>
            </div> `
    
            return engineerCard
        });
    
        const manager = eD.managerArr.map(function(card) {
            let managerCard = `
            <div class="card" style="width: 15rem; margin-left: 17px; border-width: 3px; color: black;">
            <h2 style="width: 15rem; margin-left: 17px;">${card.name}</h2>
            <h3 style="width: 15rem; margin-left: 17px;">Manager</h3>
            <hr style="border-top: 3px dotted black;">
            <div class="card-body">
            <p><b>ID #:</b> ${card.id}</p>
            <p><b>Email:</b> <a href="mailto:${card.email}">${card.email}</a></p>
            <p><b>Office #:</b> ${card.number}</p>
            </div>
            </div>`
    
            return managerCard
            
        })
        
        const intern = eD.internArr.map(function(card) {
            let internCard = `
            <div class="card" style="width: 15rem; margin-left: 17px; border-width: 3px; color: black;">
            <h2 style="width: 15rem; margin-left: 17px;">${card.name}</h2>
            <h3 style="width: 15rem; margin-left: 17px;">Intern</h3>
            <hr style="border-top: 3px dotted black;">
            <div class="card-body">
            <p><b>ID #:</b> ${card.id}</p>
            <p><b>Email:</b> <a href="mailto:${card.email}">${card.email}</a></p>
            <p><b>School:</b> ${card.school}</p>
            </div>
            </div>` 
            
            return internCard
        })
        return [engineer, manager, intern]
    }
    
    module.exports = htmlTemplate => {
        return `
        <!DOCTYPE html>
            <html lang="en">
            <head>
                <meta charset="UTF-8">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.6.0/css/bootstrap.min.css" integrity="sha512-P5MgMn1jBN01asBgU0z60Qk4QxiXo86+wlFahKrsQf37c9cro517WzVSPPV1tDKzhku2iJ2FVgL67wG03SGnNA=="/>
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css" integrity="sha512-iBBXm8fW90+nuLcSKlbmrPcLa0OT92xO1BIsZ+ywDWZCvqsWgccV3gFoRBv0z+8dLJgyAHIhR35VZc2oM/gI1w=="/>
                <title>My Team Profile</title>
            </head>
            <body style="color: white;">
                <header>
                <h1 class="text-center" style="background: rgb(211, 49, 62); height: 100px; padding-top: 27px; color: azure;">My Team Profile </h1>
                </header>
                <div class="margin: 13px;" class="container">
                <div class="row d-flex justify-content-center" style="padding-top: 17px;">
                ${createCards(htmlTemplate)}
                </div>
                </div>
            </body>
            </html>    
        `
    }