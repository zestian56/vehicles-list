export const getAllVehicles = async ({ context, query }, res) => {
  const { models } = context;
  const { type, search } = query;

  const vehicles = models.Vehicle.findAll(type, search);
  return res.status(200).json({
    edges: vehicles
  });
};

export const addVehicle = async ({ context, body }, res) => {
  const { models } = context;
  const newVehicle = {
    owner: body.owner,
    brand: body.brand,
    model: body.model,
    plate: body.plate,
    color: body.color,
    type: body.type
  };
  const vehicle = await models.Vehicle.add(newVehicle);
  return res.status(200).json({
    data: vehicle
  });
};

export const deleteVehicle = async ({ params, context }, res) => {
  const { models } = context;
  const { id } = params;

  const status = await models.Vehicle.delete(id);
  return res.status(200).json({
    data: status
  });
};

export const updateVehicle = async ({ params, context, body }, res) => {
  const { models } = context;
  const { id } = params;

  const newVehicle = {
    owner: body.owner,
    brand: body.brand,
    model: body.model,
    plate: body.plate,
    color: body.color,
    type: body.type
  };

  const vehicle = await models.Vehicle.update(id, newVehicle);
  return res.status(200).json({
    data: vehicle
  });
};
