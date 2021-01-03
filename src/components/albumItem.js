import React from 'react';
import { CardDeck } from 'react-bootstrap';
import Card from 'react-bootstrap/Card'; // import activates card component from bootstrap

export class AlbumItem extends React.Component {
    render() {

        return (
            <div> 

                <CardDeck> 
                    <Card bg="dark" border="danger" text="white" style={{ width: '20rem' }}>
                        <Card.Header>{this.props.album.name}</Card.Header>
                        <Card.Body>
                            <Card.Title><img src={this.props.album.image} width="200" height="200"></img></Card.Title>
                            <Card.Text>
                                <b>{this.props.album.artist}</b>
                            </Card.Text>
                            <Card.Footer>
                                {this.props.album.url}
                            </Card.Footer>
                        </Card.Body>
                    </Card>
                </CardDeck>
                <br />
            </div>
        ); // contents in the div tag are displayed in browser as part of Library component
    }
}