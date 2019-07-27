import vehiclesActionTypes from "./actions.types";

export const getAllVehiclesStart = (filters = {}) => ({
  type: vehiclesActionTypes.GET_ALL_VEHICLES_START,
  filters
});

export const getAllVehiclesSuccess = vehicles => ({
  type: vehiclesActionTypes.GET_ALL_VEHICLES_SUCCESS,
  vehicles
});

export const getAllVehiclesFailure = errorMessage => ({
  type: vehiclesActionTypes.GET_ALL_VEHICLES_FAILURE,
  errorMessage
});

export const addVehicleStart = vehicle => ({
  type: vehiclesActionTypes.ADD_VEHICLE_START,
  vehicle
});

export const deleteVehicleStart = plate => ({
  type: vehiclesActionTypes.DELETE_VEHICLE_START,
  plate
});

export const updateVehicleStart = vehicle => ({
  type: vehiclesActionTypes.UPDATE_VEHICLE_START,
  vehicle
});

export const addVehicleSuccess = vehicle => ({
  type: vehiclesActionTypes.ADD_VEHICLE_SUCCESS,
  vehicle
});

export const deleteVehicleSuccess = plate => ({
  type: vehiclesActionTypes.DELETE_VEHICLE_SUCCESS,
  plate
});

export const updateVehicleSuccess = vehicle => ({
  type: vehiclesActionTypes.UPDATE_VEHICLE_SUCCESS,
  vehicle
});

export const vehicleActionFailure = (errorMessage,errorLabel) => ({
  type: vehiclesActionTypes.VEHICLE_ACTION_FAILURE,
  errorMessage,
  errorLabel
});
