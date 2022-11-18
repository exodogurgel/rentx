import { Router } from "express";
import { CreateSpecificationsController } from "../../../../modules/cars/useCases/createSpecifications/CreateSpecificationsController";
import { ensureAdmin } from "../middlewares/ensureAdmin";
import { ensureAuthenticated } from "../middlewares/ensureAutheticated";

const specificationsRoutes = Router();

const createSpecificationsController = new CreateSpecificationsController();

specificationsRoutes.post(
  "/",
  ensureAuthenticated,
  ensureAdmin,
  createSpecificationsController.handle
);

export { specificationsRoutes };
