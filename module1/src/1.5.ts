// Reference Type --> object
const user: {
  company: "Programming Hero"; //type --> literal types(fixed value)
  firstName: string;
  middleName?: string; //optional type
  lastName: string;
  isMarried: boolean;
  readonly country: string; // readonly
} = {
  company: "Programming Hero",
  firstName: "Jhankar",
  lastName: "Mahbub",
  isMarried: true,
  country: "Bangladesh",
};
