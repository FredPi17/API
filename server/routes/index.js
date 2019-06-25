import Pieces from '../controllers/piece';
import Tables from '../controllers/tables';

export default (app) => {

    app.get('/api', (req, res) => res.status(200).send({
        message: 'Welcome to the "Système Gestion de Bâtiment" API!',
    }));

    // routes for "pieces"
    app.get('/api/pieces/:piece', Pieces.getAll); // API route to get all data from :piece
    app.get('/api/pieces/:piece/:number', Pieces.getNumberByPiece); // API route to get :number data of :piece

    // routes for "tables"
    app.get('/api/tables', Tables.getAll); // API route to get all tables from DB

};