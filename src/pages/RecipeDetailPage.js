import { Container, Button, Row, Col } from 'reactstrap';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { api } from '../api';

export function RecipeDetailPage() {
  const { slug } = useParams();
  const [recipe, setRecipe] = useState({});

  useEffect(() => {
    api.get(`/recipes/${slug}`).then((response) => setRecipe(response.data));
  }, [slug]);

  // Split .directions after every step order number " xx. "
  let structureText = () => {
    let { directions } = recipe;
    let steps = directions.split(/^[ ]\d+[. ]/g);
    // insert the order numbers at the beginning of the string
    for (let i = 0; i < steps.length; i++) {
      let order = i + 1;
      steps[i] = order + '. ' + steps[i];
    }
    return steps.join('\r\n');
  };

  return (
    <Container>
      <h1>{recipe.title}</h1>
      <Row>
        <Col>
          <h5>Ready in: {recipe.preparationTime} min)</h5>
          <h5>Servings: {recipe.servingCount}</h5>
          <h5>Ingredients: {recipe.ingredients}</h5>
        </Col>
        <Col>
          <h4>Directions:</h4>
          <p>{structureText(recipe.directions)}</p>
          <Button color="info">
            <>Edit</>
          </Button>
          <Button color="warning">
            <>Delete</>
          </Button>
        </Col>
      </Row>
    </Container>
  );
}

//           <h4>Directions structured:</h4>
//          <p>{structureText(directions)}</p>
