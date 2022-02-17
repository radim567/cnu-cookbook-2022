import { Container, Button, Row, Col } from 'reactstrap';
import { Card, CardImg } from 'reactstrap';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { api } from '../api';
import clockIcon from '../images/clock-icon-40x40.png';
import { Link } from 'react-router-dom';

const pictureSource = '/meal-pics/';

export function RecipeDetailPage() {
  const { slug } = useParams();
  const [recipe, setRecipe] = useState({});
  useEffect(() => {
    api.get(`/recipes/${slug}`).then((response) => setRecipe(response.data));
  }, [slug]);

  function DeleteRecipe() {
    api.delete(`/recipes/${slug}`).then(() => {
      alert('Recipe deleted!');
      setRecipe(null);
    });
  }
  // Structure direction string, remove order numbers
  let { directions } = recipe;
  const orderNr = /^[ ]\d[. ]/g;
  const steps = directions?.split(orderNr);

  return (
    <Container>
      <Row>
        <Col>
          <h1>{recipe.title}</h1>
        </Col>
        <Col className="col-3">
          <Link to={`/recipe/new`}>
            <Button className="me-2  mb-1">
              <>New</>
            </Button>
          </Link>
          <Link to={`/recipe/${slug}/edit`}>
            <Button
              style={{ backgroundColor: '#01aa5d' }}
              className="me-2 mb-1"
            >
              <>Edit</>
            </Button>
          </Link>
          <Button
            style={{ backgroundColor: '#d4161d' }}
            className="mb-1"
            onClick={DeleteRecipe}
          >
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
