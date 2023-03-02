import React from 'react'
import { useState } from 'react'
import { useParams, Navigate } from 'react-router-dom'
import Apartments from '../../data/logements.json'
import arrowRight from '../../assets/slideshow-arrow-right.png'
import arrowLeft from '../../assets/slideshow-arrow-left.png'

function Carousel() {
  const urlParams = useParams()
  const [currentPic, setCurrentPic] = useState(0)
  const apartmentData = Apartments.filter((data) => data.id === urlParams.id)
  const arrayLength = apartmentData.map((data) => data.pictures.length)

  if (apartmentData === []) {
    return <Navigate to="*" />
  }

  function nextPic() {
    setCurrentPic(currentPic === arrayLength - 1 ? 0 : currentPic + 1)
  }

  function previousPic() {
    setCurrentPic(currentPic === 0 ? arrayLength - 1 : currentPic - 1)
  }

  return (
    <>
      {apartmentData &&
        apartmentData.map((lease, id) => (
          <div className="display" key={lease.id}>
            <div className="pics">
              {lease.pictures.map((picture, index) => (
                <div
                  className={index === currentPic ? 'pic active' : 'pic'}
                  key={index}
                >
                  {index === currentPic && (
                    <img
                      className="displayPic"
                      key={id}
                      src={picture}
                      alt={lease.title}
                    />
                  )}
                </div>
              ))}
            </div>
            <img
              className={arrayLength > 1 ? 'arrowLeft' : 'hide'}
              src={arrowLeft}
              alt="Left arrow"
              key={`${id}-arrowLeft`}
              onClick={previousPic}
            />

            <img
              className={arrayLength > 1 ? 'arrowRight' : 'hide'}
              src={arrowRight}
              alt="Right arrow"
              key={`${id}-arrowRight`}
              onClick={nextPic}
            />

            <div className={arrayLength <= 1 ? 'hide' : 'page'}>
              {currentPic + 1}/{arrayLength}
            </div>
          </div>
        ))}
    </>
  )
}

export default Carousel
