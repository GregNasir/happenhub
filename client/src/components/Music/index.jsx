import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import concert from '../../assets/images/concert.jpg';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import Button from 'react-bootstrap/Button';
import './index.scss';

function Music() {
  const history = useNavigate();
  const [selectedCategory, setSelectedCategory] = useState(null);

  const handleCategorySelect = (category) => {
    setSelectedCategory(category);

    
    history(`/music/${category.toLowerCase()}`);
  };

  return (
    <div className="art-page">
      <h1 className="site-title">Music</h1>
      <CardGroup>
        <Card>
          <Card.Img variant="top" src={concert} />
          <Card.Body>
            <Card.Title>Concerts</Card.Title>
            <Card.Text>
            Unleash Your Inner Music Lover: Concerts and Music Festivals Galore! Enjoy the excitement of the best musicians in the world.
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <Button variant="primary" onClick={() => handleCategorySelect('concerts')}>Select</Button>
          </Card.Footer>
        </Card>
      </CardGroup>
    </div>
  );
}

export default Music;
