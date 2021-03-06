import React from 'react';
import axios from 'axios';

export class Search extends React.Component {

    constructor() {
        super(); // envokes constructor of parent class (react.component)

        this.onSubmit = this.onSubmit.bind(this); // events must be binded
        this.onChangeName = this.onChangeName.bind(this);
        this.onChangeArtist = this.onChangeArtist.bind(this);
        this.onChangeImage = this.onChangeImage.bind(this);
        this.onChangeUrl = this.onChangeUrl.bind(this);

        this.state = {
            name: '',
            artist: '',
            image: '',
            url: ''
        }
    }

    onChangeName(e) { // called when value of input changes
        this.setState({
            name: e.target.value
        });
    }

    onChangeArtist(e){ // envoke method
        this.setState({
            artist: e.target.value
        });
    }

    onChangeImage(e){ // envoke method
        this.setState({
            image: e.target.value
        });
    }

    onChangeUrl(e){ // envoke method
        this.setState({
            url: e.target.value
        });
    }

    onSubmit(e) { // method called from form when form is submitted
        e.preventDefault(); // prevents button from submitting repeatedly
        alert("Album: " + this.state.name + " " + this.state.artist + " " + this.state.image + " " + this.state.url);

        const newAlbum = { // objects
            name: this.state.name,
            artist: this.state.artist,
            image: this.state.image,
            url: this.state.url
        }
        
        axios.post('http://localhost:4000/api/albums', newAlbum) //Post request from current URL & returns promise (asynchronous)
        .then((res)=>{
            console.log(res)
        })
        .catch((err)=>{
            console.log(err);
        });
    }

    render() {

        return (
            <div className='App'>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label>Album Name: </label>
                        <input type='text' className='form-control' value={this.state.name} onChange={this.onChangeName}></input>
                    </div>
                    <div className="form-group">
                        <label>Artist: </label>
                        <input type='text' className='form-control' value={this.state.artist} onChange={this.onChangeArtist}></input>
                    </div>
                    <div className='form-group'>
                        <label>Album Image: </label>
                        <textarea type='text' className='form-control' value={this.state.image} onChange={this.onChangeImage}></textarea>
                    </div>
                    <div className="form-group">
                        <label>URL: </label>
                        <input type='text' className='form-control' value={this.state.url} onChange={this.onChangeUrl}></input>
                    </div>
                    <div className="form-group">
                        <input type='Submit' value='Add Album' className='btn btn-primary'></input>
                    </div>
                </form>
            </div>
        );
    }
}