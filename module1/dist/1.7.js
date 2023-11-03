"use strict";
{
    // spread operator
    // rest operator
    // destructuring
    // learn spread operator**********
    const bros1 = ["Mir", "Firoz", "Mizan"];
    const bros2 = ["Tanmoy", "Nahid", "Rahat"];
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
    const mentorList = Object.assign(Object.assign({}, mentors1), mentors2);
    // learn rest operator**********
    const greetFriends = (...friends) => {
        // console.log(`Hi ${f1} ${f2} ${f2}`);
        friends.forEach((friend) => console.log(`Hi ${friend}`));
    };
    greetFriends("Abul", "Babul", "Cabul", "Dabul");
}
