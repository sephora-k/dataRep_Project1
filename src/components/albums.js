import React from 'react';
import {AlbumItem} from './albumItem'; // imports content from AlbumIem file

export class Albums extends React.Component{
    render(){

        return this.props.albums.map( (album)=>{  // splits each albums into a section
            return <AlbumItem album={album} ReloadData={this.props.ReloadData}></AlbumItem>
        })
    }
}