{
  //
  //union types************

  //   type FrontendDeveloper = "fakibazDeveloper" | "juniorDeveloper";
  //   type FullStackDeveloper = "frontend developer" | "expert developer";
  //   type Developer = FrontendDeveloper | FullStackDeveloper;

  //   const newDeveloper: FrontendDeveloper = "fakibazDeveloper";

  //   type User = {
  //     name: string;
  //     email?: string;
  //     gender: "male" | "female";
  //     bloodGroup: "O+" | "A+" | "B+";
  //   };

  //   const user1: User = {
  //     name: "Moon",
  //     gender: "male",
  //     bloodGroup: "O+",
  //   };

  //   intersection types
  type FrontendDeveloper = {
    skills: string[];
    designation1: "Frontend Developer";
  };
  type BackendDeveloper = {
    skills: string[];
    designation2: "Backend Developer";
  };

  type FullStackDeveloper = FrontendDeveloper & BackendDeveloper;

  const fullStackDeveloper: FullStackDeveloper = {
    skills: ["html", "css", "js", "express"],
    designation1: "Frontend Developer",
    designation2: "Backend Developer",
  };

  //
}
