import { Container, FormGroup, InputGroup, InputGroupText } from 'reactstrap';
import { Label, Input, Button, Row, Col } from 'reactstrap';
import { api } from '../api';
import { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import {
  IoTimerOutline,
  IoPeopleOutline,
  IoAddCircleOutline,
  IoScaleOutline,
  IoRestaurantOutline,
  IoBasketOutline,
  IoAlbumsOutline,
  IoImageOutline,
} from 'react-icons/io5';

let stylingIcon = {
  color: '039ed8',
  margin: '0rem 0.25rem',
  fontSize: '1.5rem',
};

export function RecipeEditPage() {
  const { slug } = useParams();
  const [recipe, setRecipe] = useState({});

  /* const [error, setError] = useState(null);

      .catch((error) => {
        setError(error);
      });
  });
  if (error) return `Error: ${error.message}`; */

  useEffect(() => {
    if (slug) {
      api.get(`/recipes/${slug}`).then((response) => setRecipe(response.data));
    }
  }, [slug]);

  const handleOnChange = (event) => {
    const { name, value } = event.target;
    setRecipe({ ...recipe, [name]: value });
  };

  function UpdateRecipe() {
    if (slug) {
      // if slug present, update recipe
      api.post(`/recipes/${recipe._id}`, recipe).then((response) => {
        setRecipe(response.data);
      });
    } else {
      // if not, create new
      api.post(`/recipes/`, recipe).then((response) => {
        setRecipe(response.data);
      });
    }
  }
  return (
    <Container>
      <form>
        <Row className="mb-2">
          <Col>
            <h2>
              <IoRestaurantOutline style={stylingIcon} />
              {recipe.title}
            </h2>
          </Col>
          <Col className="col-3" lg={3} md={4} sm={5} xs={12}>
            <Button
              style={{ backgroundColor: '#039ed8' }}
              className="me-2 mb-1"
              onClick={UpdateRecipe}
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
            id="title"
            name="title"
            value={recipe.title}
            placeholder={recipe.title}
            onChange={handleOnChange}
          />
        </Row>
        <Row style={{ fontSize: '1.3rem' }}>
          <Col className="col-3">
            <h3>Základní údaje</h3>
            <FormGroup>
              <Label for="preparationTime">
                <IoTimerOutline style={stylingIcon} />
                Doba přípravy
              </Label>
              <InputGroup>
                <Input
                  id="preparationTime"
                  name="preparationTime"
                  value={recipe.preparationTime}
                  placeholder={recipe.preparationTime}
                  onChange={handleOnChange}
                />
                <InputGroupText>min.</InputGroupText>
              </InputGroup>
            </FormGroup>
            <FormGroup>
              <Label for="servingCount">
                <IoPeopleOutline style={stylingIcon} />
                Počet porcí
              </Label>
              <Input
                id="servingCount"
                name="servingCount"
                value={recipe.servingCount}
                placeholder={recipe.servingCount}
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
                name="sideDish"
                value={recipe.sideDish}
                placeholder={recipe.sideDish}
                onChange={handleOnChange}
              />
            </FormGroup>
            <FormGroup>
              <Label for="pictureFile">
                <IoImageOutline style={stylingIcon} /> Obrázek
              </Label>
              <Input id="pictureFile" name="file" type="file" />
            </FormGroup>
          </Col>
          <Col className="col-4">
            <h3>Ingredience</h3>
            <Row>
              <Col>
                <FormGroup>
                  <Label for="amount">
                    <IoBasketOutline style={stylingIcon} />
                    Přidat ingredienci
                  </Label>
                </FormGroup>
              </Col>
              <Col>
                <FormGroup>
                  <Label for="amountUnit">
                    <IoScaleOutline style={stylingIcon} />
                  </Label>
                </FormGroup>
              </Col>
            </Row>
            <Row>
              <Col>
                <FormGroup>
                  <Input
                    id="amount"
                    name="ingredients.amount"
                    placeholder="Množství"
                    onChange={handleOnChange}
                  />
                </FormGroup>
              </Col>
              <Col>
                <FormGroup>
                  <Input
                    id="amountUnit"
                    name="ingredients.amountUnit"
                    placeholder="Jednotka"
                    onChange={handleOnChange}
                  />
                </FormGroup>
              </Col>
            </Row>
            <Row>
              <Col>
                <InputGroup>
                  <Input
                    id="name"
                    name="ingredients.name"
                    placeholder="Název"
                    onChange={handleOnChange}
                  />
                  <InputGroupText>+</InputGroupText>
                </InputGroup>
              </Col>
            </Row>
            <Row>
              <FormGroup>
                <Label for="isGroup">
                  <IoAlbumsOutline style={stylingIcon} />
                  Přidat skupinu
                </Label>
                <Input
                  id="isGroup"
                  name="isGroup"
                  placeholder="Nová skupina"
                  onChange={handleOnChange}
                />
              </FormGroup>
            </Row>
          </Col>
          <Col className="col-5">
            <h3>Postup</h3>
            <FormGroup>
              <Input
                rows={14}
                id="directions"
                name="directions"
                value={recipe.directions}
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
