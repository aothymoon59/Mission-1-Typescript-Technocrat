{
  // generic type
  type GenericArray<T> = Array<T>;

  //   const rollNumbers: number[] = [3, 6, 8];
  const rollNumbers: GenericArray<number> = [3, 6, 8];

  //   const mentors: string[] = ["Mr. X", "Mr. Y", "Mr. Z"];
  const mentors: GenericArray<string> = ["Mr. X", "Mr. Y", "Mr. Z"];

  //   const boolArray: boolean[] = [true, false, true];
  const boolArray: GenericArray<boolean> = [true, false, true];

  const user: GenericArray<{ name: string; age: number }> = [
    {
      name: "Moon",
      age: 100,
    },
    {
      name: "Jhankar",
      age: 110,
    },
  ];

  const add = (x: number, y: number) => x + y;

  add(30, 20);
  // generic tuple
  type GenericTuple<X, Y> = [X, Y];

  const manush: GenericTuple<string, string> = ["Mr. X", "Mr. Y"];

  const UserWithId: GenericTuple<number, { name: string; email: string }> = [
    1234,
    { name: "Moon", email: "a@gmail.com" },
  ];
}
