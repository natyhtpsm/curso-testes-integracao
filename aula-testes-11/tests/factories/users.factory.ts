describe("GET /users tests", () => {
    it("should return a single user", async () => {
      const userData: UserInput = {
        email: "teste@teste.com.br",
        password: "teste"
      };
  
      const createdUser = await prisma.user.create({
        data: userData
      });
  
      const { status, body } = await api.get(`/users/${createdUser.id}`);
      expect(status).toBe(200);
      expect(body).toEqual({
        ...userData,
        id: createdUser.id
      });
    });
  
    it("should return 404 when can't find a user by id", async () => {
      const { status } = await api.get("/users/1234");
      expect(status).toBe(404);
    });
  
    it("should return all users", async () => {
      const userData: UserInput = {
        email: "teste@teste.com.br",
        password: "teste"
      };
  
      await prisma.user.createMany({
        data: [{
          ...userData
        }, {
          ...userData, email: "teste2@teste.com.br"
        }]
      });
  
      const { status, body } = await api.get("/users");
      expect(status).toBe(200);
      expect(body).toHaveLength(2);
      expect(body).toEqual(expect.arrayContaining([
        expect.objectContaining({
          email: expect.any(String)
        })
      ]))
    });
  
  })