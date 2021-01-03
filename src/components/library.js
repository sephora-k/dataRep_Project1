import React from 'react';
import { Albums } from './albums'; // imports content from Albums file


export class Library extends React.Component {

    state = { // State stores data displayed in the browser
        albums: [
            {
                "name": "channel ORANGE",
                "artist": "Frank Ocean",
                "image": "https://media.pitchfork.com/photos/5929be57c0084474cd0c2e8c/1:1/w_320/45e3c196.jpeg",
                "url": "https://www.last.fm/music/FrankOcean/channelORANGE"
            },

            {
                "name":"ANTI",
                "artist":"Rihanna",
                "url":"https://www.last.fm/music/Rihanna/ANTI",
                "image":"https://upload.wikimedia.org/wikipedia/en/3/32/Rihanna_-_Anti.png",
                "summary":"Anti is the eighth studio album by Rihanna. The album appeared on streaming service Tidal by accident on 27 January 2016. Even though it was quickly removed, the album soon leaked across the internet, prompting Rihanna to release the album officially on 28 January 2016. For its first day of availability, the album was available exclusively through Tidal, where it could also be legally downloaded for free for 24 hours, regardless of whether a listener was a Tidal subscriber or not. Read more on Last.fm. Anti is the eighth studio album by Rihanna. The album appeared on streaming service Tidal by accident on 27 January 2016. Even though it was quickly removed, the album soon leaked across the internet, prompting Rihanna to release the album officially on 28 January 2016. For its first day of availability, the album was available exclusively through Tidal, where it could also be legally downloaded for free for 24 hours, regardless of whether a listener was a Tidal subscriber or not. The album's lead single, \"Work (feat. Drake)\", was released on 27 January 2016. User-contributed text is available under the Creative Commons By-SA License; additional terms may apply."
            },

            {
                "name":"Man on the Moon:The End Of The Day",
                "artist":"Kid Cudi",
                "url":"https://www.last.fm/music/Kid+Cudi/Man+on+the+Moon:The+End+Of+The+Day",
                "image":"https://upload.wikimedia.org/wikipedia/en/thumb/2/26/ManonTheMoonTheEndofDay.jpg/220px-ManonTheMoonTheEndofDay.jpg"
            },

            {
                "name": "Joshua Tree",
                "artist": "U2",
                "url": "https://www.last.fm/music/U2/Joshua+Tree",
                "image": "https://upload.wikimedia.org/wikipedia/en/6/6b/The_Joshua_Tree.png"
            },

            {
                "name": "TheDarkSideOfTheMoon",
                "artist": "Pink Floyd",
                "image": "https://upload.wikimedia.org/wikipedia/en/3/3b/Dark_Side_of_the_Moon.png",
                "url": "https://www.last.fm/music/Pink+Floyd/TheDarkSideOfTheMoon"
            },

            {
                "name": "Abbey Road",
                "artist": "The Beatles",
                "mbid": "e12f53a3-e912-321d-bdc7-ed17ec525ec0",
                "image": "https://upload.wikimedia.org/wikipedia/en/4/42/Beatles_-_Abbey_Road.jpg",
                "url": "https://www.last.fm/music/The+Beatles/Abbey+Road"
            }

        ]
    };

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