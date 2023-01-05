import supertest from "supertest";
import app from "../server.js";

describe("Test user products", () => {
  it("all product", async () => {
    const response = await supertest(app).get("/api/v1/products");
    expect(response.status).toBe(200);
    console.log("get", response.body);
    expect(response.body).not.toStrictEqual([]);
  });
});
