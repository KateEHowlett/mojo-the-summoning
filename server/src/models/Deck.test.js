const { describe, it, expect, beforeAll, afterAll } = require('@jest/globals')
const { Deck } = require('.')
const { db } = require('../db/config')

// define in global scope
let deck

// clear db and create new deck before tests
beforeAll(async () => {
  await db.sync({ force: true })
  deck = await Deck.create({ name: 'goblins', xp: 7 })
})

// clear db after tests
afterAll(async () => await db.sync({ force: true }))

describe('Deck', () => {
  it('has an id', async () => {
    expect(deck).toHaveProperty('id')
  }),

  it('has a name', async () =>{
    expect(deck).toHaveProperty('name')
  })

  it('is called', async () => {
    expect(deck.name).toBe('goblins')
  })

  it('has xp', async() => {
    expect(deck).toHaveProperty('xp')
  })
})
