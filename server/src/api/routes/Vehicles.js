import express from "express";
import { vehiclesController } from "../controllers";

const router = express.Router();

router.get("/", vehiclesController.getAllVehicles);
router.post("/", vehiclesController.addVehicle);
router.put("/:id", vehiclesController.updateVehicle);
router.delete("/:id", vehiclesController.deleteVehicle);

export default router;
