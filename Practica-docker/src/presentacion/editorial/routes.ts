import { Router } from "express";
import { EditorialController } from "./controller";

export class EditorialRoutes {
    static get routes(): Router {
        const router = Router();
        const editorialController = new EditorialController();
        router.get('/',editorialController.getEditorial);
        router.get('/:id', editorialController.getEditorialById);
        router.post('/', editorialController.createEditorial);
        router.put('/:id', editorialController.updateEditorial);
        router.delete('/:id', editorialController.deleteEditorial);
        return router;
    }
}