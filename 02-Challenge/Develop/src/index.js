"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Car_js_1 = __importDefault(require("./classes/Car.js"));
const Cli_js_1 = __importDefault(require("./classes/Cli.js"));
// create an array of vehicles
const vehicles = [];
// TODO: uncomment once trucks are implemented
// const truck1 = new Truck(Cli.generateVin(),"red", "Ford", "F-150", 2021, 5000, 120, [], 10000);
// will use default wheels
const car1 = new Car_js_1.default(Cli_js_1.default.generateVin(), 'blue', 'Toyota', 'Camry', 2021, 3000, 130, []);
// TODO: uncomment once motorbikes are implemented
// const motorbike1Wheels = [new Wheel(17, "Michelin"), new Wheel(17, "Michelin")];
// const motorbike1 = new Motorbike(Cli.generateVin(), "black", "Harley Davidson", "Sportster", 2021, 500, 125, motorbike1Wheels);
// push vehicles to array
// TODO: uncomment once trucks are implemented
// vehicles.push(truck1);
vehicles.push(car1);
// TODO: uncomment once motorbikes are implemented
// vehicles.push(motorbike1);
// create a new instance of the Cli class
const cli = new Cli_js_1.default(vehicles);
// start the cli
cli.startCli();
