import express from "express";
import LaptopController from "../controllers/laptops.js";

const laptopRouter = express.Router();
const laptopController = new LaptopController();

laptopRouter.get('/', laptopController.getAllLaptops);
laptopRouter.post('/', laptopController.createLaptops);
laptopRouter.get('/:id', laptopController.getLaptopsDetail);
laptopRouter.put('/:id', laptopController.updateLaptops);
laptopRouter.delete('/:id', laptopController.deleteLaptops);


export default laptopRouter;