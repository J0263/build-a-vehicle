// importing classes from other files
import inquirer from "inquirer";
import Truck from "./Truck.js";
import Car from "./Car.js";
import Motorbike from "./Motorbike.js";
import Wheel from "./Wheel.js";

// define the Cli class
class Cli {
  // TODO: update the vehicles property to accept Truck and Motorbike objects as well
  vehicles: (Car | Truck | Motorbike)[];
  selectedVehicleVin: string | undefined;
  exit: boolean = false;

  // TODO: Update the constructor to accept Truck and Motorbike objects as well
  constructor(vehicles: (Car | Truck | Motorbike)[]) {
    this.vehicles = vehicles;
  }

  // static method to generate a vin
  static generateVin(): string {
    // return a random string
    return (
      Math.random().toString(36).substring(2, 15) +
      Math.random().toString(36).substring(2, 15)
    );
  }

  // method to choose a vehicle from existing vehicles
  chooseVehicle(): void {
    inquirer
      .prompt([
        {
          type: "list",
          name: "selectedVehicleVin",
          message: "Select a vehicle to perform an action on",
          choices: this.vehicles.map((vehicle) => ({
            name: `${vehicle.vin} -- ${vehicle.make} ${vehicle.model}`,
            value: vehicle.vin,
          })),
        },
      ])
      .then((answers) => {
        // set the selectedVehicleVin to the vin of the selected vehicle
        this.selectedVehicleVin = answers.selectedVehicleVin;
        // perform actions on the selected vehicle
        this.performActions();
      });
  }

  // method to create a vehicle
  createVehicle(): void {
    inquirer
      .prompt([
        {
          type: "list",
          name: "vehicleType",
          message: "Select a vehicle type",
          // TODO: Update the choices array to include Truck and Motorbike
          choices: ["Car", "Truck", "Motorbike"],
        },
      ])
      .then((answers) => {
        if (answers.vehicleType === "Car") {
          // create a car
          this.createCar();
        }
        // TODO: add statements to create a truck or motorbike if the user selects the respective vehicle type
        else if (answers.vehicleType === "Truck") {
          this.createTruck();
        } else if (answers.vehicleType === "Motorbike") {
          this.createMotorbike();
        }
      });
  }

  // method to create a car
  createCar(): void {
    inquirer
      .prompt([
        {
          type: "input",
          name: "color",
          message: "Enter Color",
        },
        {
          type: "input",
          name: "make",
          message: "Enter Make",
        },
        {
          type: "input",
          name: "model",
          message: "Enter Model",
        },
        {
          type: "input",
          name: "year",
          message: "Enter Year",
        },
        {
          type: "input",
          name: "weight",
          message: "Enter Weight",
        },
        {
          type: "input",
          name: "topSpeed",
          message: "Enter Top Speed",
        },
      ])
      .then((answers) => {
        const car = new Car(
          // TODO: The generateVin method is static and should be called using the class name Cli, make sure to use Cli.generateVin() for creating a truck and motorbike as well!
          Cli.generateVin(),
          answers.color,
          answers.make,
          answers.model,
          parseInt(answers.year),
          parseInt(answers.weight),
          parseInt(answers.topSpeed),
          []
        );
        // push the car to the vehicles array
        this.vehicles.push(car);
        // set the selectedVehicleVin to the vin of the car
        this.selectedVehicleVin = car.vin;
        // perform actions on the car
        this.performActions();
      });
  }

  // method to create a truck
  createTruck(): void {
    inquirer
      .prompt([
        {
          type: "input",
          name: "color",
          message: "Enter Color",
        },
        {
          type: "input",
          name: "make",
          message: "Enter Make",
        },
        {
          type: "input",
          name: "model",
          message: "Enter Model",
        },
        {
          type: "input",
          name: "year",
          message: "Enter Year",
        },
        {
          type: "input",
          name: "weight",
          message: "Enter Weight",
        },
        {
          type: "input",
          name: "topSpeed",
          message: "Enter Top Speed",
        },
        {
          type: "input",
          name: "towingCapacity",
          message: "Enter Towing Capacity",
        },
      ])
      .then((answers) => {
        // TODO: Use the answers object to pass the required properties to the Truck constructor
        const truck = new Truck(
          Cli.generateVin(),
          answers.color,
          answers.make,
          answers.model,
          parseInt(answers.year),
          parseInt(answers.weight),
          parseInt(answers.topSpeed),
          [],
          parseInt(answers.towingCapacity)
        );
        // TODO: push the truck to the vehicles array
        this.vehicles.push(truck);
        // TODO: set the selectedVehicleVin to the vin of the truck
        this.selectedVehicleVin = truck.vin;
        // TODO: perform actions on the truck
        this.performActions();
      });
  }

