const express = require("express");
const router = express.Router();

const controller = require("../../controllers/test.controller");

// page index.pug
router.get("/", controller.index);

// page viewCars.pug
router.get("/cars/viewCars", controller.viewCars);

// page insertCars.pug
router.post("/cars/insertCar", controller.insertCar);
router.get("/cars/insertCarView", controller.insertCarView);

// page deleteCars.pug
router.post("/cars/deleteCar", controller.deleteCar);
router.get("/cars/deleteCarView", controller.deleteCarView);

module.exports = router;
