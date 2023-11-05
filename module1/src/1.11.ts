{
  //
  //ternary operator || optional chaining || nullish coalescing operator

  // const age: number = 19;
  // if (age >= 18) {
  //   console.log("adult");
  // } else {
  //   console.log("not adult");
  // }

  // const isAdult = age >= 18 ? "adult" : "not adult";
  // console.log(isAdult);

  // nullish coalescing operator*********************
  //null / undefined --> decision making
  const isAuthenticated = "";
  const result1 = isAuthenticated ?? "Guest";
  const result2 = isAuthenticated ? isAuthenticated : "Guest";
  console.log({ result1 }, { result2 });

  type User = {
    name: String;
    address: {
      city: string;
      road: string;
      presentAddress: string;
      permanentAddress?: string;
    };
  };

  const user1: User = {
    name: "Moon",
    address: {
      city: "Dhaka",
      road: "Awesome Address",
      presentAddress: "Dhaka Town",
    },
  };

  // using optional chaining and nullish operator
  const permanentAddress =
    user1?.address?.permanentAddress ?? "No Address Found";

  console.log({ permanentAddress });
  //
}
