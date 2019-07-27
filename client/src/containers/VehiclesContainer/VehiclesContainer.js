import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { vehiclesActions } from "../../store/vehicles";

import { Spin, Modal } from "antd";

import "./VehiclesContainer.less";
import Filters from "../../components/Filters/Filters";
import VehicleItem from "../../components/VehicleItem/VehicleItem";
import VehicleForm from "../../components/VehicleForm/VehicleForm";

export default function VehiclesContainer() {
  const vehicles = useSelector(({ vehicles }) => vehicles.data);
  const isLoading = useSelector(({ vehicles }) => vehicles.loading.get);
  const [searchText, setSearchText] = useState("");
  const [activeType, setActiveType] = useState("all");
  const [activeVehicle, setActiveVehicle] = useState({});
  const [openModal, setOpenModal] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(
      vehiclesActions.getAllVehiclesStart({
        searchText,
        type: activeType
      })
    );
  }, [dispatch, searchText, activeType]);

  function handleVehicleFormSubmit(values) {
    if (activeVehicle.new) {
      dispatch(vehiclesActions.addVehicleStart(values));
    } else {
      dispatch(vehiclesActions.updateVehicleStart(values));
    }
    handleCloseModal();
  }

  function handleTypeClick(type) {
    const newType = type === activeType ? "all" : type;
    setActiveType(newType);
  }

  function handleVehicleClick(vehicle) {
    setActiveVehicle(vehicle);
    setOpenModal(true);
  }

  function handleAddVehicle(day) {
    setActiveVehicle({
      new: true
    });
    setOpenModal(true);
  }

  function handleVehicleDelete() {
    dispatch(vehiclesActions.deleteVehicleStart(activeVehicle.plate));
    handleCloseModal();
  }

  function handleCloseModal() {
    setOpenModal(false);
  }

  return (
    <div className="vehicles-root">
      <Filters
        searchText={searchText}
        onChangeSearch={value => setSearchText(value)}
        activeType={activeType}
        onTypeClick={handleTypeClick}
        onAddClick={handleAddVehicle}
      />
      <div className="vehicles-container">
        {vehicles &&
          vehicles.map(vehicle => (
            <VehicleItem
              vehicle={vehicle}
              key={vehicle.plate}
              onClick={handleVehicleClick}
            />
          ))}
        {vehicles && vehicles.length <= 0 && (
          <div style={{ margin: "3rem auto" }}>No vehicles found</div>
        )}
        {isLoading && <Spin style={{ margin: "auto" }} />}
      </div>
      <Modal
        centered
        visible={openModal}
        title={activeVehicle.new ? "New Vehicle" : "Edit Vehicle"}
        footer={null}
        onCancel={handleCloseModal}
      >
        <VehicleForm
          vehicle={activeVehicle}
          onCancelClick={handleCloseModal}
          onDeleteClick={handleVehicleDelete}
          onSubmit={handleVehicleFormSubmit}
        />
      </Modal>
    </div>
  );
}
