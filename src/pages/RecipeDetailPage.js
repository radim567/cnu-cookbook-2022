import { Container, Button, Row, Col } from 'reactstrap';
import { Card, CardImg } from 'reactstrap';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { RecipeEdit } from './RecipeEditPage';
import { api } from '../api';
import { DeleteRecipe } from '../components/EditOps';

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
  //  console.log(directions); // still ok, directions has a string inside...
  const orderNr = /^[ ]\d[. ]/g;
  const steps = directions?.split(orderNr);
  // console.log(steps);
  return (
    <Container>
      <Row>
        <Col>
          <h1>{recipe.title}</h1>
        </Col>
        <Col className="col-2">
          <Button className="ms-4 me-2" onClick={() => RecipeEdit()}>
            <>Edit</>
          </Button>
          <Button style={{ backgroundColor: '#d4161d' }} onClick={DeleteRecipe}>
            <>Delete</>
          </Button>
        </Col>
      </Row>
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
          <h4 className="ms-4">Directions:</h4>
          <hr />
          <ol>
            {steps?.map((item) => (
              <li key="{item}">{item}</li>
            ))}
          </ol>
        </Col>
      </Row>
    </Container>
  );
}
