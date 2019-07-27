import React from "react";
import PropTypes from "prop-types";

import "./VehicleItem.less";

function VehicleItem(props) {
  const { vehicle, onClick } = props;
  return (
    <div className="vehicle-item-root" onClick={() => onClick(vehicle)}>
      <div className="plate-item">{vehicle.plate}</div>
      <div className="vehicle-items-container">
        <div className="vehicle-item-info vehicle-item-owner">
          {vehicle.owner}
        </div>
        <div className="vehicle-item-info hidden-lg">{`${vehicle.brand} ${
          vehicle.model
        }`}</div>
        <div className="vehicle-item-info">{vehicle.color}</div>
        <div className="vehicle-item-info hidden-md">{vehicle.brand}</div>
        <div className="vehicle-item-info hidden-md">{vehicle.model}</div>
        <div className="vehicle-item-info hidden-sm">{vehicle.type}</div>
      </div>
    </div>
  );
}

VehicleItem.propTypes = {
  vehicle: PropTypes.shape({
    plate: PropTypes.string,
    color: PropTypes.string,
    model: PropTypes.string,
    owner: PropTypes.string,
    brand: PropTypes.string
  }),
  onClick: PropTypes.func
};

VehicleItem.defaultProps = {
  onClick: () => {}
};
export default VehicleItem;
