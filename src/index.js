
const { User, Board, Cheese } = require("./models");

const sequelize = require("./db");

async function main () {
    
    await sequelize.sync({force: true});

    let newUser = await User.create({
        name: "Roddy",
        email: "roddys@email.com",
    });

    let newBoard = await Board.create({
        type: "The Cheese-Reich",
        description: "A selection of German cheeses from Bavaria and Saxony",
        rating: 8,
    });

    let newCheese = await Cheese.create({
        title: "Reblochon",
        description: "A sensory overload, this cheese is usualy stored hung from the window due to it's pungent smell.",
    });

};

main(); //calling the function so the code can run
