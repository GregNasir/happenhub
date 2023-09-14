//import React from 'react';
import art1 from '../../assets/images/art1.jpg';
import art2 from '../../assets/images/art2.jpg';
import art3 from '../../assets/images/art3.jpg';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import Button from 'react-bootstrap/Button';
import './index.scss';

    function Art() {
            return (
            <div className='art-page'>
                <h1 className='site-title'>Art Museums</h1>
                <CardGroup>
                    <Card>
                    <Card.Img variant="top" src={art1} />
                    <Card.Body>
                        <Card.Title>The Modern Art Museum</Card.Title>
                        <Card.Text>
                        Located in Midtown Manhattan, the Museum of Modern Art (MoMA) is home to the worlds greatest collection of modern and contemporary art. From the painting and sculpture of the 1880s to the film, design, and performance art of today, MoMA provides inspiration for visitors of all ages.
                        </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                    <Button variant="primary">Select</Button>
                    </Card.Footer>
                    </Card>
                    <Card>
                    <Card.Img variant="top" src={art2} />
                    <Card.Body>
                        <Card.Title>Princeton University Art Museum</Card.Title>
                        <Card.Text>
                        Located in Princeton, New Jersey, the Princeton University Art Museum is one of the leading university art museums in the country, with collections of more than 100,000 works of art ranging from ancient to contemporary art and spanning the globe. The Museum is free and open to the public year-round.
                        </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                    <Button variant="primary">Select</Button>
                    </Card.Footer>
                    </Card>
                    <Card>
                    <Card.Img variant="top" src={art3} />
                    <Card.Body>
                        <Card.Title>Museum of Comtemporary Art</Card.Title>
                        <Card.Text>
                        MOCA is a museum that strives to engage and enrich diverse audiences through the collection, preservation, and presentation of contemporary art and design. The museum is located in Los Angeles, California.
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

    export default Art;