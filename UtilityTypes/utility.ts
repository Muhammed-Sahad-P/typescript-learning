//!Utility Types
//* Utility types are types that are used to create new types from existing types

type Users = {
  name: string;
  age: number;
  address: string;
};

//readonly utility type
const userDetail : Readonly<Users> = {
  name: "sahad",
  age: 25,
  address: "delhi",
};

//partial utility type
const useDetail : Partial<Users> = {
    name: "sahad",
    age: 25,
    address: "delhi",
  };

  //Required utility type
  const useDetail2 : Required<Users> = {
    name: "sahad",
    age: 25,
    address: "delhi",
  };

  //Pick utility type
  type User = Pick<Users, "name" | "age">;

  //Omit utility type
  type User2 = Omit<Users, "address">;

  //Exclude utility type
  type User3 = Exclude<Users, "address">;

  //Extract utility type
  type User4 = Extract<Users, "address">;

  //NonNullable utility type
  type User5 = NonNullable<Users["address"]>;

  //ReturnType utility type
  type User6 = ReturnType<() => Users>;

  //InstanceType utility type
  type User7 = InstanceType<typeof Users>;

  //Infer utility type
  type User8 = Infer<typeof Users>;

  //record utility type
  type User9 = Record<"name" | "age", string>;

  //Parameters utility type
  type User10 = Parameters<() => Users>;

  //ConstructorParameters utility type
  type User11 = ConstructorParameters<typeof Users>;

  