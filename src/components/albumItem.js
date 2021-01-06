import React from 'react';
import { CardDeck } from 'react-bootstrap';
import Card from 'react-bootstrap/Card'; // import activates card component from bootstrap
import {Link} from 'react-router-dom';  // changes URL of application & pass up info
import Button from 'react-bootstrap/Button';
import axios from 'axios'; // axios package

export class AlbumItem extends React.Component {

    constructor(){ 
        super(); // envoke parent constructor

        this.DeleteAlbum = this.DeleteAlbum.bind(this);
    }

    DeleteAlbum(e){
        e.preventDefault(); // event allows to cancel method in DB
        console.log("Delete: "+this.props.album._id);

        axios.delete("http://localhost:4000/api/albums/"+ this.props.album._id) // server deletes 'id' from URL to DB
        .then( ()=>{
            this.props.ReloadData();
        })
        .catch();
    }

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
                        <Link to={"/edit/" + this.props.album._id} className="btn btn-primary">Edit</Link>
                        <Button variant="danger" onClick={this.DeleteAlbum}>Delete</Button>
                    </Card>
                </CardDeck>
                <br />
            </div>
        ); // contents in the div tag are displayed in browser as part of Library component
    }
}