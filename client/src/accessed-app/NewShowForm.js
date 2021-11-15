import React, { useState }from 'react'

export default function NewShowForm ({ searchedShows, setSearchedShows}){
    const [name, setName] = useState('')
    

    function handleSubmit(e) {
        e.preventDefault()
        let fixedWord = "";
        let artistInput = name
        for (let i = 0; i < artistInput.length; i++) {
            if (artistInput[i] === ' ') {
                fixedWord += '_';
            }
            else {
                fixedWord += artistInput[i];
            }
        }
        fetchInformation(fixedWord)
    }

    function fetchInformation(fixedWord) {
        fetch(`https://api.tvmaze.com/search/shows?q=${fixedWord}`)
            .then(resp => resp.json())
            .then(data => normalize(data))
        setName('')
    }

    // console.log(searchedShows)

    function normalize(data) {
        console.log(data)
    
        let showData = data.map(tvShow=> 
            ({
            show_id: tvShow.show.id,
            name: tvShow.show.name,
            image: (tvShow.show.image ? tvShow.show.image.medium : 'image not listed'),
            rating: tvShow.show.rating.average,
            summary: tvShow.show.summary,
            network: (tvShow.show.network ? tvShow.show.network.name : 'network not listed'),
            official_site: tvShow.show.officialSite,
            genre: tvShow.show.genres,
            runtime: tvShow.show.runtime,
            premiered: tvShow.show.premiered,
            ended: tvShow.show.ended
            }
        ))

        console.log(showData)
        setSearchedShows(showData)
    }
    // [
    // {
    //     "score": 0.9082286,
    //     "show": {
    //     "id": 139,
    //     "url": "https://www.tvmaze.com/shows/139/girls",
    //     "name": "Girls",
    //     "type": "Scripted",
    //     "language": "English",
    //     "genres": [
    //     "Drama",
    //     "Romance"
    //     ],
    //     "status": "Ended",
    //     "runtime": 30,
    //     "averageRuntime": 30,
    //     "premiered": "2012-04-15",
    //     "ended": "2017-04-16",
    //     "officialSite": "http://www.hbo.com/girls",
    //     "schedule": {
    //     "time": "22:00",
    //     "days": [
    //     "Sunday"
    //     ]
    //     },
    //     "rating": {
    //     "average": 6.6
    //     },
    //     "weight": 97,
    //     "network": {
    //     "id": 8,
    //     "name": "HBO",
    //     "country": {
    //     "name": "United States",
    //     "code": "US",
    //     "timezone": "America/New_York"
    //     }
    //     },
    //     "webChannel": null,
    //     "dvdCountry": null,
    //     "externals": {
    //     "tvrage": 30124,
    //     "thetvdb": 220411,
    //     "imdb": "tt1723816"
    //     },
    //     "image": {
    //     "medium": "https://static.tvmaze.com/uploads/images/medium_portrait/31/78286.jpg",
    //     "original": "https://static.tvmaze.com/uploads/images/original_untouched/31/78286.jpg"
    //     },
    //     "summary": "<p>This Emmy winning series is a comic look at the assorted humiliations and rare triumphs of a group of girls in their 20s.</p>",
    //     "updated": 1611310521,
    //     "_links": {
    //     "self": {
    //     "href": "https://api.tvmaze.com/shows/139"
    //     },
    //     "previousepisode": {
    //     "href": "https://api.tvmaze.com/episodes/1079686"
    //     }
    //     }
    //     }
    //     }
    // ]

    return(
        <div>
            <h2>search for your show</h2>
            <form onSubmit={handleSubmit}>
                <label>Show name</label>
                <input type="text" placeholder="Show Name..." value={name} onChange={(e) => setName(e.target.value)}></input>
                <button type="submit">Search Shows</button>
            </form>
        </div>
    )
}