import React, { useState, useEffect }from 'react';
import { useParams } from 'react-router-dom'
import SavedShowFetch from './SavedShowFetch'

export default function CollagePage (){
    const [singleShow, setSingleShow] = useState([])
    const { id } = useParams()
    const [seasons, setSeasons] = useState([])
    const [episodes, setEpisodes] = useState([])
    const [casts, setCasts] = useState([])
    const [favEpisode, setFavEpisode] = useState('')
    const [favSeason, setFavSeason] = useState('')
    const [favCastMember, setFavCastMember] = useState('')
    const [favEpiSeason, setFavEpiSeason] = useState('')
    const [singleSeason, setSingleSeason] = useState('')
    const [singleCastMember, setSingleCastMember] = useState('')
    const [singleEpisode, setSingleEpisode] = useState('')
    useEffect(() => {
        fetch(`/shows/${id}`)
        .then(resp => resp.json())
        .then(data => {
            console.log(data)
            setSingleShow(data)
            fetchInfo(data)
        })
    },[id])
    



    function fetchInfo(data) {
        
        fetch(`https://api.tvmaze.com/shows/${data.show_id}/episodes`)
        .then(resp => resp.json())
        .then(data=> {
            console.log(data)
            setEpisodes(data)
        })
        
        fetch(`https://api.tvmaze.com/shows/${data.show_id}/seasons`)
        .then(resp => resp.json())
        .then(data=> {
            console.log(data)
            setSeasons(data)
        })
        
        fetch(`https://api.tvmaze.com/shows/${data.show_id}/cast`)
        .then(resp => resp.json())
        .then(data=> {
            console.log(data)
            setCasts(data)
        })
        
    }
    function handleSubmitCast(e){
        e.preventDefault()
        // console.log(casts)
        // console.log(casts.find(cast => cast.character.name.toLowerCase() === favCastMember.toLowerCase()))
        setSingleCastMember(casts.find(cast => cast.character.name.toLowerCase() === favCastMember.toLowerCase()))
        console.log(singleCastMember)
       
        let show_object = {
            name: singleCastMember.character.name,
            image: singleCastMember.character.image.medium,
            actor: singleCastMember.person.name,
            actor_image: singleCastMember.person.image.medium,
            gender: singleCastMember.person.gender    
         }
        setFavCastMember('')
        handleFavCastMemberPost(show_object)
    }
    // console.log(casts[0].character.name, favCastMember)

    function handleFavCastMemberPost(show_object) {
        // debugger;
        
        fetch(`/shows/${id}`, {
            method: 'PATCH',
            headers: { 'Content-Type': 'application/json'},
            body: JSON.stringify(show_object)
        })
            .then(resp => resp.json())
            .then(data=> {
                console.log(data)
            })
    }

    function handleSubmitSeason(e){
        e.preventDefault()
        // console.log(seasons)
        // console.log(seasons.find(season => season.number === parseInt(favSeason)))
        setSingleSeason(seasons.find(season => season.number === parseInt(favSeason)))
        setFavSeason('')
    }
    
    function handleSubmitEpisode(e){
        e.preventDefault()
        // console.log(episodes)
        setSingleEpisode(episodes.find(episode => episode.number === parseInt(favEpisode) && episode.season === parseInt(favEpiSeason)))
        setFavEpisode('')
    }


    

    return(
    <div>
        <SavedShowFetch singleShow={singleShow}/>
        <h2>{singleShow.name}</h2>
        <div>
        <form onSubmit={handleSubmitCast}>
            <label>Select your favorite Cast member
                <input type="text" value={favCastMember} onChange={(e) => setFavCastMember(e.target.value)}></input>
            </label>
            <button type="submit">Submit your favorite Cast Member</button>
        </form>
        <form onSubmit={handleSubmitEpisode}>
            <label>Select your favorite episode
                <input type="text" value={favEpiSeason} onChange={(e) => setFavEpiSeason(e.target.value)}></input>
                <input type="text" value={favEpisode} onChange={(e) => setFavEpisode(e.target.value)}></input>
            </label>
            <button type="submit">Submit your favorite Episode</button>
        </form>
        <form onSubmit={handleSubmitSeason}>
            <label>Select your favorite season
                <input type="text" value={favSeason} onChange={(e) => setFavSeason(e.target.value)}></input>
            </label>
            <button type="submit">Submit your favorite Season</button>
        </form>
        </div>
        {singleSeason ? (
        <div>
            <h3>{singleSeason.endDate}</h3>
        </div>) : null}
        {singleCastMember ? (
        <div>
            <h3>{singleCastMember.character.name}</h3>
        </div>
        ) : null}
        {singleEpisode ? (
        <div>
            <h3>{singleEpisode.name}</h3>
        </div>    
        ) : null}
    </div>
    )
}