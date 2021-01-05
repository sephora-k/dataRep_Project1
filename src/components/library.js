import React from 'react';
import { Albums } from './albums'; // imports content from Albums file
import axios from 'axios'; // axios package allows front-end app to communicate with HTTP


export class Library extends React.Component {

    state = { // State stores data displayed in the browser
        albums: []
    };

    componentDidMount() { // method is called every time component is mounted
        axios.get('http://localhost:4000/api/albums') // retrieve info from URL
            .then((response) => {
                this.setState({ albums: response.data }) // updates array in state (data from URL)
            }) // successful promise
            .catch((error) => {
                console.log(error)
            }); // failed promise

    }

    render() {

        return (
            <div>
                <h1>The Archive</h1>
                <br />
                <Albums albums={this.state.albums}></Albums>
            </div>
        ); // displays content in browser
    }
}