import React from 'react'
import { Link } from 'react-router-dom'
import Apartments from '../../data/logements.json'

function Card() {
  return (
    <div className="cards">
      {Apartments.map(apartment => (
        <Link
          className="cards__card"
          to={`apartment/${apartment.id}`}
          key={apartment.id}
        >
          <img
            className="cards__card__cover"
            src={apartment.cover}
            alt={apartment.title}
          />
          <p className="cards__card__title">{apartment.title}</p>
        </Link>
      ))}
    </div>
  )
}

export default Card
