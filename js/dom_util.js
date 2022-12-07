const titleInput = document.getElementById("title_input");
const descriptionInput = document.getElementById("description_input");
const itemsContainer = document.getElementById("items_container");
const h2 = document.getElementById("h2");

const itemTemplate = ({title, description}) => `            
<div class="card" style="width: 18rem;">
<img src="https://a-z-animals.com/media/2022/01/shutterstock_661154734.jpg" class="card-img-top" alt="chameleon">
<div class="card-body">
  <h5 class="card-title">${title}</h5>
  <p class="card-text">${description}</p>
  <a href="" class="btn btn-primary">Edit</a>
  <a href="" class="btn btn-primary">Delete</a>
</div>
</div>`;

const itemTemplate1 = ({description})=>`<h2 class="price">${description}</h2>`;

export const clearInputs = () => {
    titleInput.value = "";
    descriptionInput.value ="";
};

export const getInputValues = () => {
    return {
        title:titleInput.value,
        description:descriptionInput.value,
    };
};

export const getDesc = () => {
    return {description:descriptionInput.value};
};

export const addItemToPage = ({title, description }) => {
    itemsContainer.insertAdjacentHTML(
        "afterbegin",
        itemTemplate({title,description})
    );
};

/**export const renderItemsList = (items) => {
    itemsContainer.innerHTML = "";

    for (const item of items) {
        addItemToPage(item);
    }
}; */

export let renderItemsList = () => {
    itemsContainer.innerHTML = ''

    fetch('http://localhost:3000/posts')
        .then(response => response.json())
        .then(items => {
            for (let item of items) {
                addItemToPage(item)
            }
        })

    // for (let item of items) {
    //     addItemToPage(item)
    // }
}

export const showP = (description) => {
    h2.insertAdjacentHTML(
        "afterbegin",
        itemTemplate1({description})
    );
};



export const addPriceToPage = ({description}) => {
    h2.insertAdjacentHTML(
        "afterbegin",
         itemTemplate1({description})
    );
    
};