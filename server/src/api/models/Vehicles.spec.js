import chai , { expect } from "chai";
import Vehicles from "./Vehicles";


describe("Vehicles Model", () => {
  describe("Get All vehicles", () => {
    it("Should return an array", () => {
        return expect(Vehicles.findAll("item", "ITEM")).to.be.an.instanceOf(Array);
    });
  });
});
