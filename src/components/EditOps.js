import { api } from '../api';

let recipes = {};
let setRecipes = {};

// NEW recipe
function CreateRecipe() {
  api.post(`/recipes`, { recipes }).then((response) => {
    setRecipes(response.data);
  });
}

// UPDATE recipe
function UpdateRecipe() {
  api.put(`/recipes`, { recipes }).then((response) => {
    setRecipes(response.data);
  });
}

// DELETE recipe
function DeleteRecipe() {
  api.delete(`/recipes`).then(() => {
    alert('Recipe deleted!');
    setRecipes(null);
  });
}

export { CreateRecipe, UpdateRecipe, DeleteRecipe };
