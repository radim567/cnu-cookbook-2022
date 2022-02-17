import { Container, FormGroup, InputGroup, InputGroupText } from 'reactstrap';
import { Label, Input, Button, Row, Col } from 'reactstrap';
import { api } from '../api';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  IoTimerOutline,
  IoPeople,
  IoAddCircleOutline,
  IoScaleOutline,
  IoRestaurantOutline,
  IoBasketOutline,
  IoAlbumsOutline,
} from 'react-icons/io5';

let stylingIcon = {
  color: '039ed8',
  margin: '0rem 0.25rem',
  fontSize: '1.5rem',
};

export function RecipeEditPage(recipeprops) {
  const [recipe, setRecipe] = useState({ recipeprops });

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
        <Row className="mb-2">
          <Col>
            <h1>
              <IoRestaurantOutline style={stylingIcon} />
              {recipe.title}
            </h1>
          </Col>
          <Col className="col-3">
            <Button
              style={{ backgroundColor: '#039ed8' }}
              className="me-2 mb-1"
              onClick={updateRecipe}
            >
              Save
            </Button>
            <Link to="/">
              <Button className="mb-1">Cancel</Button>
            </Link>
          </Col>
        </Row>
        <Row className="mb-3">
          <Input
            id="titel"
            name="titel"
            placeholder={recipe.title}
            onChange={handleOnChange}
          />
        </Row>
        <Row style={{ fontSize: '1.3rem' }}>
          <Col className="col-3">
            <h2>Základní údaje</h2>
            <FormGroup>
              <Label for="preparationTime">
                <IoTimerOutline style={stylingIcon} />
                Doba přípravy
              </Label>
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
              <Label for="servings">
                <IoPeople style={stylingIcon} />
                Počet porcí
              </Label>
              <Input
                id="servings"
                name="servings"
                placeholder={recipe.servings}
                onChange={handleOnChange}
              />
            </FormGroup>
            <FormGroup>
              <Label for="sideDish">
                <IoAddCircleOutline style={stylingIcon} />
                Příloha
              </Label>
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
            <Row>
              <Col>
                <FormGroup>
                  <Label for="ingredAmount">
                    <IoBasketOutline style={stylingIcon} />
                    Přidat ingredienci
                  </Label>
                  <Input
                    id="ingredAmount"
                    name="ingredAmount"
                    placeholder="Množství"
                    onChange={handleOnChange}
                  />
                </FormGroup>
              </Col>
              <Col>
                <FormGroup>
                  <Label for="ingredUnit">
                    <IoScaleOutline style={stylingIcon} />
                  </Label>
                  <Input
                    id="ingredUnit"
                    name="ingredUnit"
                    placeholder="Jednotka"
                    onChange={handleOnChange}
                  />
                </FormGroup>
              </Col>
            </Row>
            <Row>
              {' '}
              <FormGroup>
                <Label for="group">
                  <IoAlbumsOutline style={stylingIcon} />
                  Přidat skupinu
                </Label>
                <Input
                  id="group"
                  name="group"
                  placeholder="Nová skupina"
                  onChange={handleOnChange}
                />
              </FormGroup>
            </Row>
          </Col>
          <Col className="col-5">
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
