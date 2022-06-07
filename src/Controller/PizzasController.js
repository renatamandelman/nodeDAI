import {Router} from 'express';
import PizzaService from '../services/pizza-services';

const router=Router();
const PizzasService=new PizzasService();

router.get('/', async(req,res)=> {
    const pizzas=await PizzaService.getAll();
    return res.status(200).json(pizzas);
});

router.get('/:id', async (req,res)=> {
   const id=req.params.id;
    const pizza = await PizzaService.getById(id);
    return res.status(200).json(pizza);
});

router.post('/',async(req,res) => {
    const body = req.body;
    const pizza= await PizzaService.insert(body);
    return res.status(200).json(pizza);
});

router.put('/:id',async(req,res) => {
    const id =req.params.id;
    const body=req.body;
    const pizza= await PizzaService.update(body);
    return res.status(200).json(pizza);
});

router.delete(":/id",async (req,res)=>{
    const id=req.params.id;
    const pizza=await PizzasService.deleteById(id)
    return res.status(200).json(pizza);

});

export default router;