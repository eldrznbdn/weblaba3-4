import { getAllAnimals,} from "./api.js";
import {
    renderItemsList,
    addItemToPage,
    clearInputs,
    getInputValues,
    showP,

} from "./dom_util.js";

const submitButton = document.getElementById("submit_button");
const findButton = document.getElementById("find_button");
const cancelFindButton = document.getElementById("cancel_find_button");
const findInput = document.getElementById("find_input");

const findButtonSort = document.getElementById("find_button_sort");
const cancelFindButtonSort = document.getElementById("cancel_find_button_sort");

const findPrice = document.getElementById("find_price");

let animals = [];
let price = [];



const addItem = ({ title, description }) => {
    // const generateId = uuid.v1();

    const newItem = {
        // id: generateId,
        title,
        description,
    };

    const desc = description;


    price.push(desc);
    //додавання
    animals.push(newItem);
    addItemToPage(newItem);
};

findPrice.addEventListener("click", () => {
   
    let result = price.map(i => Number(i));
  
    const sum = result.reduce((acc, val) => {
        return acc + val;
    }, 0);
    showP(sum);
});

submitButton.addEventListener("click", (event) => {
    event.preventDefault();

    const { title, description } = getInputValues();

    clearInputs();

    addItem({
        title,
        description,
    });

});

findButton.addEventListener("click", () => {
    const foundAnimals = animals.filter((animal) => animal.description.search(findInput.value) !== -1);

    renderItemsList(foundAnimals);
});

cancelFindButton.addEventListener("click", () => {
    renderItemsList(animals);

    findInput.value = "";
});

findButtonSort.addEventListener("click", () => {
    const sortAnimals = [...animals].sort((a, b) => a.title > b.title ? -1 : 1);
    renderItemsList(sortAnimals);
});

cancelFindButtonSort.addEventListener("click", () => {
    renderItemsList(animals);
});

/*findPrice.addEventListener("click", () => {
    const price = animals.description.reduce(myFunc);
    function myFunc(total, num) {
        return total + num;
      }
    showPrice(price);
});*/


renderItemsList(animals);
getAllAnimals().then(console.log);