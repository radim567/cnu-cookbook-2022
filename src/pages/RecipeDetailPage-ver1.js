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
  // console.log(recipe); // delete
  // recipe props:
  //  _id
  //  slug
  //  title
  //  preparationTime
  //  servingCount
  //  directions string
  //  ingredients []
  //  lastModifiedDate
  //  __v

  //destructure .direction as string
  let { directions } = recipe;
  console.log(directions);
  console.log(typeof directions);

  // Make line break before every step number " xx. "
  // Somebody has to take care of that beer Nr. 5, though...
  let structureText = (string) => {
    return string.replace(/([^ ]\d+\.[ ]$)/g, '</br> $1'); // replace with </br> or \n or \r
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
          <p>{directions}</p>
          <h4>Directions structured:</h4>
          <p>{structureText(directions)}</p>
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
