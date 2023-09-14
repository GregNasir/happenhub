import jazz from '../../assets/images/jazz.jpg';
import hiphop from '../../assets/images/hiphop.jpg';
import concert from '../../assets/images/concert.jpg';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import Button from 'react-bootstrap/Button';
import './index.scss';

    function Music() {
            return (
                <div className='art-page'>
                <h1 className='site-title'>Music</h1>
                <CardGroup>
                    <Card>
                    <Card.Img variant="top" src={jazz} />
                    <Card.Body>
                        <Card.Title>Smooth Sound of Jazz</Card.Title>
                        <Card.Text>
                        Jazz Serenade: Smooth Sounds to Satisfy Your Soul. Enjoy the smooth sounds of jazz and the best musicians in the world.
                        </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                    <Button variant="primary">Select</Button>
                    </Card.Footer>
                    </Card>
                    <Card>
                    <Card.Img variant="top" src={hiphop} />
                    <Card.Body>
                        <Card.Title>Hip Hop/R&B/Afrobeats/Latin Parties</Card.Title>
                        <Card.Text>
                        Groove to the Rhythm: A Night of Hip-Hop, R&B, Afrobeats, and Latin Music. Enjoy the excitement of the best parties. 
                        </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                    <Button variant="primary">Select</Button>
                    </Card.Footer>
                    </Card>
                    <Card>
                    <Card.Img variant="top" src={concert} />
                    <Card.Body>
                        <Card.Title>Concerts and Music Festivals</Card.Title>
                        <Card.Text>
                        Unleash Your Inner Music Lover: Concerts and Music Festivals Galore! Enjoy the excitement of the best musicians in the world.
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
    
    export default Music;