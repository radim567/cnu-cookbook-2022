import { Container } from 'reactstrap';
import { useEffect, useState } from 'react';
import React, { useParams } from 'react-router-dom';

import { api } from '../api';

export function RecipeDetailPage() {
  const { slug } = useParams();
  const [recipe, setRecipe] = useState('');

  useEffect(() => {
    api.get(`/recipes/${slug}`).then((response) => setRecipe(response.data)); // .data musi byt vzdy data
    console.log(recipe);
  }, [slug]);

  // <Route path="/recipe/:slug" element={<RecipeDetailPage />} />
  return (
    <Container>
      <h1>{recipe.title}</h1>
      <p>Délka přípravy: {recipe.preparationTime} min</p>
    </Container>
  );
}
