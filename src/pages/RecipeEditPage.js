import { Container, FormGroup, InputGroup, InputGroupText } from 'reactstrap';
import { Label, Input, Button, Row, Col } from 'reactstrap';
import { api } from '../api';
import { RecipeDetailPage } from 'RecipeDetailPage';
import { useState } from 'react';

export function RecipeEdit(recipe) {
  const [recipe, setRecipe] = useState({ recipe });

  const handleOnChange = (event) => {
    const { name, value } = event.target;
    setRecipe({ ...recipe, [name]: value });
  };

  function updateRecipe() {
    api.put(`/recipes/${recipe.slug}`, { recipe }).then((response) => {
      setRecipe(response.data);
    });
  }
  return (
    <Container>
      <form>
        <Row>
          <Col>
            <h1>{recipe.title}</h1>
          </Col>
          <Col className="col-2">
            <Button
              style={{ backgroundColor: '#01aa5d' }}
              className="ms-4 me-2"
              onClick={updateRecipe}
            >
              Save
            </Button>
            <Button onClick={RecipeDetailPage}>Cancel</Button>
          </Col>
        </Row>
        <Row>
          <Input
            id="titel"
            name="titel"
            placeholder={recipe.title}
            onChange={handleOnChange}
          />
        </Row>
        <Row>
          <Col className="col-2">
            <h2>Základní údaje</h2>
            <FormGroup>
              <h3>Doba přípravy</h3>
              <Label for="preparationTime">Doba přípravy</Label>
              <InputGroup>
                <Input
                  id="preparationTime"
                  name="time"
                  placeholder={recipe.preparationTime}
                  onChange={handleOnChange}
                />
                <InputGroupText>min.</InputGroupText>
              </InputGroup>
            </FormGroup>
            <FormGroup>
              <Label for="servings">Počet porcí</Label>
              <Input
                id="servings"
                name="servings"
                placeholder={recipe.servings}
                onChange={handleOnChange}
              />
            </FormGroup>
            <FormGroup>
              <Label for="sideDish">Příloha</Label>
              <Input
                id="sideDish"
                name="sidedish"
                placeholder={recipe.sidedish}
                onChange={handleOnChange}
              />
            </FormGroup>
          </Col>
          <Col className="col-4">
            <h2>Ingredience</h2>
            <p>...under construction...</p>
          </Col>
          <Col className="col-6">
            <h2>Postup</h2>
            <FormGroup>
              <Input
                id="directions"
                name="directions"
                type="textarea"
                placeholder={recipe.directions}
                onChange={handleOnChange}
              />
            </FormGroup>
          </Col>
        </Row>
        <Row></Row>
      </form>
    </Container>
  );
}
