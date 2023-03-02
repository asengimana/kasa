import React from 'react'
function Host({ host }) {
  return (
    <div className="host">
      <div className="host__name">
        <p>{host.name}</p>
      </div>

      <img src={host.picture} alt={host.name} />
    </div>
  )
}

export default Host
