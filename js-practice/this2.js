function introduce(city, country) {
  console.log(`${this.name} is a ${this.role} from ${city}, ${country}`);
}

const employee = {
  name: "Adil",
  role: "Full Stack Developer"
};

const newFunction = introduce.bind(employee, "Kochi")

newFunction("India")