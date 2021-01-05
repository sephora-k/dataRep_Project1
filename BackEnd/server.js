const express = require('express')
const app = express()
const port = 4000   // different port no. prevents clashing with front-end
const cors = require('cors'); // imports CORS library/ security purposes
const bodyParser = require("body-parser"); //parsing incoming request

//-------------------------------------------

app.use(cors());

app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
    res.header("Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())


app.get('/api/albums', (req, res) => { // Root point/ localhost URL

    const myalbums = [
        {
            "name": "channel ORANGE",
            "artist": "Frank Ocean",
            "image": "https://media.pitchfork.com/photos/5929be57c0084474cd0c2e8c/1:1/w_320/45e3c196.jpeg",
            "url": "https://www.last.fm/music/FrankOcean/channelORANGE"
        },

        {
            "name": "ANTI",
            "artist": "Rihanna",
            "url": "https://www.last.fm/music/Rihanna/ANTI",
            "image": "https://upload.wikimedia.org/wikipedia/en/3/32/Rihanna_-_Anti.png",
            "summary": "Anti is the eighth studio album by Rihanna. The album appeared on streaming service Tidal by accident on 27 January 2016. Even though it was quickly removed, the album soon leaked across the internet, prompting Rihanna to release the album officially on 28 January 2016. For its first day of availability, the album was available exclusively through Tidal, where it could also be legally downloaded for free for 24 hours, regardless of whether a listener was a Tidal subscriber or not. Read more on Last.fm. Anti is the eighth studio album by Rihanna. The album appeared on streaming service Tidal by accident on 27 January 2016. Even though it was quickly removed, the album soon leaked across the internet, prompting Rihanna to release the album officially on 28 January 2016. For its first day of availability, the album was available exclusively through Tidal, where it could also be legally downloaded for free for 24 hours, regardless of whether a listener was a Tidal subscriber or not. The album's lead single, \"Work (feat. Drake)\", was released on 27 January 2016. User-contributed text is available under the Creative Commons By-SA License; additional terms may apply."
        },

        {
            "name": "Fine Line",
            "artist": "Harry Styles",
            "url": "https://www.last.fm/music/Harry+Styles/Fine+Line",
            "image": "https://upload.wikimedia.org/wikipedia/en/thumb/b/b1/Harry_Styles_-_Fine_Line.png/220px-Harry_Styles_-_Fine_Line.png"
        },

        {
            "name": "Freudian",
            "artist": "Daniel Caesar",
            "url": "https://www.last.fm/music/Daniel+Caesar/Freudian",
            "image": "data:image/jpeg;base64,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"
        },

        {
            "name": "Sweetner",
            "artist": "Ariana Grande",
            "url": "https://www.last.fm/music/Ariana+Grande/Sweetner",
            "image": "data:image/jpeg;base64,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"
        },

        {
            "name": "Man on the Moon:The End Of The Day",
            "artist": "Kid Cudi",
            "url": "https://www.last.fm/music/Kid+Cudi/Man+on+the+Moon:The+End+Of+The+Day",
            "image": "https://upload.wikimedia.org/wikipedia/en/thumb/2/26/ManonTheMoonTheEndofDay.jpg/220px-ManonTheMoonTheEndofDay.jpg"
        },

        {
            "name": "Lost & Found",
            "artist": "Jorja Smith",
            "url": "https://www.last.fm/music/Jorja+Smith/Lost",
            "image": "https://upload.wikimedia.org/wikipedia/en/b/ba/Jorja_Smith_-_Lost_%26_Found.png"
        },

        {
            "name": "While We Wait",
            "artist": "Kehlani",
            "url": "https://www.last.fm/music/Kehlani/While+We+Wait",
            "image": "https://upload.wikimedia.org/wikipedia/en/3/3a/Kehlani_-_While_We_Wait.png"
        },

        {
            "name": "The 20/20 Experience",
            "artist": "Justin Timberlake",
            "mbid": "bd2a6877-71a3-4819-b2bb-b373deb3a756",
            "url": "https://www.last.fm/music/Justin+Timberlake/The+20%2F20+Experience",
            "image": "https://cdn.shopify.com/s/files/1/2036/5517/products/MUS000374981_600x.jpg?v=1556026841"
        },

        {
            "name": "Paramore",
            "artist": "Paramore",
            "mbid": "0b2345b3-1984-4e96-b60f-427827b9716a",
            "url": "https://www.last.fm/music/Paramore/Paramore",
            "image": "https://upload.wikimedia.org/wikipedia/en/e/eb/ParamoreParamore.png"
        },

        {
            "name": "The Beginning",
            "artist": "Black Eyed Peas",
            "url": "https://www.last.fm/music/Black+Eyed+Peas/The+Beginning",
            "image": "https://e.snmc.io/i/600/w/eda56d6052fa6b74bd2b8e24778e491a/3385175"
        },

        {
            "name": "Parachutes",
            "artist": "Coldplay",
            "mbid": "8e602038-c0f2-3c2d-9068-a1a3daca493d",
            "url": "https://www.last.fm/music/Coldplay/Parachutes",
            "image": "https://upload.wikimedia.org/wikipedia/en/5/57/Coldplayparachutesalbumcover.jpg"
        },

        {
            "name": "Discovery",
            "artist": "Daft Punk",
            "mbid": "51467269-3122-3d7e-92b2-0f0a694d30c1",
            "url": "https://www.last.fm/music/Daft+Punk/Discovery",
            "image": "https://upload.wikimedia.org/wikipedia/en/a/ae/Daft_Punk_-_Discovery.jpg"
        },

        {
            "name": "Kid A",
            "artist": "Radiohead",
            "mbid": "b13f061a-bd3c-3aaf-9a60-64a0c6f7aee5",
            "url": "https://www.last.fm/music/Radiohead/Kid+A",
            "image": "https://upload.wikimedia.org/wikipedia/en/0/02/Radioheadkida.png"
        },

        {
            "name": "Joshua Tree",
            "artist": "U2",
            "url": "https://www.last.fm/music/U2/Joshua+Tree",
            "image": "https://upload.wikimedia.org/wikipedia/en/6/6b/The_Joshua_Tree.png"
        },

        {
            "name": "Parallel Lines",
            "artist": "Blondie",
            "mbid": "d9d40c9d-fb53-404f-8a21-6c67ba73f614",
            "url": "https://www.last.fm/music/Blondie/Parallel+Lines",
            "image": "https://upload.wikimedia.org/wikipedia/en/4/48/Blondie_-_Parallel_Lines.png"
        },

        {
            "name": "Thriller",
            "artist": "Michael Jackson",
            "mbid": "9774b815-8ffa-4fd2-8eb5-c25539322a77",
            "url": "https://www.last.fm/music/Michael+Jackson/Thriller",
            "image": "https://upload.wikimedia.org/wikipedia/en/5/55/Michael_Jackson_-_Thriller.png"
        },

        {
            "name": "Queen II",
            "artist": "Queen",
            "url": "https://www.last.fm/music/Queen/QueenII",
            "image": "https://www.udiscovermusic.com/wp-content/uploads/2019/03/Queen-II-album-cover-820.jpg"
        },

        {
            "name": "She's So Unusual",
            "artist": "Cyndi Lauper",
            "mbid": "ad5964d3-797e-34b4-95fa-43a9ae685bdb",
            "url": "https://www.last.fm/music/Cyndi+Lauper/She%27s+So+Unusual",
            "image": "https://upload.wikimedia.org/wikipedia/en/0/09/ShesSoUnusual1984.PNG"
        },

        {
            "name": "The Dark Side Of The Moon",
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
        },

        {
            "name": "Pink Flag",
            "artist": "Wire",
            "mbid": "7fa9a051-daaa-337b-bce3-f26ed7058990",
            "url": "https://www.last.fm/music/Wire/Pink+Flag",
            "image": "https://upload.wikimedia.org/wikipedia/en/thumb/3/3e/Wirepinkflagcover.jpg/220px-Wirepinkflagcover.jpg"
        }
    ];

    res.json({ // passes information from object to localhost
        message: "Everything is Ok!",
        albums: myalbums
    });
})

app.post('/api/albums', (req, res) => { // Post request sends data to server (front-end)
    console.log('Album Added!'); // server is going to receive this data
    console.log(req.body.name);
    console.log(req.body.artist);
    console.log(req.body.image);
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})