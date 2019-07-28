import { vehiclesActions, vehiclesReducer } from ".";
import vehiclesActionTypes from "./actions.types";

const vehicleToTest = {
  plate: "ABC123",
  owner: "Sebastian Botero",
  model: "A6",
  brand: "Audi",
  color: "blue",
  type: "car"
};

const vehiclesListToTest = [
  vehicleToTest,
  {
    plate: "CBA312",
    owner: "Ana Pinto",
    model: "Logan",
    brand: "Renault",
    color: "gray",
    type: "car"
  }
];

describe("Vehicles Actions", () => {
  it("should create an action to start adding a vehicle", () => {
    const expectedAction = {
      type: vehiclesActionTypes.ADD_VEHICLE_START,
      vehicle: vehicleToTest
    };
    expect(vehiclesActions.addVehicleStart(vehicleToTest)).toEqual(
      expectedAction
    );
  });

  it("should create an action for failing to fetch", () => {
    const expectedAction = {
      type: vehiclesActionTypes.GET_ALL_VEHICLES_FAILURE,
      errorMessage: "Error fetching"
    };
    expect(vehiclesActions.getAllVehiclesFailure("Error fetching")).toEqual(
      expectedAction
    );
  });

  it("should create an action for success of fetching vehicles", () => {
    const expectedAction = {
      type: vehiclesActionTypes.GET_ALL_VEHICLES_SUCCESS,
      vehicles: vehiclesListToTest
    };
    expect(vehiclesActions.getAllVehiclesSuccess(vehiclesListToTest)).toEqual(
      expectedAction
    );
  });

  it("should create an action to start fetching vehicles", () => {
    const filters = {
      page: 1,
      limit: 2,
      type: "car",
      searchText: "test"
    };
    const expectedAction = {
      type: vehiclesActionTypes.GET_ALL_VEHICLES_START,
      filters
    };
    expect(vehiclesActions.getAllVehiclesStart(filters)).toEqual(
      expectedAction
    );
  });
});

describe("Vehicles reducer", () => {
  it("should add a Vehicle with plate, owner, model, brand, color and type", () => {
    expect(
      vehiclesReducer(
        {
          data: vehiclesListToTest
        },
        {
          type: vehiclesActionTypes.ADD_VEHICLE_SUCCESS,
          vehicle: vehicleToTest
        }
      )
    ).toMatchObject({
      data: [...vehiclesListToTest, vehicleToTest]
    });
  });
  it("should update a vehicle", () => {
    const vehicleToUpdate = {
      ...vehicleToTest,
      owner: "paco"
    };
    expect(
      vehiclesReducer(
        {
          data: vehiclesListToTest
        },
        {
          type: vehiclesActionTypes.UPDATE_VEHICLE_SUCCESS,
          vehicle: vehicleToUpdate
        }
      )
    ).toMatchObject({
      data: [...vehiclesListToTest].map(vh => {
        if (vh.plate === vehicleToUpdate.plate) {
          return vehicleToUpdate;
        }
        return vh;
      })
    });
  });
  it("should delete a vehicle", () => {
    const plateToTest = "ABC123";
    expect(
      vehiclesReducer(
        {
          data: vehiclesListToTest
        },
        {
          type: vehiclesActionTypes.DELETE_VEHICLE_SUCCESS,
          plate: plateToTest
        }
      )
    ).toMatchObject({
      data: [...vehiclesListToTest].filter(vh => vh.plate !== plateToTest)
    });
  });
});
