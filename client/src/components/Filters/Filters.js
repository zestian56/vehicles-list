import React from "react";
import PropTypes from "prop-types";
import { Input } from "antd";
import { Button, Icon } from "antd";

import "./Filters.less";

const { Search } = Input;
const ButtonGroup = Button.Group;

function Filters(props) {
  const {
    searchText,
    onChangeSearch,
    activeType,
    onTypeClick,
    onAddClick
  } = props;
  return (
    <div className="filters-root">
      <Search
        className="search-input"
        placeholder="Search by Plate/Model/Color/Brand/Owner"
        onSearch={value => console.log(value, "SEARCH")}
        onChange={e => onChangeSearch(e.target.value)}
        value={searchText}
      />
      <ButtonGroup className="button-group">
        <Button
          className={activeType === "car" ? "active" : ""}
          onClick={() => onTypeClick("car")}
        >
          Car
        </Button>
        <Button
          className={activeType === "bike" ? "active" : ""}
          onClick={() => onTypeClick("bike")}
        >
          Bike
        </Button>
        <Button
          className={activeType === "truck" ? "active" : ""}
          onClick={() => onTypeClick("truck")}
        >
          Truck
        </Button>
      </ButtonGroup>
      <ButtonGroup className="button-group">
        <Button onClick={onAddClick}>
          New Vehicle
          <Icon type="plus" />
        </Button>
      </ButtonGroup>
    </div>
  );
}

Filters.propTypes = {
  searchText: PropTypes.string,
  onChangeSearch: PropTypes.func,
  onTypeClick: PropTypes.func,
  onAddClick: PropTypes.func,
  activeType: PropTypes.string
};

Filters.defaultProps = {
  onChangeSearch: () => {},
  searchText: "",
  activeType: "all",
  onTypeClick: () => {},
  onAddClick: () => {}
};

export default Filters;
