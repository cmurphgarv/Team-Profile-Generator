const Intern = require("../lib/intern");

describe("Intern", () => {
    describe("getSchool", () => {
        it("should return string of the intern's school", () => {
          const school = "Purdue University";
          
          const result = new Intern("Ted", 4, "blah@gmail.com", school).getSchool();
    
          expect(result).toEqual(school);
        });
      })

    describe("getRole", () => {
        it("should return a role string", () => {
          const role = "Intern";
          
          const result = new Intern("Ted", 4, "blah@gmail.com", role).getRole();
    
          expect(result).toEqual(role);
        });
      })
})