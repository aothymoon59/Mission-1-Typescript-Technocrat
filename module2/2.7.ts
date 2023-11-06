{
  // generic constraints with keyof operator
  type Vehicle = {
    bike: "string";
    car: "string";
    ship: "string";
  };

  type Owner = "bike" | "car" | "ship";

  type Owner2 = keyof Vehicle;

  const getPropertyValue = <X, Y extends keyof X>(obj: X, key: Y) => {
    return obj[key];
  };

  const user = {
    name: "Mr. Moon",
    age: 21,
    address: "dhk",
  };
  const car = {
    model: "Toyota 100",
    year: 2000,
  };

  const result1 = getPropertyValue(user, "address");
  const result2 = getPropertyValue(car, "model");
  //
}
