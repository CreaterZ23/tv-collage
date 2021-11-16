import React, {useEffect, useState} from 'react';
import {useParams} from 'react-router-dom'
// import CastCard from './CastCard'


export default function SavedShowFetch(){
    // const { id } = useParams()
    // const [showData, setShowData] = useState([])
    // const [castData, setCastData] = useState({})
    // let castCard 
    // useEffect(() => {
    //     (fetch(`/shows/${id}`))
    //     .then(resp => resp.json())
    //     .then(data => {
    //         setShowData(data)
    //         fixerFunction(data.cast)
    //     })
    // },[id])

    // function fixerFunction(obj) {
    //     setCastData(obj)
    //     console.log(obj)
        
    //     return (<CastCard cast={obj}/>)
    // }
    
    


    return(
        <div>
            {/* <CastCard/>
            {showData ? <div className="categories">
                {castCard} */}
            {/* {showData ? <span>{showData.cast.character_name}</span> : null} */}
                {/* {showData.cast.character.image ? <img src={showData.cast.character.image} alt='not provided'/> : null}
                <span>{showData.person.name}</span>
                <span></span> */}

            {/* </div> : null}  */}

        </div>
    )
}



// cast info
// character:
// id: 657427
// image: null
// name: "Dushane"
// url: "https://www.tvmaze.com/characters/657427/top-boy-dushane"
// _links: {self: {…}}
// [[Prototype]]: Object
// person:
// birthday: "1982-06-30"
// country: {name: 'United Kingdom', code: 'GB', timezone: 'Europe/London'}
// deathday: null
// gender: "Male"
// id: 42406
// image: {medium: 'https://static.tvmaze.com/uploads/images/medium_portrait/9/23646.jpg', original: 'https://static.tvmaze.com/uploads/images/original_untouched/9/23646.jpg'}
// name: "Ashley Walters"
// updated: 1530373288
// url: "https://www.tvmaze.com/people/42406/ashley-walters"


// season
// airdate: "2019-09-13"
// airstamp: "2019-09-13T12:00:00+00:00"
// airtime: ""
// id: 1715408
// image: {medium: 'https://static.tvmaze.com/uploads/images/medium_landscape/211/527690.jpg', original: 'https://static.tvmaze.com/uploads/images/original_untouched/211/527690.jpg'}
// name: "Bruk Up"
// number: 1
// rating: {average: 7.5}
// runtime: 44
// season: 1
// summary: "<p>Streetwise Jamie looks to lead a gang and cut old ties for a new supplier. In Jamaica, hardened criminal Dushane is at the mercy of a powerful kingpin.</p>"
// type: "regular"
// url: "https://www.tvmaze.com/episodes/1715408/top-boy-1x01-bruk-up"

// episode
// endDate: "2019-09-13"
// episodeOrder: 10
// id: 100290
// image: null
// name: ""
// network: null
// number: 1
// premiereDate: "2019-09-13"
// summary: null
// url: "https://www.tvmaze.com/seasons/100290/top-boy-season-1"
// webChannel: {id: 1, name: 'Netflix', country: null}


