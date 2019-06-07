const Sequelize = require('sequelize');
const sequelize = new Sequelize('node_red', 'node_red', 'nodered', {
    host: 'raspberrysqlserver.ddns.net',
    dialect: 'postgres'
});
import db from '../models/index';

class Pieces {
    static insert(req, res) {
        const { temp, hum, fenetre, chauffage } = req.body;
        sequelize.query("INSERT INTO "+req.params.piece+" (temp, hum, fenetre, chauffage) VALUES ("+temp+", "+hum+", "+fenetre+", "+chauffage+")", { raw: true})
            .then(userData => res.status(201).send({
            success: true,
            message: 'User successfully created',
            userData
        }))
    };

    static getAll(req, res) {
        sequelize.query("SELECT * FROM "+req.params.piece, {raw: true})
            .then(userData => res.status(201).send({
                success: true,
                message: 'Get all data from '+req.params.piece+'',
                userData
            }))
    };

    static getNumberByPiece(req, res) {
        sequelize.query("SELECT * FROM "+req.params.piece+" ORDER BY id DESC LIMIT "+req.params.number+"", {raw: true})
            .then(userData => res.status(201).send({
                success: true,
                message: 'Get last '+req.params.number+' from '+req.params.piece+'',
                userData
            }))
    };

    static deleteData(req, res) {
        sequelize.query("DELETE FROM "+req.params.piece+" WHERE id="+req.params.id+"", {raw: true})
            .then(userData => res.status(201).send({
                success: true,
                message: 'Deleted data with id='+req.params.id+' on '+req.params.piece+'',
                userData
            }))
    };

    static updateData(req, res) {
        const { temp, hum, fenetre, chauffage } = req.body;
        sequelize.query("UPDATE "+req.params.piece+" SET temp = "+temp+", hum = "+hum+", fenetre = "+fenetre+", chauffage = "+chauffage+" WHERE id = "+req.params.id+"", {raw: true})
            .then(userData => res.status(201).send({
                success: true,
                message: 'Update data from '+req.params.piece+' where id='+req.params.id+'',
                userData
            }))
    };
}

export default Pieces;