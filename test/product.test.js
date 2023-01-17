import Product from "../models/product.js";

describe("#find()", function () {
  it("responds with matching records", async function () {
    const prods = await Product.find();
    prods.should.have.length() > 0;
  });
});
