const users = [
    { name: "Adil", skills: ["React", "Node.js"] },
    { name: "Rahul", skills: ["Angular", "Java"] },
    { name: "Arun", skills: ["React", "MongoDB"] }
];


const skills = users
    .flatMap((user) => user.skills)

console.log(skills)