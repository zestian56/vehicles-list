//calm-reef-50656.herokuapp.com
export const serverConfig = {
  host: "localhost:4000",
  protocol: "http",
  endpoint: "/",
  getUrl: function() {
    return `${this.protocol}://${this.host}${this.endpoint}`;
  }
};
