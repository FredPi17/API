const Sequelize = require('sequelize');
const sequelize = new Sequelize('mysql://node_red:nodered@fredericpinaud.ddns.net:3306/node_red');

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
