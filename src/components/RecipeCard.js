import { Link } from 'react-router-dom';
import { Card, CardImg, CardBody, CardTitle, CardSubtitle } from 'reactstrap';
import clockIcon from '../images/clock-icon-40x40.png';

const pictureSource = './meal-pics/';

export function RecipeCard({ title, preparationTime, slug }) {
  return (
    <Card className="h-100 border-2">
      <Link to={`/recipe/${slug}`}>
        <CardImg src={pictureSource + slug + '.jpg'} />
      </Link>
      <CardBody style={{ backgroundColor: '#ddd' }}>
        <CardTitle className="fw-bold">{title}</CardTitle>
        <CardSubtitle>
          <img
            src={clockIcon}
            width="20px"
            height="20px"
            className="me-1"
            alt="clock icon"
          />
          {preparationTime} min
        </CardSubtitle>
      </CardBody>
    </Card>
  );
}

// <Card className="h-100"> - vsechny stejnou vysku
