import { Router } from "express";
import { IdiomaController } from "./controller";
import { IdiomaDatasourceImpl } from '../../infraestructure/datasource/idioma.datasource.impl';
import { IdiomaRepositoryImpl } from '../../infraestructure/repositories/idioma.repository.impl';

export class IdiomaRoutes {
    static get routes(): Router {
        const router = Router();

        const datasource = new IdiomaDatasourceImpl();
        const inventarioRepository = new IdiomaRepositoryImpl( datasource );
        const idiomaController = new IdiomaController(inventarioRepository);

        router.get('/',idiomaController.getIdiomas);
        router.get('/:id', idiomaController.getIdiomaById);
        router.post('/', idiomaController.createIdioma);
        router.put('/:id', idiomaController.updateIdioma);
        router.delete('/:id', idiomaController.deleteIdioma);
        return router;
    }
}