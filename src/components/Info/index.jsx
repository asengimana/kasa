import React from 'react'
import Collapse from '../Collapse'
import Host from '../Host'
import Rating from '../Rating'
import Tag from '../Tag'

function Info({
  title,
  description,
  host,
  rating,
  location,
  equipments,
  tags,
}) {
  return (
    <div className="infos">
      <div className="infos__info">
        <div className="infos-left">
          <h1>{title}</h1>
          <p>{location}</p>
          <Tag tags={tags} />
        </div>
        <div className="infos-right">
          <div className="infos__info__host">
            <Host host={host} />
          </div>
          <div>
            <Rating rating={rating} />
          </div>
        </div>
      </div>
      <div className="infos__description">
        <div className="infos__description__description">
          <Collapse
            title={'Description'}
            content={description}
            className="infos-collapse"
          />
        </div>
        <div className="infos__description__equipments">
          <Collapse
            title={'Equipements'}
            content={equipments.map((equipment) => (
              <li key={equipment}>{equipment}</li>
            ))}
            className="infos-collapse"
          />
        </div>
      </div>
    </div>
  )
}

export default Info
