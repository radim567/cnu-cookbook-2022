import { Container } from 'reactstrap';
import { useState, useEffect } from 'react';

import { RecipesList } from '../components/RecipesList';
import { SearchInput } from '../components/SearchInput';

import { api } from '../api';

export function RecipeListPage() {
  const [filter, setFilter] = useState('');
  const [recipes, setRecipes] = useState([]);

  const filterredRecipes = recipes.filter((recipe) => {
    // return recipe.title.includes(filter); - nenajde s malym
    return recipe.title.toLowerCase().includes(filter.toLowerCase());
  });

  useEffect(() => {
    api.get('/recipes').then((response) => setRecipes(response.data)); // externi server, je to tady promise
  }, []);
  // az se data stahnou, mastavi se do setRecipes
  // useEffect by reagoval na jakykoliv zmenu, proto druhy argument useEffectu = [], pole, do kterych zavislosti
  //kdyz se necha prazdne [] provede se jen na nzacatku

  return (
    <Container>
      <h1>Recepty</h1>
      <SearchInput
        value={filter}
        setValue={setFilter}
        placeholder="Tak copak to bude dneska?"
        className="mb-4" // posle se dolu jako rest, nemusi se resit bottom margin
      />
      <RecipesList recipes={filterredRecipes} />
    </Container>
  );
}
