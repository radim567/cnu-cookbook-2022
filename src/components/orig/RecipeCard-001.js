import { Card, CardImg, CardBody, CardTitle, CardSubtitle } from 'reactstrap';
import placeholder from '../images/food-placeholder.png';

export function RecipeCard() {
  return (
    <Card>
      <CardImg src={placeholder} />
      <CardBody>
        <CardTitle>Titulek</CardTitle>
        <CardSubtitle>10 min</CardSubtitle>
      </CardBody>
    </Card>
  );
}
