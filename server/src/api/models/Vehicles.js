import storage from "node-persist";
import initialData from "../../data/data.json";
import { itemContains } from "../../utils/search.js";

class Vehicle {
  constructor() {
    this.vehicles = [];
    storage
      .init({
        dir: "src/config/db/data/",
        stringify: JSON.stringify,
        parse: JSON.parse
      })
      .then(async () => {
        const vehiclesData = await storage.getItem("vehicles");
        if (!vehiclesData) {
          this.vehicles = initialData.vehicles;
          await storage.setItem("vehicles", this.vehicles);
        } else {
          this.vehicles = vehiclesData;
        }
      });
  }

  setItems(items) {
    storage.setItem("vehicles", items);
  }

  findAll(type, search) {
    return this.vehicles.filter(vehicle => {
      const filterByType = type === "all" || vehicle.type === type;
      const filterBySearch =
        !search ||
        (itemContains(vehicle.plate, search) ||
          itemContains(vehicle.model, search) ||
          itemContains(vehicle.brand, search) ||
          itemContains(vehicle.color, search) ||
          itemContains(vehicle.owner, search));
      return filterByType && filterBySearch;
    });
  }

  async add(data) {
    this.vehicles = [...this.vehicles, data];
    this.setItems(this.vehicles);
    return data;
  }

  async delete(plate) {
    this.vehicles = this.vehicles.filter(vehicle => vehicle.plate.toString() !== plate.toString());
    this.setItems(this.vehicles);
    return true;
  }

  async update(plate, data) {
    const vehicleIndex = this.vehicles.findIndex(
      vehicle => vehicle.plate === plate
    );
    const newVehicle = {
      ...this.vehicles[vehicleIndex],
      ...data
    };
    this.vehicles[vehicleIndex] = newVehicle;
    this.setItems(this.vehicles);
    return newVehicle;
  }
}

export default new Vehicle();
