import Pieces from '../controllers/piece';
import Tables from '../controllers/tables';

export default (app) => {

    app.get('/api', (req, res) => res.status(200).send({
        message: 'Welcome to the Pieces API!',
    }));

    // routes for pieces
    app.post('/api/pieces/:piece', Pieces.insert);
    app.get('/api/pieces/:piece', Pieces.getAll); // API route to get all data from :piece
    app.get('/api/pieces/:piece/:number', Pieces.getNumberByPiece); // API route to get :number data of :piece
    app.get('/api/pieces/:piece/:table', Pieces.getOneTable); // API route to get only one table of :piece
    app.delete('/api/pieces/:piece/:id', Pieces.deleteData); // API route to delete the :piece data with :id
    app.put('/api/pieces/:piece/:id', Pieces.updateData); //API route to edit the :piece data with :id

    // routes for tables
    app.get('/api/tables', Tables.getAll);
};