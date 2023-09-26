import calculator from "calculator";
describe("Operações matemáticas", () => {  
    it("should return the sum of two numbers", () => {  
       expect(calculator.sum(1, 2)).toBe(3);
    });
    it("should return the sub of two numbers", () => {  
       expect(calculator.sub(1, 2)).toBe(-1);
    }); 
    it("should return the mul of two numbers", () => {  
       expect(calculator.mul(1, 2)).toBe(2);
    });
    it("should return the div of two numbers", () => {  
       expect(calculator.div(1, 2)).toBe(0.5);
    });
});