import app from "app";
import supertest from "supertest";

const server = supertest(app);

describe("Health check", () =>{
   it("/health", async () => {
      const result = await server.get("/health");
      console.log(result);

      const statusCode = result.status;
      expect(statusCode).toBe(200); 
   });
});