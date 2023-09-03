/**
 * post /admin/products create a product
 * get /admin/products/ids=120349,123023 -> Get a list of products
 * get  /admin/products/[id] -> Get a single product
 * put /admin/products/[id] -> update a product
 * del /admin/products/[id] -> Delete a product
 *
 * */

import express from "express";
import chai, { expect } from "chai";
import request from "supertest";

const app = express();
describe("POST Create Products", () => {
  it("should create wallet for the user", () => {
    request(app)
      .post("123456/wallet")
      .send({})
      .expect(201)
      .then((res) => {
        expect(res.headers.location).to.be.eql("123456/wallet");
      });
  });
});
