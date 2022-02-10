import { Link } from 'react-router-dom';
import { Card, CardImg, CardBody, CardTitle, CardSubtitle } from 'reactstrap';
//import placeholder from '../images/food-placeholder.jpg';

const picturePath = '../images/meal-pics/';

export function RecipeCard({ title, preparationTime, slug }) {
  let pictureId = picturePath + slug + '.jpg';
  return (
    <Card className="h-100">
      <Link to={`/recipe/${slug}`}>
        <CardImg src={pictureId} />
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

//        <CardImg src={placeholder} />
// 22       <CardSubtitle>{id}</CardSubtitle>
//        <CardImg src={pictureId} />

//  let pictureId = picturePath + slug + '.jpg';
