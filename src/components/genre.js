import React from 'react';
import { CardDeck } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';

export class Genre extends React.Component {
    render() {

        return (
            <div>
                <h1>The Archive</h1>
                <h2><i>The Top 5 Music Album Genres</i></h2>
                <br />
            <CardDeck>
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={require("../images/albumArt2.jpg")} />
                    <Card.Body>
                        <Card.Title>1. POP</Card.Title>
                        <Card.Text>
                        As the label itself indicates, pop music is surely the most popular genre in the music market. 
                        It is a bit tricky, however, to clearly define what pop music is, as it has evolved so much through time.
                        <br/>
                        Nowadays, pop music takes much of its sounds and musical language from the world of hip-hop, with its sub-genres of trap and rap being extremely popular.
                        </Card.Text>
                    </Card.Body>
                </Card>

                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={require("../images/albumArt2.jpg")} />
                    <Card.Body>
                        <Card.Title>2. Hip-Hop and Rap</Card.Title>
                        <Card.Text>
                        These two genres, originating in the Eighties but with some ancient roots planted in the Blues and the Gospel too, presented an incredible evolution, 
                        that made them a sort of standard for the mainstream.
                        <br/>
                        Many hip-hop sub-genres, such as rap and trap, are now filling the charts and influencing many other popular genres.
                        </Card.Text>
                    </Card.Body>
                </Card>

                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={require("../images/albumArt2.jpg")} />
                    <Card.Body>
                        <Card.Title>3. Rock</Card.Title>
                        <Card.Text>
                        Rock evolved directly from the Blues and it became popular in the Fifties, first in the United States and then in Great Britain. 
                        From London, it slowly but steadily spread all over Europe, where it became the perfect soundtrack to the ideological turmoil of the Sixties.
                        <br/>
                        In recent years, Rock music is not as popular as it used to be. With other genres innovating and taking over the electronic and the digital tools available, rock’n’roll has lost its rebellious input, losing spot after spot in the charts.
                        </Card.Text>
                    </Card.Body>
                </Card>

                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={require("../images/albumArt2.jpg")} />
                    <Card.Body>
                        <Card.Title>4. Dance and Electronic Music</Card.Title>
                        <Card.Text>
                        The rise of computers and digital technology allowed producers to explore new ways to make music. We no longer need a musical instrument to write or produce a song. We just need a computer.
                        <br/>
                        This is how electronic music rose to fame throughout the Eighties and the Nineties, with some precedents in the Seventies, when orchestras, however, were still very popular in dance halls.
                        </Card.Text>
                    </Card.Body>
                </Card>

                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={require("../images/albumArt2.jpg")} />
                    <Card.Body>
                        <Card.Title>5. Latin Music</Card.Title>
                        <Card.Text>
                        The realm of Latin music is wide, as it spans from the modern Reggaeton to more traditional Samba or other classic dance styles.
                        <br/>
                        Overall, this genre became so popular that many elements of it, especially from a rhythmical point of view, are now a recurrent part of many mainstream productions we could consider Pop.
                        </Card.Text>
                    </Card.Body>
                </Card>
            </CardDeck>
            </div>
        );
    }
}