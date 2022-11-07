const Manager = require("../lib/manager");

describe("Mananger", () => {
    describe("getOffice", () => {
        it("should return an office number", () => {
          const officeNum = 3;
          
          const result = new Manager("Ted", 4, "blah@gmail.com", officeNum).getOffice();
    
          expect(result).toEqual(officeNum);
        });
      })

    describe("getRole", () => {
        it("should return a role string", () => {
          const role = "Manager";
          
          const result = new Manager("Ted", 4, "blah@gmail.com", role).getRole();
    
          expect(result).toEqual(role);
        });
      })
})