import { Router } from "express";
import { origenIdiomaController } from "./controller";
import { OrigenIdiomaDatasourceImpl } from '../../infraestructure/datasource/origenIdioma.datasource.impl';
import { origenIdiomaRepositoryImpl } from '../../infraestructure/repositories/origenIdioma.repository.impl';

export class OrigenIdiomaRoutes {
    static get routes(): Router {
        const router = Router();

        const datasource = new OrigenIdiomaDatasourceImpl();
        const inventarioRepository = new origenIdiomaRepositoryImpl( datasource );
        const origenidiomaController = new origenIdiomaController(inventarioRepository);

        router.get('/',origenidiomaController.getOrigenIdioma);
        router.get('/:id', origenidiomaController.getOrigenIdiomaById);
        router.post('/', origenidiomaController.createOrigenIdioma);
        router.put('/:id', origenidiomaController.updateOrigenIdioma);
        router.delete('/:id', origenidiomaController.deleteOrigenIdioma);
        return router;
    }
}