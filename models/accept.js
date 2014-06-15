module.exports = function(sequelize, DataTypes) {
    return sequelize.define('Accept', {
        name: {type: DataTypes.STRING, validate: {is: ["^[A-Za-z'\" \-]+$"]}},
        guest: DataTypes.STRING,
        email: {type: DataTypes.STRING, validate: {isEmail: true}},
        phone: {type: DataTypes.STRING, validate: {is: ["^[0-9\(\)\. x\-]+$"]}},
        address: DataTypes.STRING,
        food: DataTypes.TEXT,
        other: DataTypes.TEXT
    })
};