import { result } from "./data.js";
/// import result from "./data.js";
console.log("filmai is data.js", result);
const movies = result;

// let dog = "Pluto";

// localStorage.setItem("dog", dog);

// let dataFromLS = localStorage.getItem("dog");
// console.log(dataFromLS);

// const cats = {
//   cat1: "Meile",
//   cat2: "Katinas",
//   cat3: "Meta",
//   cat4: "Guste",
//   cat5: "Zaibas",
//   catBoss: "Garfieldas",
// };

// localStorage.setItem("cats", JSON.stringify(cats));
// let catsDataFromLS1 = localStorage.getItem("cats");
// console.log(catsDataFromLS1);

// let catsDataFromLS2 = JSON.parse(localStorage.getItem("cats"));
// console.log(catsDataFromLS2);

// console.log(catsDataFromLS2.catBoss);

// catsDataFromLS2.cat6 = "Dobis";
// console.log(catsDataFromLS2);

// localStorage.setItem("cats", JSON.stringify(catsDataFromLS2));

// localStorage.removeItem("dog");
// // localStorage.clear();

// console.log(localStorage.getItem("dog"));

////////////////////////////////
const chekingLS = () => {
  let dataFromLS = localStorage.getItem("favorites");

  return dataFromLS === null ? [] : JSON.parse(dataFromLS); // jei nera favorites sukurio tuscia masyva
};

const checkedData = chekingLS();
console.log(checkedData);

checkedData.push({ title: "Tarp zvaigzdziu", director: "Nolan" });
console.log(checkedData);

localStorage.setItem("movies", JSON.stringify(checkedData)); //masyva checkedData paverciam tekstu ir issaugo po key "movies"

const getMovieById = (id) => movies.find((movie) => movie.id === id) || null; // id-tai argumentas. ieskom filmo is masyvo movies pagal jo id, jei neranda grazina null
console.log(getMovieById(829280));


////// 5.
const addToFavorites = (id) => {
  const favorites = chekingLS();
  const movie = getMovieById(id);
  movie &&    //// && vykdoma jei tik filmas rastas
    localStorage.setItem(
      "favorites",
      JSON.stringify(favorites.some(fav => fav.id === movie.id) /// tikrinam ar favorites yra filmas kurio id kaip sio filmo
        ? favorites /// ? jei taip, tai... , o jei ne :
        : [...favorites, { id: movie.id, title: movie.title }])  ///jei toks ID yra paliekam sena masyva, jei ner, pridedam nauja filma
    );
};

addToFavorites(436270);
addToFavorites(829280);
addToFavorites(760161);
addToFavorites(985939);
// addToFavorites(616037);
// addToFavorites(507086);
// addToFavorites(642885);

console.log(JSON.parse(localStorage.getItem("favorites")));  //

/////////// 6.
const showFavorites = () => {
  const favorites = JSON.parse(localStorage.getItem("favorites")) || [] ; ///paverciam teksta i masyva, jeigu nera nieko, naudojam tuscia masyva
  favorites.forEach(fav => console.log(`id: ${fav.id}, title: ${fav.title}`));  ///einam per kiekviena filma ir spauzdinam jo id ir titlus
};
showFavorites();

///// 7.
const removeFromFavorites = (id) => {
  const favorites = JSON.parse(localStorage.getItem("favorites") || []);
  const updated = favorites.filter(fav => String(fav.id) !== String(id));
  localStorage.setItem("favorites", JSON.stringify(updated));
  console.log(updated);
};

removeFromFavorites(829280);