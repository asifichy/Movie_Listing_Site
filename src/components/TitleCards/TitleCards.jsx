import React, { useEffect, useRef } from 'react'
import './TitleCards.css'
import cards_data from '../../assets/cards/Cards_data'


const TitleCards = ({title, category}) => {

  //for scroll horizontally without shift key
  const cardsRef = useRef();

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
    fetch('https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1', options)
    .then(response => response.json())
    .then(response => console.log(response))
    .catch(err => console.error(err));

    cardsRef.current.addEventListener('wheel', handleWheel)
  }, []) 

  return (
    <div className='titlecards'>
      <h2>{title?title: "Popular on Netflix"}</h2>
      <div className="card-list" ref={cardsRef}>
        {cards_data.map((card, index) => {
          return <div className="card" key={index}>
            <img src={card.image} alt="" />
            <p>{card.name}</p>
          </div>
        })}
      </div>
    </div>
  )
}

export default TitleCards 
