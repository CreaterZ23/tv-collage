import React from "react";
import {Link} from "react-router-dom"
import parse from 'html-react-parser';

export default function SavedShowCard ({ show, refresh, setRefresh }) {
    const { id, name, image, rating, summary, network, official_site, genre, runtime, premiered, ended } = show

    // const eachGenre = genre.map(singleGenre => (<span>{singleGenre}</span>))
    const rend = (summary ? summary.toString() : null)
    function handleDelete(){
        fetch(`/shows/${id}`,{
            method: 'DELETE'
        })
        setRefresh(!refresh)
    }

    
    return(
        <div className="tv-show-card">
            <h3>{name}</h3>
            <img src={image} alt='not listed'/>
            <span>Network: {network}</span>
            {/* <div>{eachGenre}</div> */}
            <a href={official_site}>{official_site}</a>
            <span>Rating: {rating}</span>
            {summary ? <div>{parse(rend)}</div> : null}
            <span>Runtime: {runtime} </span>
            <span>Premiere Date: {premiered} </span>
            <span>Conculsion Date {ended}</span>
            <button onClick={handleDelete}>Delete show</button>
            <button><Link to={`/shows/${id}`} style={{ textDecoration: 'none', color: 'black' }}>Build your collage</Link></button>


            
        </div>
    )
}