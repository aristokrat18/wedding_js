module.exports = function(sequelize, DataTypes) {
    return sequelize.define('Decline', {
        name: {type: DataTypes.STRING, validate: {is: ["^[A-Za-z'\" \-]+$"]}},
        other: DataTypes.TEXT
    })
};