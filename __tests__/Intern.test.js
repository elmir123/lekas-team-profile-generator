const Intern = require("../lib/Intern");
describe("Intern", () => {
    describe("Initialization", ()=>{
        it("Should return the assigned name property with name property", ()=>{
            //Set test
            const testName = "Name";
            //Build Test
            const obj = new Intern(testName, 0, "email@lekas.com","school");
            //Asses
            expect(obj.name).toEqual(testName);
        });
        it("Should return the assigned id property with id property", ()=>{
            //Set test
            const testId = 3;
            //Build Test
            const obj = new Intern("name", testId, "email@lekas.com","school");
            //Asses
            expect(obj.id).toEqual(testId);
        });
        it("Should return the assigned email property with email property", ()=>{
            //Set test
            const testEmail = "email@lekas.com";
            //Build Test
            const obj = new Intern("name", 0, testEmail,"school");
            //Asses
            expect(obj.email).toEqual(testEmail);
        });
        it("Should return the assigned github username property with github property", ()=>{
            //Set test
            const testSchool = "username";
            //Build Test
            const obj = new Intern("name", 0, "email@lekas.com", testSchool);
            //Asses
            expect(obj.school).toEqual(testSchool);
        });
    });

    describe("Behaviour", ()=> {
       it("Should return the assigned name property with getName", ()=>{
            //Set test
            const testName = "Name";
            //Build Test
            const obj = new Intern(testName, 0, "email@lekas.com","school");
            //Asses
            expect(obj.getName()).toEqual(testName);
        });
        it("Should return the assigned id property with getId", ()=>{
            //Set test
            const testId = 1;
            //Build Test
            const obj = new Intern("name", testId, "email@lekas.com","school");
            //Asses
            expect(obj.getId()).toEqual(testId);
        });
        it("Should return the assigned email property with getEmail", ()=>{
            //Set test
            const testEmail = "email@lekas.com";
            //Build Test
            const obj = new Intern("name", 0, testEmail,"school");
            //Asses
            expect(obj.getEmail()).toEqual(testEmail);
        });
        it("Should return the assigned school name property with getSchool ", ()=>{
            //Set test
            const testSchool = "Carleton University";
            //Build Test
            const obj = new Intern("name", 0, "email@lekas.com", testSchool);
            //Asses
            expect(obj.getSchool()).toEqual(testSchool);
        });
        it("Should return 'Intern' with getRole", ()=>{
            const obj = new Intern("name", 0, "email","school");
            //Asses
            expect(obj.getRole()).toEqual("Intern");
        });
    });
});
