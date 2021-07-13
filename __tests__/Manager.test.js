const Manager = require("../lib/Manager");
describe("Manager", () => {
    describe("Initialization", ()=>{
        it("Should return the assigned name property with name property", ()=>{
            //Set test
            const testName = "Name";
            //Build Test
            const obj = new Manager(testName, 0, "email@lekas.com", 0);
            //Asses
            expect(obj.name).toEqual(testName);
        });
        it("Should return the assigned id property with id property", ()=>{
            //Set test
            const testId = 1;
            //Build Test
            const obj = new Manager("name", testId, "email@lekas.com", 0);
            //Asses
            expect(obj.id).toEqual(testId);
        });
        it("Should return the assigned email property with email property", ()=>{
            //Set test
            const testEmail = "email@lekas.com";
            //Build Test
            const obj = new Manager("name", 0, testEmail, 0);
            //Asses
            expect(obj.email).toEqual(testEmail);
        });
        it("Should return the assigned office number property with officeNumber property", ()=>{
            //Set test
            const testOfficeNumber = 5;
            //Build Test
            const obj = new Manager("name", 0, "email@lekas.com", testOfficeNumber);
            //Asses
            expect(obj.officeNumber).toEqual(testOfficeNumber);
        });
    });

    describe("Behaviour", ()=> {
       it("Should return the assigned name property with getName", ()=>{
            //Set test
            const testName = "Name";
            //Build Test
            const obj = new Manager(testName, 0, "email@lekas.com", 0);
            //Asses
            expect(obj.getName()).toEqual(testName);
        });
        it("Should return the assigned id property with getId", ()=>{
            //Set test
            const testId = 3;
            //Build Test
            const obj = new Manager("name", testId, "email@lekas.com", 0);
            //Asses
            expect(obj.getId()).toEqual(testId);
        });
        it("Should return the assigned email property with getEmail", ()=>{
            //Set test
            const testEmail = "email@lekas.com";
            //Build Test
            const obj = new Manager("name", 0, testEmail, 0);
            //Asses
            expect(obj.getEmail()).toEqual(testEmail);
        });
        it("Should return 'Manager' with getRole", ()=>{
            const obj = new Manager("name", 0, "email", 0);
            //Asses
            expect(obj.getRole()).toEqual("Manager");
        });
    });
});
