import "dotenv/config";

const { env } = process;


export const serverSettings = {
  port: env.PORT,
  host: env.SERVICEHOST
};

const config = {
  serverSettings
};

export default config;
