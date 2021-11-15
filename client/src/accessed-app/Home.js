import React, {useState, useEffect} from 'react'
import SavedShowCard from './SavedShowCard'

export default function Home (){
        const [savedShows, setSavedShows] =useState([])
        
        useEffect(() =>{
            fetch(`/shows`)
            .then(resp => resp.json())
            .then(data=> {
                console.log(data)
                setSavedShows(data)
            })

        },[])
        savedShows.map(savedShow=> console.log(savedShow))

        const eachSavedShow = savedShows ? (savedShows.map(savedShow => (
            <SavedShowCard
            key={savedShow.id}
            show={savedShow}
            />
            ))) : null

    return(
        <div>
            <h2>home</h2>
            <div>{eachSavedShow}</div>
        </div>
    )
}