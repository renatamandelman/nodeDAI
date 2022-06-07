import config from '../../dbconfig.js';
import sql, { rows } from 'mssql';

class PizzaService{
    getAll = async () =>{
        
    }
    getById = async (id) => {
        let returnEntity = null;
        console.log('Estoy en: PizzasServices.GetByID(id)');
        try{
            let pool = await sql.connect(config);
            let result = await pool.request()
                                .input('pId',sql.Int, id)
                                .query('SELECT * FROM Pizzas WHERE id=pId');
                            returnEntity=result.recordsets[0][0];
        } catch(error){
            console.log(error);
        }
        return returnEntity;

    }
    insert = async (pizza) => {

    }
    update = async(pizza) => {

    }
    deleteById = async (id) => {
        let rowsAffected=0;
        console.log('Estoy en: PizzasServices.deleteById(id)');
        try{
            let pool = await sql.connecect(config);
            let result = await pool.request()
                            .input('pId',sql.Int, id)
                            .query('DELETE FROM Pizzas WHERE id=pId');
            rowsAffected=result.rowsAffected;
            
        } catch(error){
            console.log(error);
        }
        return rowsAffected;

    }
}
export default PizzaService;
