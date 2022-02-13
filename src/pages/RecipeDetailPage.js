import { Container, Button, Row, Col } from 'reactstrap';
import { Card, CardImg } from 'reactstrap';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { api } from '../api';

import clockIcon from '../images/clock-icon-40x40.png';
const pictureSource = '/meal-pics/';

export function RecipeDetailPage() {
  const { slug } = useParams();
  const [recipe, setRecipe] = useState({});
  useEffect(() => {
    api.get(`/recipes/${slug}`).then((response) => setRecipe(response.data));
  }, [slug]);

  // Structure direction string, remove order numbers
  let { directions } = recipe;
  console.log(directions); // still ok, directions has a string inside...
  const orderNr = /^[ ]\d+[. ]/g;
  const steps = directions.split(orderNr); //throws error: Uncaught TypeError: Cannot read properties of undefined (reading 'split')

  return (
    <Container>
      <h1>{recipe.title}</h1>
      <Row>
        <Col className="col-5">
          <Card className="mb-3">
            <CardImg
              src={pictureSource + slug + '.jpg'}
              color="primary"
              outline="true"
            />
          </Card>
          <h5>
            <img
              src={clockIcon}
              width="20px"
              height="20px"
              className="me-2"
              alt="clock icon"
            />
            {recipe.preparationTime} min
          </h5>
          <h5>Servings: {recipe.servingCount}</h5>
          <h5>Ingredients: {recipe.ingredients}</h5>
        </Col>
        <Col>
          <h4>Directions:</h4>
          <ol>
            {steps.map((item) => (
              <li>{item}</li>
            ))}
          </ol>
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
