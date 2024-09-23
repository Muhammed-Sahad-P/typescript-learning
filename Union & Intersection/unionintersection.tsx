//!Union
 //* Union is used to represent a value that can be one of two or more types

 let id: string | number | boolean;
 id = "sachin";
 id = 123;
 id = true;


 //!Intersection
 //* Intersection is used to combine multiple types into a single type
 type Person = {
    name: string;
    age: number;
  };
  
  type Employee = {
    employeeId: number;
    position: string;
  };
  
  // Intersection type
  type StaffMember = Person & Employee;
  
  const staffMember: StaffMember = {
    name: "John Doe",
    age: 30,
    employeeId: 1234,
    position: "Software Engineer"
  };
  
  console.log(staffMember);
  