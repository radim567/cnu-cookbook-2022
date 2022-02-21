import { Container, Button, Row, Col } from 'reactstrap';
import { useState, useEffect } from 'react';

import { RecipesList } from '../components/RecipesList';
import { SearchInput } from '../components/SearchInput';
import { api } from '../api';
import { Link } from 'react-router-dom';

export function RecipeListPage() {
  const [filter, setFilter] = useState('');
  const [recipes, setRecipes] = useState([]);
  const [error, setError] = useState(null);

  const filterredRecipes = recipes.filter((recipe) => {
    return recipe.title.toLowerCase().includes(filter.toLowerCase());
    // return recipe.title.includes(filter); - nenajde s malym
  });

  console.log(recipes);

  useEffect(() => {
    api
      .get(`/recipes`)
      .then((response) => {
        setRecipes(response.data);
      })
      .catch((error) => {
        setError(error);
      });
  }, []);

  if (error) return `Error: ${error.message}`;

  return (
    <Container>
      <Row>
        <Col>
          <h2>Recepty</h2>
        </Col>
        <Col className="col-1">
          <Link to={`/recipe/new`}>
            <Button
              style={{ backgroundColor: '#039ed8' }}
              className="ms-4 me-2"
            >
              New
            </Button>
          </Link>
        </Col>
      </Row>
      <SearchInput
        value={filter}
        setValue={setFilter}
        placeholder="Tak copak to bude dneska?"
        className="mb-4"
      />
      <RecipesList recipes={filterredRecipes} />
    </Container>
  );
}
