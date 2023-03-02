import React from 'react'
import { useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import Carousel from '../../components/Carousel'
import Info from '../../components/Info'
import Apartments from '../../data/logements.json'
function Apartment() {
  const { id } = useParams()
  const navigate = useNavigate()
  const apartments = Apartments.filter(function(apartment) {
    return apartment.id === id
  })

  useEffect(() => {
    if (apartments.length === 0) {
      navigate('*')
    }
  })
  return (
    <div className="apartment-to-lease">
      {apartments.map(
        ({
          id,
          title,
          pictures,
          description,
          host,
          rating,
          location,
          equipments,
          tags
        }) => (
          <div className="apartment-to-lease__apartment" key={id}>
            <Carousel pictures={pictures} />
            <Info
              id={id}
              title={title}
              description={description}
              host={host}
              rating={rating}
              location={location}
              equipments={equipments}
              tags={tags}
            />
          </div>
        )
      )}
    </div>
  )
}

export default Apartment
