import { Router } from "express";
import { NacionalidadController } from "./controller";

export class NacionalidadRoutes {
    static get routes(): Router {
        const router = Router();
        const NacionalidadesController = new NacionalidadController();
        router.get('/',NacionalidadesController.getNacionalidad);
        router.get('/:id', NacionalidadesController.getNacionalidadById);
        router.post('/', NacionalidadesController.createNacionalidad);
        router.put('/:id', NacionalidadesController.updateNacionalidad);
        router.delete('/:id', NacionalidadesController.deleteNacionalidad);
        return router;
    }
}