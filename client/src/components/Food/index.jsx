import food1 from '../../assets/images/food1.jpg';
import food2 from '../../assets/images/food2.jpg';
import food3 from '../../assets/images/food3.jpg';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import Button from 'react-bootstrap/Button';
import './index.scss';

    function Food() {
            return (
                <div className='art-page'>
                <h1 className='site-title'>Eateries</h1>
                <CardGroup>
                    <Card>
                    <Card.Img variant="top" src={food1} />
                    <Card.Body>
                        <Card.Title>Date Night</Card.Title>
                        <Card.Text>
                        Unlocking Romance, Your Ultimate Guide to Unforgettable Date Nights. From fine dining, you will find the perfect date night idea for you and your significant other.
                        </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                    <Button variant="primary">Select</Button>
                    </Card.Footer>
                    </Card>
                    <Card>
                    <Card.Img variant="top" src={food2} />
                    <Card.Body>
                        <Card.Title>Bar or Lounge</Card.Title>
                        <Card.Text>
                        Unwind in Style, where Every Sip is an Experience! Choose from a variety of bars and lounges, each with its own unique atmosphere and specialties.
                        </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                    <Button variant="primary">Select</Button>
                    </Card.Footer>
                    </Card>
                    <Card>
                    <Card.Img variant="top" src={food3} />
                    <Card.Body>
                        <Card.Title>Brunch/Dinner</Card.Title>
                        <Card.Text>
                        Indulge in Culinary Delights, Brunch & Dinner Extravaganza. Enjoy a variety of delicious dishes from around the world, including hand-carved meats, rotisserie chicken, seafood, pasta dishes, salads, and more!


                        </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                    <Button variant="primary">Select</Button>
                    </Card.Footer>
                    </Card>
                </CardGroup>
                </div>
            );
        }
    
        export default Food;