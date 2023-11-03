{
  // spread operator
  // rest operator
  // destructuring
  // learn spread operator**********

  const bros1: string[] = ["Mir", "Firoz", "Mizan"];
  const bros2: string[] = ["Tanmoy", "Nahid", "Rahat"];

  bros1.push(...bros2);

  const mentors1 = {
    typescript: "Mezba",
    redux: "Mir",
    dbms: "Mizan",
  };

  const mentors2 = {
    prisma: "Firoz",
    next: "Tanmoy",
    cloud: "Nahid",
  };

  const mentorList = {
    ...mentors1,
    ...mentors2,
  };

  // learn rest operator**********
  const greetFriends = (...friends: string[]) => {
    // console.log(`Hi ${f1} ${f2} ${f2}`);

    friends.forEach((friend: string) => console.log(`Hi ${friend}`));
  };

  greetFriends("Abul", "Babul", "Cabul", "Dabul");
}
