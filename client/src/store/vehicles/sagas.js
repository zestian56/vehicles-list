import { call, put, takeLatest } from "@redux-saga/core/effects";
import vehiclesActionTypes from "./actions.types";
import vehiclesService from "../../services/vehicles";
import {
  getAllVehiclesFailure,
  getAllVehiclesSuccess,
  vehicleActionFailure,
  addVehicleSuccess,
  updateVehicleSuccess,
  deleteVehicleSuccess
} from "./actions";

function* getAllVehicles(action) {
  try {
    const vehiclesResponse = yield call(
      vehiclesService.getAllVehicles,
      action.filters.page,
      action.filters.limit,
      action.filters.searchText,
      action.filters.type
    );

    if (vehiclesResponse.status !== 200) {
      yield put(getAllVehiclesFailure("Error fetching"));
      return;
    }
    yield put(getAllVehiclesSuccess(vehiclesResponse.data.edges));
  } catch (e) {
    yield put(getAllVehiclesFailure(e.message));
  }
}

function* deleteVehicle(action) {
  try {
    const vehiclesResponse = yield call(
      vehiclesService.deleteVehicle,
      action.plate
    );

    if (vehiclesResponse.status !== 200) {
      yield put(vehicleActionFailure("Error fetching"));
      return;
    }
    yield put(deleteVehicleSuccess(action.plate));
  } catch (e) {
    yield put(vehicleActionFailure(e.message));
  }
}

function* updateVehicle(action) {
  try {
    const vehiclesResponse = yield call(
      vehiclesService.updateVehicle,
      action.vehicle
    );
    if (vehiclesResponse.status !== 200) {
      yield put(vehicleActionFailure("Error updating vehicle","update"));
      return;
    }
    yield put(updateVehicleSuccess(action.vehicle));
  } catch (e) {
    yield put(vehicleActionFailure(e.message,"update"));
  }
}

function* addVehicle(action) {
  try {
    const vehiclesResponse = yield call(
      vehiclesService.postVehicle,
      action.vehicle
    );

    if (vehiclesResponse.status !== 200) {
      yield put(vehicleActionFailure("Error Adding vehicle","add"));
      return;
    }
    yield put(addVehicleSuccess(action.vehicle));
  } catch (e) {
    yield put(vehicleActionFailure(e.message,"add"));
  }
}

const vehiclesSagas = [
  takeLatest(vehiclesActionTypes.GET_ALL_VEHICLES_START, getAllVehicles),
  takeLatest(vehiclesActionTypes.ADD_VEHICLE_START, addVehicle),
  takeLatest(vehiclesActionTypes.DELETE_VEHICLE_START,deleteVehicle),
  takeLatest(vehiclesActionTypes.UPDATE_VEHICLE_START,updateVehicle)
];

export default vehiclesSagas;
