import axios from "axios";
import { serverConfig } from "../config";

class VehiclesService {
  constructor() {
    this.instance = axios.create({
      baseURL: serverConfig.getUrl(),
      timeout: 25000
    });
  }
  getAllVehicles = (page = 1, limit = 20, searchText, type = "all") => {
    const searchQuery = searchText ? `&search=${searchText}` : "";
    return this.instance.get(
      `vehicles?page=${page}&limit=${limit}&type=${type}${searchQuery}`
    );
  };
  postVehicle = vehicle => {
    return this.instance.post("vehicles", vehicle);
  };

  updateVehicle = vehicle => {
    return this.instance.put(`vehicles/${vehicle.plate}`, vehicle);
  };

  deleteVehicle = plate => {
    return this.instance.delete(`vehicles/${plate}`);
  };
}

export default new VehiclesService();
