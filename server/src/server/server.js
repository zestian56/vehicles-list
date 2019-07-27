import express from "express";
import cors from "cors";
import setupRoutes from "../api/routes";
import bodyParser from "body-parser";
import handleErrors from "../utils/errors";

const startServer = ({ port, host }, models) => {
  return new Promise((resolve) => {
    const app = express();
    app.use(cors());
    app.use(bodyParser.urlencoded({ extended: true }));
    app.use(bodyParser.json());
    app.use(async (req, res, next) => {
      req.context = {
        models
      };
      next();
    });

    setupRoutes(app);
    handleErrors(app);

    resolve(app.listen(port, host));
  });
};


export { startServer };
