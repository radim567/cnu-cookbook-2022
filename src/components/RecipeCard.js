import { Link } from 'react-router-dom';
import { Card, CardImg, CardBody, CardTitle, CardSubtitle } from 'reactstrap';
// import placeholder from '../images/food-placeholder.png';

const picturePath = '../images/meal-pics/';

export function RecipeCard({ title, preparationTime, slug }) {
  let pictureFileName = picturePath + slug + '.jpg';
  return (
    <Card className="h-100">
      <Link to={`/recipe/${slug}`}>
        <CardImg src={pictureFileName} />
      </Link>
      <CardBody>
        <CardTitle>{title}</CardTitle>
        <CardSubtitle>{preparationTime} min</CardSubtitle>
        <CardSubtitle>({pictureId})</CardSubtitle>
      </CardBody>
    </Card>
  );
}

// <Card className="h-100"> - vsechny stejnou vysku
