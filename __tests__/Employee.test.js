const Employee = require("../lib/Employee");
describe("Employee", () => {
    describe("Initialization", ()=>{
        it("Should return name property", ()=>{
            //Set test
            const testName = "Name";
            //Build Test
            const obj = new Employee(testName, 0, "email@lekas.com");
            //Asses
            expect(obj.name).toEqual(testName);
        });
        it("Should return id property", ()=>{
            //Set test
            const testId = 3;
            //Build Test
            const obj = new Employee("name", testId, "email@lekas.com");
            //Asses
            expect(obj.id).toEqual(testId);
        });
        it("Should return email property", ()=>{
            //Set test
            const testEmail = "email@lekas.com";
            //Build Test
            const obj = new Employee("name", 0, testEmail);
            //Asses
            expect(obj.email).toEqual(testEmail);
        });
    });
    describe("Behaviour", ()=> {
       it("Should return name with getName", ()=>{
            //Set test
            const testName = "Name";
            //Build Test
            const obj = new Employee(testName, 0, "email@lekas.com");
            //Asses
            expect(obj.getName()).toEqual(testName);
        });
        it("Should return id with getId", ()=>{
            //Set test
            const testId = 1;
            //Build Test
            const obj = new Employee("name", testId, "email@lekas.com");
            //Asses
            expect(obj.getId()).toEqual(testId);
        });
        it("Should return email with getEmail", ()=>{
            //Set test
            const testEmail = "email@lekas.com";
            //Build Test
            const obj = new Employee("name", 0, testEmail);
            //Asses
            expect(obj.getEmail()).toEqual(testEmail);
        });
        it("Should return 'Employee' with getRole", ()=>{
            //Build Test
            const obj = new Employee("name", 0, "email");
            //Asses
            expect(obj.getRole()).toEqual("Employee");
        });
    });
});
