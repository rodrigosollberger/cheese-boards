const {sequelize} = require('./db');
const {User, Board, Cheese} = require('./models')

describe('User, Board and Cheese Models', () => {
    /**
     * Runs the code prior to all tests
     */
    beforeAll(async () => {
        // the 'sync' method will create tables based on the model class
        // by setting 'force:true' the tables are recreated each time the 
        // test suite is run
        await sequelize.sync({ force: true });
    })

    test('can create a User', async () => {
        
        const testUser = await User.create({name: "Rodrigo", email: "rc@gmail.com"})
        expect(testUser.name).toBe('Rodrigo');
        expect(testUser.email).toBe('rc@gmail.com');
    })

    test('can create a Board', async () => {
        
        const testBoard = await Board.create({type: "The Marseille", description: "A selection of classic french cheeses", rating: 8})
        expect(testBoard.type).toBe("The Marseille");
        expect(testBoard.description).toBe("A selection of classic french cheeses");
        expect(testBoard.rating).toBe(5);
    })

    test('can create a Cheese', async () => {
        
        const testCheese = await Cheese.create({title: "Brie", description: "Soft and Smooth"})
        expect(testCheese.title).toBe("Brie");
        expect(testCheese.description).toBe("Soft and Smooth");
    })

})
