import React from 'react'
function Banner({ bannerImage, bannerText }) {
  return (
    <div
      className="banner"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url(${bannerImage})`
      }}
    >
      <div className="banner__details">
        <div className="banner__details__text">
          <p>{bannerText}</p>
        </div>
      </div>
    </div>
  )
}

export default Banner
