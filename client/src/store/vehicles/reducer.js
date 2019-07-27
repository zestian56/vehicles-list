import vehiclesActionTypes from "./actions.types";

const initialState = {
  data: [],
  loading: {
    get: false,
    update: false,
    delete: false,
    add: false
  },
  errors: {
    get: false,
    update: false,
    delete: false,
    add: false
  }
};

function onUpdateVehicleSuccess(state, vehicle) {
  const newVehicles = [...state.data];
  const vehicleIndex = newVehicles.findIndex(vh => vehicle.plate === vh.plate);
  newVehicles[vehicleIndex] = vehicle;
  return {
    ...state,
    data: newVehicles,
    loading: {
      ...state.loading,
      add: false
    },
    errors: {
      ...state.loading,
      add: false
    }
  };
}
function onDeleteVehicleSuccess(state, plate) {
  const newVehicles = [...state.data].filter(vh => vh.plate !== plate);

  return {
    ...state,
    data: newVehicles,
    loading: {
      ...state.loading,
      add: false
    },
    errors: {
      ...state.loading,
      add: false
    }
  };
}

function onAddVehicleSuccess(state, vehicle) {
  return {
    ...state,
    data: [...state.data, vehicle],
    loading: {
      ...state.loading,
      add: false
    },
    errors: {
      ...state.loading,
      add: false
    }
  };
}

function onGetAllVehiclesSuccess(state, vehicles) {
  return {
    ...state,
    data: vehicles,
    loading: {
      ...state.loading,
      get: false
    },
    errors: {
      ...state.errors,
      get: false
    }
  };
}

function onGetAllVehiclesStart(state) {
  return {
    ...state,
    data: [],
    loading: {
      ...state.loading,
      get: true
    },
    errors: {
      ...state.errors,
      get: false
    }
  };
}

function onGetVehiclesFailure(state, errorMessage) {
  return {
    ...state,
    loading: {
      ...state.loading,
      get: false
    },
    errors: {
      ...state.errors,
      get: errorMessage
    }
  };
}
function onVehicleActionFaliure(state, errorLabel, errorMessage) {
  return {
    ...state,
    loading: {
      ...state.loading,
      [errorLabel]: false
    },
    errors: {
      ...state.errors,
      [errorLabel]: errorMessage
    }
  };
}
export default function vehiclesReducer(state = initialState, action) {
  switch (action.type) {
    case vehiclesActionTypes.GET_ALL_VEHICLES_SUCCESS:
      return onGetAllVehiclesSuccess(state, action.vehicles);
    case vehiclesActionTypes.GET_ALL_VEHICLES_FAILURE:
      return onGetVehiclesFailure(state, action.errorMessage);
    case vehiclesActionTypes.GET_ALL_VEHICLES_START:
      return onGetAllVehiclesStart(state, action.vehicles);
    case vehiclesActionTypes.ADD_VEHICLE_SUCCESS:
      return onAddVehicleSuccess(state, action.vehicle);
    case vehiclesActionTypes.DELETE_VEHICLE_SUCCESS:
      return onDeleteVehicleSuccess(state, action.plate);
    case vehiclesActionTypes.UPDATE_VEHICLE_SUCCESS:
      return onUpdateVehicleSuccess(state, action.vehicle);
    case vehiclesActionTypes.VEHICLE_ACTION_FAILURE:
      return onVehicleActionFaliure(
        state,
        action.errorLabel,
        action.errorMessage
      );
    default:
      return state;
  }
}
