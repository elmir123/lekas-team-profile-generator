const Engineer = require("../lib/Engineer");
describe("Engineer", () => {
    describe("Initialization", ()=>{
        it("Should return the assigned name property with name property", ()=>{
            //Set test
            const testName = "Name";
            //Build Test
            const obj = new Engineer(testName, 0, "email@lekas.com", "username");
            //Asses
            expect(obj.name).toEqual(testName);
        });
        it("Should return the assigned id property with id property", ()=>{
            //Set test
            const testId = 1;
            //Build Test
            const obj = new Engineer("name", testId, "email@lekas.com", "username");
            //Asses
            expect(obj.id).toEqual(testId);
        });
        it("Should return the assigned email property with email property", ()=>{
            //Set test
            const testEmail = "email@lekas.com";
            //Build Test
            const obj = new Engineer("name", 0, testEmail, "username");
            //Asses
            expect(obj.email).toEqual(testEmail);
        });
        it("Should return the assigned github username property with github property", ()=>{
            //Set test
            const testGithub = "username";
            //Build Test
            const obj = new Engineer("name", 0, "email@lekas.com", testGithub);
            //Asses
            expect(obj.github).toEqual(testGithub);
        });
    });

    describe("Behaviour", ()=> {
       it("Should return the assigned name property with getName", ()=>{
            //Set test
            const testName = "Name";
            //Build Test
            const obj = new Engineer(testName, 0, "email@lekas.com", "username");
            //Asses
            expect(obj.getName()).toEqual(testName);
        });
        it("Should return the assigned id property with getId", ()=>{
            //Set test
            const testId = 3;
            //Build Test
            const obj = new Engineer("name", testId, "email@lekas.com", "username");
            //Asses
            expect(obj.getId()).toEqual(testId);
        });
        it("Should return the assigned email property with getEmail", ()=>{
            //Set test
            const testEmail = "email@lekas.com";
            //Build Test
            const obj = new Engineer("name", 0, testEmail, "username");
            //Asses
            expect(obj.getEmail()).toEqual(testEmail);
        });
        it("Should return the assigned github username property with getGithub ", ()=>{
            //Set test
            const testGithub = "username";
            //Build Test
            const obj = new Engineer("name", 0, "email@lekas.com", testGithub);
            //Asses
            expect(obj.getGithub()).toEqual(testGithub);
        });
        it("Should return 'Engineer' with getRole", ()=>{
            const obj = new Engineer("name", 0, "email@lekas.com", "username");
            //Asses
            expect(obj.getRole()).toEqual("Engineer");
        });
    });
});
