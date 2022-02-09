import { Container } from 'reactstrap';

import { RecipeCard } from '../components/RecipeCard';

export function RecipeListPage() {
  return (
    <Container>
      <h1>Recepty</h1>
      <RecipeCard />
    </Container>
  );
}
