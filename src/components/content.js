import React from 'react';
import { Jumbotron, Container, Image } from 'react-bootstrap';

export class Content extends React.Component {
    render() {

        return (
            <div className="App">
                <br />

                <h2>{new Date().toLocaleTimeString()}.</h2>

                <Jumbotron fluid>
                    <Container>
                        <div className="image">
                        <Image src={require("../images/albumArt1.jpg")} fluid />
                        </div>
                        <h1><i>The Archive</i></h1>
                        <p>
                            Music albums and their appreciation are becoming scarce. 
                            With easy access music applications such as <i>Spotify, Apple Music, Deezer and Tidal</i> listening to music has never been easier. Most of the time the user will be more interested in the released singles rather than the body of artwork that is the album.
                            This application acknowledges music albums, old, new, forgotten and unknown. This application is stores music albums in the <i>'Library'</i> and can be added from <i>'Search'</i>.
                            </p>
                    </Container>
                </Jumbotron>
                        <br/>
                        <div className="image">
                        <Image src={require("../images/albumArt.png")} fluid />
                        </div>
            </div>
        );
    }
}