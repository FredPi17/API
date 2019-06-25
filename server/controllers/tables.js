const Sequelize = require('sequelize');
const sequelize = new Sequelize('DATABASE', 'PASSWORD', 'PASSWORD', {
    host: 'HOST_DATABASE',
    dialect: 'mysql'
});

class Tables {
    static getAll(req, res) {
        sequelize.query("SHOW TABLES", {type: sequelize.QueryTypes.SELECT})
            .then(data => res.status(201).send({
                success: true,
                message: 'Get all tables ',
                data
            }))
    };
}

export default Tables;
