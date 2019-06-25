const Sequelize = require('sequelize');
const sequelize = new Sequelize('DATABASE', 'PASSWORD', 'PASSWORD', {
    host: 'HOST_DATABASE',
    dialect: 'postgres'
});

class Tables {
    static getAll(req, res) {
        sequelize.query("SELECT * FROM pg_catalog.pg_tables WHERE schemaname = 'public'", {type: sequelize.QueryTypes.SELECT})
            .then(data => res.status(201).send({
                success: true,
                message: 'Get all tables ',
                data
            }))
    };
}

export default Tables;
