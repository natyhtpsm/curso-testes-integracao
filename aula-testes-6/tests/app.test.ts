import supertest from "supertest";

import app from "./../src/app";

const api = supertest(app);

describe("API test", () => {
  it("teste health", async () => {
    const response = await api.get("/health");
    const statusCode = response.status;
    expect(statusCode).toBe(200);
  })
  it("teste livros", async () => {
    const response = await api.get("/event");
    expect(response.body).toEqual(
      expect.arrayContaining([
        expect.objectContaining({
          id: expect.any(Number),
          title: expect.any(String),
          image: expect.any(String),
          date: expect.any(String)
        })
      ])
    )
  })
});