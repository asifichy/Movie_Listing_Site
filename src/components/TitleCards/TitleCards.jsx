import React, { useEffect, useRef, useState } from 'react'
import './TitleCards.css'
import cards_data from '../../assets/cards/Cards_data'
import { Link } from 'react-router-dom'


const TitleCards = ({title, category}) => {
  //we are getting the data from API inform of array
  const [apiData, SetAPIData] = useState([]);

  //for scroll horizontally without shift key
  const cardsRef = useRef();

  //api fetch request
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0YjI4NDlmYTYwNTQ0NDYwOTk4ZmViY2FmZGI4MGU3OCIsInN1YiI6IjY2NDQ2NTkyMTVhNjJjODQ0OGVjM2RmOSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.EveVMu-T_man3cxBXXYOOAenujvGNTEYkR0XsYOJZs0'
    }
  };  
  

  const handleWheel = (event) => {
    // it'll not scroll the webpage (popular on netflix vertically rather than it'll scroll horizontally)
    event.preventDefault(); 
    cardsRef.current.scrollLeft += event.deltaY;
  }

  //effect
  // arrow function will execute whenever the component will be loaded
  useEffect(() => {

    //fetching the api response    
    fetch(`https://api.themoviedb.org/3/movie/${category?category:"now_playing"}?language=en-US&page=1`, options) //setting up the category wise content view or-else now-playing
    .then(response => response.json())
    .then(response => SetAPIData(response.results))
    .catch(err => console.error(err));

    cardsRef.current.addEventListener('wheel', handleWheel)
  }, []) 

  return (
    <div className='titlecards'>
      <h2>{title?title: "Popular on Netflix"}</h2>
      <div className="card-list" ref={cardsRef}>
        {apiData.map((card, index) => {
          return <Link to={`/player/${card.id}`} className="card" key={index}> {/*${card.id} is the movie id*/}
            <img src={`https://image.tmdb.org/t/p/w500/` + card.backdrop_path} alt="" />
            <p>{card.original_title}</p>
          </Link>
        })}
      </div>
    </div>
  )
}

export default TitleCards 
