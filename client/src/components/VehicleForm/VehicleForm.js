import React from "react";
import PropTypes from "prop-types";

import { Form, Input, Button, Select, Divider } from "antd";

import "./VehicleForm.less";

const vehicleTypes = [
  {
    value: "car",
    label: "Car"
  },
  {
    value: "bike",
    label: "Bike"
  },
  {
    value: "truck",
    label: "Truck"
  }
];
const vehicleColors = [
  {
    value: "white",
    label: "White"
  },
  {
    value: "red",
    label: "Red"
  },
  {
    value: "blue",
    label: "Blue"
  },
  {
    value: "black",
    label: "Black"
  },
  {
    value: "gray",
    label: "Gray"
  }
];
function VehicleForm(props) {
  const {
    vehicle,
    onCancelClick,
    onDeleteClick,
    onSubmit,
    form: { getFieldDecorator, validateFieldsAndScroll }
  } = props;

  function handleSubmit(e) {
    e.preventDefault();
    validateFieldsAndScroll((err, values) => {
      if (!err) {
        onSubmit({ ...values, new: vehicle.new });
      }
    });
  }

  return (
    <Form className="vehicle-form-root" onSubmit={handleSubmit}>
      <Form.Item>
        {getFieldDecorator("owner", {
          initialValue: vehicle.owner || "",
          rules: [{ required: true, message: "Please write the owner!" }]
        })(<Input type="text" placeholder="Owner" />)}
      </Form.Item>
      <Form.Item>
        {getFieldDecorator("brand", {
          initialValue: vehicle.brand || "",
          rules: [{ required: true, message: "Please write the brand!" }]
        })(<Input type="text" placeholder="Brand" />)}
      </Form.Item>
      <Form.Item>
        {getFieldDecorator("model", {
          initialValue: vehicle.model || "",
          rules: [{ required: true, message: "Please write the model!" }]
        })(<Input type="text" placeholder="Model" />)}
      </Form.Item>
      <div className="vehicle-form-group">
        <Form.Item className="vehicle-form-group-input">
          {getFieldDecorator("plate", {
            initialValue: vehicle.plate || "",
            rules: [
              { required: true, message: "Please write the plate!" },
              {
                pattern: new RegExp("^[A-Z]{3}[0-9]{3}$"),
                message: "Invalid plate!"
              }
            ]
          })(<Input type="text" placeholder="Plate" disabled={!vehicle.new} />)}
        </Form.Item>
        <Form.Item className="vehicle-form-group-input">
          {getFieldDecorator("color", {
            initialValue: vehicle.color || undefined,
            rules: [{ required: true, message: "Please select a color!" }]
          })(
            <Select placeholder="Select a color">
              {vehicleColors.map(color => (
                <Select.Option value={color.value} key={color.value}>
                  {color.label}
                </Select.Option>
              ))}
            </Select>
          )}
        </Form.Item>
      </div>
      <div className="vehicle-form-group">
        <Form.Item className="vehicle-form-group-input">
          {getFieldDecorator("type", {
            initialValue: vehicle.type || undefined,
            rules: [
              { required: true, message: "Please select a vehicle type!" }
            ]
          })(
            <Select placeholder="Select a type">
              {vehicleTypes.map(type => (
                <Select.Option value={type.value} key={type.value}>
                  {type.label}
                </Select.Option>
              ))}
            </Select>
          )}
        </Form.Item>
      </div>
      <Divider />
      <div className="vehicle-form-footer">
        <div>
          {!vehicle.new && (
            <Button type="danger" onClick={onDeleteClick}>
              Delete
            </Button>
          )}
        </div>
        <div>
          <Button
            className="vehicle-form-footer-cancel"
            onClick={onCancelClick}
          >
            Cancel
          </Button>
          <Button type="primary" htmlType="submit">
            Save
          </Button>
        </div>
      </div>
    </Form>
  );
}

VehicleForm.propTypes = {
  vehicle: PropTypes.any,
  onSubmit: PropTypes.func.isRequired,
  onCancelClick: PropTypes.func.isRequired,
  onDeleteClick: PropTypes.func
};

VehicleForm.defaultProps = {
  vehicle: {},
  onDeleteClick: () => {}
};

export default Form.create({ name: "vehicle-form" })(VehicleForm);
