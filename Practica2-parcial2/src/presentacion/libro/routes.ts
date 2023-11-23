import { Router } from "express";
import { LibroController } from "./controller";

export class LibroRoutes {
    static get routes(): Router {
        const router = Router();
        const LibrosController = new LibroController();
        router.get('/',LibrosController.getlibro);
        router.get('/:id', LibrosController.getlibroById);
        router.post('/', LibrosController.createLibro);
        router.put('/:id', LibrosController.updatelibro);
        router.delete('/:id', LibrosController.deletelibro);
        return router;
    }
}