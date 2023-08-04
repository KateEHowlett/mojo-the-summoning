const { Attack, Card, Deck, User} = require("./models/index");
const { db } = require("./db/config");
const { seed } = require("./db/seed");

async function init(){
    try{
        await db.sync({force: true});
        await seed();
    } catch (err) {
        console.error(err)
    }
}

module.exports = {
    Attack,
    Card,
    Deck,
    User,
    init
}