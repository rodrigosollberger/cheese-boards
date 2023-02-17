const { User } = require("./modelUser.js");
const { Board } = require("./modelBoard.js");
const { Cheese } = require("./modelCheese.js");


User.hasMany(Board); //we are creating  link between the two tables where several orders relate to one customer
                         //this will also mean that a foreign key from 'User' will appear in the table 'Board'

//Board.belongsToMany(Cheese); //we are creating  link between the two tables where several cheeses can relate to several boards
                         //this will also mean that a foreign key from 'Board' will appear in the table 'Cheese' and vice versa

module.exports = {
    User,
    Board,
    Cheese
};