import {
  Container,
  FormGroup,
  InputGroup,
  InputGroupText,
  Label,
  Input,
  Button,
  Row,
  Col,
} from 'reactstrap';

import { CreateRecipe, UpdateRecipe } from '../components/EditOps';

export function RecipeEdit(recipe) {
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
            onClick={
              UpdateRecipe
            } /* tady IF (recept existuje) THEN {UpdateRecipe} ELSE {CreateRecipe} */
          >
            Save
          </Button>
          <Button
          /* onClick={ Cancel }*/
          >
            Cancel
          </Button>
        </Col>
      </Row>
      <Row>
        <Input placeholder={recipe.title} />
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
                placeholder="Doba přípravy"
              />
              <InputGroupText>min.</InputGroupText>
            </InputGroup>
          </FormGroup>
          <FormGroup>
            <Label for="servings">Počet porcí</Label>
            <Input id="servings" name="servings" placeholder="Počet porcí" />
          </FormGroup>
          <FormGroup>
            <Label for="sideDish">Příloha</Label>
            <Input id="sideDish" name="sidedish" placeholder="Příloha" />
          </FormGroup>
        </Col>
        <Col className="col-4">
          <h2>Ingredience</h2>
          <p>...under construction...</p>
        </Col>
        <Col className="col-6">
          <h2>Postup</h2>
          <FormGroup>
            <Input id="directions" name="directions" type="textarea" />
          </FormGroup>
        </Col>
      </Row>
      <Row></Row>
    </form>
  </Container>;
}
