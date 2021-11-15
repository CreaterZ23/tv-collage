import React, { useState }from 'react'
import NewShowForm from './NewShowForm'
import ShowCard from './ShowCard'

export default function AddShow (currentUser){
    const [searchedShows, setSearchedShows] = useState(null)
    
    const eachSearchedShow = searchedShows ? (searchedShows.map(show => (
        <ShowCard 
        show={show}
        key={show.id}
        currentUser={currentUser}
        /> 
    ))) : null
    
    return(
    <div>
        <NewShowForm setSearchedShows={setSearchedShows} searchedShows={searchedShows}/>
        <div className="allSearchedShows">{eachSearchedShow}</div>
    </div>)
}