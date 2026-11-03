const employee1 = {
  name: "Adil",
  role: "Frontend Developer"
};

const employee2 = {
  name: "Rahman",
  role: "Backend Developer"
};

function introduce(){
  console.log(`Name: ${this.name}`)
  console.log(`Role: ${this.role}`)
}

introduce.call(employee1)
introduce.call(employee2)