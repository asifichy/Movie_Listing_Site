import React, { useEffect, useRef } from 'react'
import './TitleCards.css'
import cards_data from '../../assets/cards/Cards_data'


const TitleCards = ({title, category}) => {

  //for scroll horizontally without shift key
  const cardsRef = useRef();

  const handleWheel = (event) => {
    // it'll not scroll the webpage (popular on netflix vertically rather than it'll scroll horizontally)
    event.preventDefault(); 
    cardsRef.current.scrollLeft += event.deltaY;
  }

  //effect
  // arrow function will execute whenever the component will be loaded
  useEffect(() => {
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
