import chai , { expect } from "chai";
import { itemContains } from "./search";


describe("Search utils", () => {
  describe("Contains function", () => {
    it("Should find value even with different caps", () => {
        return expect(itemContains("item", "ITEM")).to.eql(true);
    });
    it("Should not find value that is different", () => {
        
        return expect(itemContains("item", "ITEMS")).to.eql(false);
    });
  });
});
