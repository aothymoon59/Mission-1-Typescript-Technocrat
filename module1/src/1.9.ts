{
  //type Alias object

  type Student = {
    name: string;
    age: number;
    gender: string;
    contact?: string;
    address: string;
  };

  const student1: Student = {
    name: "Neloy",
    age: 35,
    gender: "Male",
    contact: "01700000000",
    address: "DHK",
  };

  const student2: Student = {
    name: "Sara",
    age: 80,
    gender: "Female",
    address: "DHK",
  };

  const student3: Student = {
    name: "Maahi",
    age: 65,
    gender: "Female",
    contact: "01722222222",
    address: "RNGP",
  };

  // string **************
  type UserName = string;
  type IsAdmin = boolean;

  const userName: UserName = "aothymoon";
  const isAdmin: IsAdmin = true;

  //function ***********
  type Add = (num1: number, num2: number) => number;
  const add: Add = (num1, num2) => num1 + num2;
  //
}
