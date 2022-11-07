const Engineer = require("../lib/engineer");

describe("Engineer", () => {
    describe("getGithub", () => {
        it("should return link to user's github", () => {
          const githubUsername = "cmurphgarv";
          const githubFinal = "<a href=\"https://github.com/cmurphgarv\" target=\"_blank\">cmurphgarv</a>";
          
          const result = new Engineer("Ted", 4, "blah@gmail.com", githubUsername).getGithub();
    
          expect(result).toEqual(githubFinal);
        });
      })

    describe("getRole", () => {
        it("should return a role string", () => {
          const role = "Engineer";
          
          const result = new Engineer("Ted", 4, "blah@gmail.com", role).getRole();
    
          expect(result).toEqual(role);
        });
      })
})