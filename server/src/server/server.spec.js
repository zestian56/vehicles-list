import chai , { expect } from "chai";
import chaiAsPromised from "chai-as-promised";
import { startServer } from "./server";

chai.use(chaiAsPromised);

describe("Server", () => {
  describe("Starting Server", () => {
    it("Should require a port to start", () => {
        return expect(startServer({
            host: "localhost",
          })).to.eventually.be.rejectedWith("port")
          .and.be.an.instanceOf(Error);
    });
    it("Should be running in with desired port and host", () => {
        return expect(startServer({
            host: "localhost",
            port :4000
          })).to.eventually.be.fulfilled
    });
  });
});
