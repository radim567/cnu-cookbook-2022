import { Link } from 'react-router-dom';
import { Card, CardImg, CardBody, CardTitle, CardSubtitle } from 'reactstrap';
import clockIcon from '../images/clock-icon-40x40.png';

const pictureSource = './meal-pics/';

export function RecipeCard({ title, preparationTime, slug }) {
  const imageUrl = pictureSource + slug + '.jpg';

  // if no images found, then placeholder
  /* 1.      <CardImg
           src={
             imageUrl
               ? { uri: imageUrl }
               : require('../images/food-placeholder.png')
           }
         />; */

  /* 2.       <CardImg
            src={imageUrl}
            onError={(e) => {
              e.target[
                Object.keys(e.target).filter((prop) =>
                  prop.includes('EventHandler'),
                )[0]
              ].onError = null;
              e.target.src = './images/food-placeholder.png';
            }}
          />; */

  return (
    <Card className="h-100 border-2">
      <Link to={`/recipe/${slug}`}>
        <CardImg src={imageUrl} />
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
