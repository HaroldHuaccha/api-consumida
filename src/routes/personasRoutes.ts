import {Router} from 'express';
import personasController from '../controller/personasController';

class PersonasRoutes {
    public router: Router = Router();

    constructor(){
        this.config();
    }

    config():void {
        this.router.get('/', personasController.list);
        this.router.get('/:id', personasController.getOne);
        this.router.post('/', personasController.create);
        this.router.put('/:id', personasController.put);
        this.router.delete('/:id', personasController.delete);
    }
}

const personasRoutes = new PersonasRoutes();
export default personasRoutes.router;