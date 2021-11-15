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

    // useEffect(() => {
    //     fetch(`/favorite_seasons/${id}`)
    //     .then(resp => resp.json())
    //     .then(data => {
    //         console.log(data);
    //     })
    // })
    



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
        
        let castObj = (singleCastMember ?{ 
            cast: {
            // show_id: id,
            character_name: singleCastMember.character.name,
            character_image: (singleCastMember.character.image ? singleCastMember.character.image.medium : null),
            actor_name: singleCastMember.person.name,
            actor_image: singleCastMember.person.image.medium,
            actor_gender: singleCastMember.person.gender
            }    
            } : null)

        console.log(castObj)
        debugger;
        setFavCastMember('')
        handleFavCastMemberPost(castObj)
    }
    // console.log(casts[0].character.name, favCastMember)

    function handleFavCastMemberPost(castObj) {
        // debugger;
        
        fetch(`/shows/${id}/update_cast`, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json'},
            body: JSON.stringify(castObj)
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
        
        let favSeasonObj = (singleSeason ? {
            seasons: {
            show_id: id,
            episode_order: singleSeason.episodeOrder, 
            end_date: singleSeason.endDate, 
            premiere_data: singleSeason.premiereDate, 
            season_image: singleSeason.image, 
            summary: singleSeason.summary
        }
        } : null )
        setFavSeason('')
        handleFavSeasonPost(favSeasonObj)
    }
    
    function handleFavSeasonPost(favSeasonObj){
        fetch(`/shows/${id}/update_season`, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json'},
            body: JSON.stringify(favSeasonObj)
        })
            .then(resp => resp.json())
            .then(data=> {
                console.log(data)
            })
    }
    
    function handleSubmitEpisode(e){
        e.preventDefault()
        // console.log(episodes)
        setSingleEpisode(episodes.find(episode => episode.number === parseInt(favEpisode) && episode.season === parseInt(favEpiSeason)))
        
        let episodeObj = (singleEpisode ? {
            episodes: {
                airdate: singleEpisode.airdate,
                image: (singleEpisode.image ? singleEpisode.image.medium : null),
                number: singleEpisode.number,
                name: singleEpisode.name

            }
        } : null)
        setFavEpisode('')
        setFavEpiSeason('')
        handleFavEpisodePut(episodeObj)
    }

    function handleFavEpisodePut(episodeObj){
        fetch(`/shows/${id}/update_episode`, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json'},
            body: JSON.stringify(episodeObj)
        })
            .then(resp => resp.json())
            .then(data=> {
                console.log(data)
            })
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