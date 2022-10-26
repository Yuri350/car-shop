import { Router } from 'express';
import CarController from '../controllers/cars.controller';
import CarModel from '../models/cars.models';
import CarService from '../services/cars.service';

const route = Router();

const car = new CarModel();
const carService = new CarService(car);
const carController = new CarController(carService);

route.post('/cars', (req, res) => carController.create(req, res));

export default route;