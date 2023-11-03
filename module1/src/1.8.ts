{
  // object destructuring

  const user = {
    id: 345,
    name: {
      firstName: "Jhankar",
      lastName: "Mahbub",
    },
    contact: "01700000000",
    address: "Uganda",
  };

  const {
    contact,
    name: { lastName },
  } = user;

  //array destructuring

  const myFriends = ["Abul", "Babul", "Cabul", "Dabul", "Ebul", "Kabul"];

  const [, , bestFriend, ...rest] = myFriends;
}
