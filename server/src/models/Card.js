// create your User model here
const { db, DataTypes, Model } = require("../db/config.js");

class Card extends Model {};

Card.init({
    name: DataTypes.STRING,
    mojo: DataTypes.INTEGER,
    stamina: DataTypes.INTEGER,
    imgURL: DataTypes.STRING
},{
    sequelize: db,
    modelName:"Card"
})

module.exports = Card;