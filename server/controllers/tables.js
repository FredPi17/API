const Sequelize = require('sequelize');
const sequelize = new Sequelize('DATABASE', 'PASSWORD', 'PASSWORD', {
    host: 'HOST_DATABASE',
    dialect: 'postgres'
});
import db from '../models/index';

class Tables {
    // TODO: Faire la création d'une table
    static insert(req, res) {
        const { temp, hum, fenetre, chauffage } = req.body;
        db.query("INSERT INTO "+req.params.piece+" (temp, hum, fenetre, chauffage) VALUES ("+temp+", "+hum+", "+fenetre+", "+chauffage+")", { raw: true})
            .then(data => res.status(201).send({
                success: true,
                message: 'User successfully created',
                data
            }))
    };

    static getAll(req, res) {
        sequelize.query("SELECT * FROM pg_catalog.pg_tables WHERE schemaname = 'public'", {raw: true})
            .then(data => res.status(201).send({
                success: true,
                message: 'Get all tables ',
                data
            }))
    };

    // TODO: Faire la récupération des infos par nom de table
    static getNumberByPiece(req, res) {
        sequelize.query("SELECT * FROM "+req.params.piece+" ORDER BY id DESC LIMIT "+req.params.number+"", {raw: true})
            .then(data => res.status(201).send({
                success: true,
                message: 'Get last '+req.params.number+' from '+req.params.piece+'',
                data
            }))
    };

    // TODO: Faire la suppression d'une table avec son nom
    static deleteData(req, res) {
        sequelize.query("DELETE FROM "+req.params.piece+" WHERE id="+req.params.id+"", {raw: true})
            .then(userData => res.status(201).send({
                success: true,
                message: 'Deleted data with id='+req.params.id+' on '+req.params.piece+'',
                userData
            }))
    };

    // TODO: Faire la mise à jour d'une table
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

export default Tables;
