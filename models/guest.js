module.exports = function(sequelize, DataTypes) {
    return sequelize.define('Guest', {
        name: DataTypes.STRING,
        plusOneName: DataTypes.STRING,
        email: DataTypes.STRING,
        phone: DataTypes.STRING,
        address: DataTypes.STRING,
        dietaryRestrictions: DataTypes.TEXT,
        otherNotes: DataTypes.TEXT
    })
};