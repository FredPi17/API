const Sequelize = require('sequelize');
const sequelize = new Sequelize('mysql://node_red:nodered@fredericpinaud.ddns.net:3306/node_red');

class Pieces {
    static getAll(req, res) {
        sequelize.query("SELECT * FROM " + req.params.piece, {type: sequelize.QueryTypes.SELECT})
            .then(data => res.status(201).send({
                success: true,
                message: 'Get all data from '+req.params.piece+'',
                data
            }))
    };

    static getNumberByPiece(req, res) {
        sequelize.query("SELECT * FROM " + req.params.piece + " ORDER BY id DESC LIMIT " + req.params.number + "",
            {type: sequelize.QueryTypes.SELECT})
            .then(data => res.status(201).send({
                success: true,
                message: 'Get last '+req.params.number+' from '+req.params.piece+'',
                data
            }))
    };

    static getOneTable(req, res) {
        sequelize.query("SELECT " + req.params.table + " from " + req.params.piece + "", {type: sequelize.QueryTypes.SELECT})
            .then(data => res.status(201).send({
                success: true,
                message: 'Get ' + req.params.table + ' from ' + req.params.piece + '',
                data
            }))
    };
}

export default Pieces;
