const handleErrors = app => {
  app.use((error, req, res, next) => {
    return res.status(400).json({
      status: 400,
      code: "Bad Request",
      message: error.message,
    });
  });
};

export default handleErrors;
