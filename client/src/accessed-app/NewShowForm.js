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