import { Router } from "express";
import { TraduccionaIdiomaController } from "./controller";
import { TraduccionIdiomaDatasourceImpl } from '../../infraestructure/datasource/traduccionIdioma.datasource.impl';
import { traduccionIdiomaRepositoryImpl } from '../../infraestructure/repositories/traduccionIdioma.repository.impl';

export class TraduccionesRoutes {
    static get routes(): Router {
        const router = Router();

        const datasource = new TraduccionIdiomaDatasourceImpl();
        const inventarioRepository = new traduccionIdiomaRepositoryImpl( datasource );
        const traduccionaIdiomaController = new TraduccionaIdiomaController(inventarioRepository);

        router.get('/',traduccionaIdiomaController.getTraducciones);
        router.get('/:id', traduccionaIdiomaController.getTraduccionesById);
        router.post('/', traduccionaIdiomaController.createTraducciones);
        router.put('/:id', traduccionaIdiomaController.updateTraducciones);
        router.delete('/:id', traduccionaIdiomaController.deleteTraducciones);
        return router;
    }
}