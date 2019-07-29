import { startServer } from "./server/server";
import { serverSettings } from "./config/config";
import models from "./api/models";

process.on("uncaughtException", err => {
  console.error("Unhandled Exception", err);
});
process.on("uncaughtRejection", (err, promise) => {
  console.error("Unhandled Rejection", err);
});

const main = async () => {
  await startServer(serverSettings, models);
  console.log(
    `Server running in ${serverSettings.host}:${serverSettings.port}`
  );
};

main();
