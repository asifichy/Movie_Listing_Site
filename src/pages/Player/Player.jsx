import React, { useEffect, useState } from 'react'
import './Player.css'
import back_arrow_icon from '../../assets/back_arrow_icon.png'
import { useNavigate, useParams } from 'react-router-dom'

const Player = () => {

  const {id} = useParams();

  const navigate_to_home = useNavigate();

  const [apiData, setAPIData] = useState({
    name: "",
    key: "",
    published_at: "",
    type: ""
  });

  //API fetch request
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0YjI4NDlmYTYwNTQ0NDYwOTk4ZmViY2FmZGI4MGU3OCIsInN1YiI6IjY2NDQ2NTkyMTVhNjJjODQ0OGVjM2RmOSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.EveVMu-T_man3cxBXXYOOAenujvGNTEYkR0XsYOJZs0'
    }
  };
  
  //API fetch response isside of a component
  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`, options)
    .then(response => response.json())
    .then(response => setAPIData(response.results[0])) //from the results we're getting first object starting at index 0
    .catch(err => console.error(err));
  }, []) //will execute whenever the component will be loaded

  return (
    <div className='player'>
      <img src={back_arrow_icon} alt="" onClick={() => {navigate_to_home(-2)}}/>
      <iframe width='90%' height='90%' src={`https://www.youtube.com/embed/${apiData.key}`} title='trailer' frameBorder='0' allowFullScreen>
      </iframe>
      <div className="player-info">
        <p>{apiData.published_at.slice(0, 10)}</p>
        <p>{apiData.name}</p>
        <p>{apiData.type}</p>
      </div>
    </div>
  )
}

export default Player
