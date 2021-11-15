import React from 'react';
import parse from 'html-react-parser';



export default function ShowCard({ show, currentUser }){

        const { show_id, name, image, rating, summary, network, official_site, genre, runtime, premiered, ended } = show


        const eachGenre = genre.map(singleGenre => (<span>{singleGenre}</span>))

        // const rend = summary.toString()
        
        function handleSave(currentUser) {
            console.log(currentUser)
            // debugger
            fetch(`/shows`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json'},
                body: JSON.stringify({
                    show_id,
                    name,
                    image,
                    rating,
                    summary,
                    network,
                    official_site,
                    genre,
                    runtime,
                    premiered,
                    ended,
                    user_id : currentUser.currentUser.id
                })
            })

            .then(resp=>resp.json())
            .then(savedShow=> {console.log(savedShow)})
        }


        console.log(image)
    return (
        <div className="tv-show-card">
            <h3>{name}</h3>
            <img src={image} alt='not listed'/>
            <span>Network: {network}</span>
            <div>{eachGenre}</div>
            <a href={official_site}>{official_site}</a>
            <span>Rating: {rating}</span>
            <div>{parse(summary)}</div>
            <span>Runtime: {runtime} </span>
            <span>Premiere Date: {premiered} </span>
            <span>Conculsion Date {ended}</span>
            <button onClick={()=>handleSave(currentUser)}>Save Show</button>
        </div>
    )
}
