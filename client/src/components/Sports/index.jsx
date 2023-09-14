import basketball from '../../assets/images/basketball.jpg';
import hockey from '../../assets/images/hockey.jpg';
import boxing from '../../assets/images/boxing.jpg';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import Button from 'react-bootstrap/Button';
import './index.scss';

    function Sports() {
            return (
                <div className='art-page'>
                <h1 className='site-title'>Sports</h1>
                <CardGroup>
                    <Card>
                    <Card.Img variant="top" src={basketball} />
                    <Card.Body>
                        <Card.Title>Basketball Games</Card.Title>
                        <Card.Text>
                        Tip-Off Time: Get Ready to Slam Dunk into Basketball Action! Enjoy the excitement of the NBA or College games, and the best players in the world.
                        </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                    <Button variant="primary">Select</Button>
                    </Card.Footer>
                    </Card>
                    <Card>
                    <Card.Img variant="top" src={hockey} />
                    <Card.Body>
                        <Card.Title>Hockey Games</Card.Title>
                        <Card.Text>
                        Get Ready to Rumble: Hockey Games that Score Big! Enjoy the excitement of the NHL or College games, and the best players in the world.
                        </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                    <Button variant="primary">Select</Button>
                    </Card.Footer>
                    </Card>
                    <Card>
                    <Card.Img variant="top" src={boxing} />
                    <Card.Body>
                        <Card.Title>Boxing</Card.Title>
                        <Card.Text>
                        Step into the Ring: An Evening of Championship Boxing. Enjoy the excitement of the best boxers in the world.
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

    export default Sports;