  // method to create a motorbike
  createMotorbike(): void {
    inquirer
      .prompt([
        {
          type: "input",
          name: "color",
          message: "Enter Color",
        },
        {
          type: "input",
          name: "make",
          message: "Enter Make",
        },
        {
          type: "input",
          name: "model",
          message: "Enter Model",
        },
        {
          type: "input",
          name: "year",
          message: "Enter Year",
        },
        {
          type: "input",
          name: "weight",
          message: "Enter Weight",
        },
        {
          type: "input",
          name: "topSpeed",
          message: "Enter Top Speed",
        },
        {
          type: "input",
          name: "frontWheelDiameter",
          message: "Enter Front Wheel Diameter",
        },
        {
          type: "input",
          name: "frontWheelBrand",
          message: "Enter Front Wheel Brand",
        },
        {
          type: "input",
          name: "rearWheelDiameter",
          message: "Enter Rear Wheel Diameter",
        },
        {
          type: "input",
          name: "rearWheelBrand",
          message: "Enter Rear Wheel Brand",
        },
      ])
      .then((answers) => {
        // TODO: Use the answers object to pass the required properties to the Motorbike constructor
        const motorbike = new Motorbike(
          Cli.generateVin(),
          answers.color,
          answers.make,
          answers.model,
          parseInt(answers.year),
          parseInt(answers.weight),
          parseInt(answers.topSpeed),
          [
            new Wheel(parseInt(answers.frontWheelDiameter), answers.frontWheelBrand),
            new Wheel(parseInt(answers.rearWheelDiameter), answers.rearWheelBrand),
          ]
        );
        // TODO: push the motorbike to the vehicles array
        this.vehicles.push(motorbike);
        // TODO: set the selectedVehicleVin to the vin of the motorbike
        this.selectedVehicleVin = motorbike.vin;
        // TODO: perform actions on the motorbike
        this.performActions();
      });
  }

  // method to find a vehicle to tow
  // TODO: add a parameter to accept a truck object
  findVehicleToTow(truck: Truck): void {
    inquirer
      .prompt([
        {
          type: "list",
          name: "vehicleToTow",
          message: "Select a vehicle to tow",
          choices: this.vehicles.map((vehicle) => ({
            name: `${vehicle.vin} -- ${vehicle.make} ${vehicle.model}`,
            value: vehicle,
          })),
        },
      ])
      .then((answers) => {
        // TODO: check if the selected vehicle is the truck
        if (answers.vehicleToTow === truck) {
          console.log("Truck cannot tow itself.");
        } else {
          // TODO: if it is not, tow the selected vehicle then perform actions on the truck to allow the user to select another action
          truck.tow(answers.vehicleToTow);
        }
        this.performActions();
      });
  }

  // method to perform actions on a vehicle
  performActions(): void {
    inquirer
      .prompt([
        {
          type: "list",
          name: "action",
          message: "Select an action",
          // TODO: add options to tow and wheelie
          choices: [
            "Print details",
            "Start vehicle",
            "Accelerate 5 MPH",
            "Decelerate 5 MPH",
            "Stop vehicle",
            "Turn right",
            "Turn left",
            "Reverse",
            "Tow a vehicle",
            "Do a wheelie",
            "Select or create another vehicle",
            "Exit",
          ],
        },
      ])
      .then((answers) => {
        // perform the selected action
        const selectedVehicle = this.vehicles.find(vehicle => vehicle.vin === this.selectedVehicleVin);
        if (!selectedVehicle) return;

        if (answers.action === "Print details") {
          selectedVehicle.printDetails();
        } else if (answers.action === "Start vehicle") {
          selectedVehicle.start();
        } else if (answers.action === "Accelerate 5 MPH") {
          selectedVehicle.accelerate(5);
        } else if (answers.action === "Decelerate 5 MPH") {
          selectedVehicle.decelerate(5);
        } else if (answers.action === "Stop vehicle") {
          selectedVehicle.stop();
        } else if (answers.action === "Turn right") {
          selectedVehicle.turn("right");
        } else if (answers.action === "Turn left") {
          selectedVehicle.turn("left");
        } else if (answers.action === "Reverse") {
          selectedVehicle.reverse();
        } else if (answers.action === "Tow a vehicle" && selectedVehicle instanceof Truck) {
          this.findVehicleToTow(selectedVehicle);
        } else if (answers.action === "Do a wheelie" && selectedVehicle instanceof Motorbike) {
          selectedVehicle.wheelie();
        } else if (answers.action === "Select or create another vehicle") {
          this.startCli();
          return;
        } else {
          this.exit = true;
        }
        if (!this.exit) {
          this.performActions();
        }
      });
  }

  // method to start the cli
  startCli(): void {
    inquirer
      .prompt([
        {
          type: "list",
          name: "CreateOrSelect",
          message:
            "Would you like to create a new vehicle or perform an action on an existing vehicle?",
          choices: ["Create a new vehicle", "Select an existing vehicle"],
        },
      ])
      .then((answers) => {
        // check if the user wants to create a new vehicle or select an existing vehicle
        if (answers.CreateOrSelect === "Create a new vehicle") {
          this.createVehicle();
        } else {
          this.chooseVehicle();
        }
      });
  }
}

// export the Cli class
export default Cli;