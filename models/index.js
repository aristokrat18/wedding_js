if (!global.hasOwnProperty('db')) {
    var Sequelize = require('sequelize'),
        sequelize = null;
    
    if (process.env.HEROKU_POSTGRESQL_IVORY_URL) {
        var match = process.env.HEROKU_POSTGRESQL_IVORY_URL.match(/postgres:\/\/([^:]+):([^@]+)@([^:]+):(\d+)\/(.+)/);
        
        sequelize = new Sequelize(match[5], match[1], match[2], {
            dialect: 'postgres',
            protocol: 'postgres',
            port: match[4],
            host: match[3],
            logging: true
        });
    }
    else {
        sequelize = new Sequelize('wedding', 'root', null);
    }
        
    global.db = {
        Sequelize: Sequelize,
        sequelize: sequelize,
        Guest: sequelize.import(__dirname + '/guest')
    };
        
    
}

module.exports = global.db;
