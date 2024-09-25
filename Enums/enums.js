//! Enums(enumeration)
//* Enums are used to define a set of named constants

//*Types of Enums
// 1. Numeric Enums
// 2. String Enums
// 3. Heterogeneous Enums (mix of string and numeric values).


//? 1. Numeric Enums
//* the first member is assigned the value 0, and each subsequent member is incremented by 1.
var Direction;
(function (Direction) {
  Direction[(Direction["Up"] = 0)] = "Up";
  Direction[(Direction["Down"] = 1)] = "Down";
  Direction[(Direction["Left"] = 2)] = "Left";
  Direction[(Direction["Right"] = 3)] = "Right";
})(Direction || (Direction = {}));
var move = Direction.Up;
console.log(move); // Output: 0
console.log(Direction.Down); // Output: 1


//? 2. String Enums
//* String enums allow each member to be explicitly assigned a string value. This can be useful when you want enum values to be more descriptive.

var Status;
(function (Status) {
  Status["Success"] = "SUCCESS";
  Status["Failure"] = "FAILURE";
  Status["Pending"] = "PENDING";
})(Status || (Status = {}));
var statusb = Status.Success;
var statusc = Status.Failure;
var statusd = Status.Pending;
console.log(statusb); // Output: "SUCCESS"
console.log(statusc); // Output: "FAILURE"
//Each member of the enum is explicitly assigned a string value.
// You can access these values using Status.Success, Status.Failure, etc.

//? 3. Heterogeneous Enums
//*Heterogeneous enums mix numeric and string values, but they are not commonly used. However, TypeScript allows this when needed.

var MixedEnum;
(function (MixedEnum) {
  MixedEnum[(MixedEnum["No"] = 0)] = "No";
  MixedEnum["Yes"] = "Yes";
})(MixedEnum || (MixedEnum = {}));
console.log(MixedEnum.No); // Output: 0
console.log(MixedEnum.Yes); // Output: "Yes"
