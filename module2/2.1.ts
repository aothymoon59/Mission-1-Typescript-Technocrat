{
  //
  //type assertion
  let anyThing: any;
  anyThing = "Next Level Web Development";
  anyThing = 222;
  (anyThing as number).toFixed(2);

  const kgToGm = (value: string | number): string | number | undefined => {
    if (typeof value === "string") {
      const convertedValue = parseFloat(value) * 1000;
      return `The converted value is ${convertedValue}`;
    }
    if (typeof value === "number") {
      return value * 1000;
    }
  };

  const result1 = kgToGm(1) as number;
  const result2 = kgToGm("1") as string;
  console.log(result1);

  type CustomError = {
    message: string;
  };

  try {
  } catch (error) {
    console.log((error as CustomError).message);
  }

  //
}
