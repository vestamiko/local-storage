import { countries as allCountries } from "./cntr.js";

console.log(allCountries);

if (!localStorage.getItem("countries")) {
  const countries = [
    { id: 1, name: "Lithuania", capital: "Vilnius" },
    { id: 2, name: "Latvia", capital: "Riga" },
    { id: 3, name: "Estonia", capital: "Talinn" },

  ];

  localStorage.setItem("countries", JSON.stringify(countries));
  console.log("------------");
} else {
  console.log("------------");
}

const data = JSON.parse(localStorage.getItem("name"));
if (data && Array.isArray(data)) {
  data.forEach((country) => {
    console.log(`${country.id} data:`);
    console.log(`Country name: ${country.name}`);
    console.log(`Capital: ${country.capital}`);
  });
} else {
  console.log("Data not found");
}
