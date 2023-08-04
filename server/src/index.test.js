const { Attack, Card, Deck, User, init } = require("./index.js");
const { describe, it, expect, beforeAll, afterAll } = require('@jest/globals')

beforeAll(async () => {
    await init();
    const deck = await Deck.create({
        name:"goblins",
        xp: 70
    });
    const user = await User.create({
        username:"salixa"
    });
    user.setDeck(deck);
});


describe("getting a deck", () => {
    it("exists", async () => {
        let foundDeck = await Deck.findByPk(1);
    })
    it("belongs to a user", async () => {
        let foundDeck = await Deck.findByPk(1);
        let foundName = await foundDeck.getUser();
        expect(foundName.username).toBe("salixa")
    })
})

