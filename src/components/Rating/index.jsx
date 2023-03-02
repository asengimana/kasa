import React from 'react'
import Apartments from '../../data/logements.json'
import starWhite from '../../assets/star.png'
import starRed from '../../assets/star-red.png'
import { useParams, Navigate } from 'react-router-dom'

function Rating() {
  const urlParams = useParams()
  const stars = [1, 2, 3, 4, 5]
  const apartment = Apartments.filter(data => data.id === urlParams.id)
  if (apartment === []) {
    return <Navigate to="*" />
  }

  return (
    <div className="stars">
      {apartment.map((star, index) =>
        stars.map(stars =>
          star.rating <= stars - 1 ? (
            <img
              className="stars__star"
              src={starWhite}
              alt=""
              key={`${index}-${stars}`}
            />
          ) : (
            <img
              className="stars__star"
              src={starRed}
              alt=""
              key={`${index}-${stars}`}
            />
          )
        )
      )}
    </div>
  )
}

export default Rating
