const Employee = require("../lib/employee");

describe("Employee", () => {
    describe("getName", () => {
      it("should return a name", () => {
        const name = "Bob";
        
        const result = new Employee(name, 4, "blah@gmail.com").getName();
  
        expect(result).toEqual(name);
      });
    })

    describe("getID", () => {
        it("should return an ID number", () => {
          const id = "2";
          
          const result = new Employee("Ted", id, "blah@gmail.com").getID();
    
          expect(result).toEqual(id);
        });
      })

      describe("getRole", () => {
        it("should return a role string", () => {
          const role = "Employee";
          
          const result = new Employee("Ted", 4, "blah@gmail.com").getRole();
    
          expect(result).toEqual(role);
        });
      })

      describe("getEmail", () => {
        it("should return an email with mailto: interpolated", () => {
          const email = "bob@yahoo.com";
          const finalEmail = "mailto:bob@yahoo.com"

          const result = new Employee("Ted", 5, email).getEmail();
    
          expect(result).toEqual(finalEmail);
        });
      })

});

