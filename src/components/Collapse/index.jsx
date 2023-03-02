import React from 'react'
import { useState } from 'react'
import PropTypes from 'prop-types'
import arrowUp from '../../assets/collapse-arrow-up.png'
import arrowDown from '../../assets/collapse-arrow-down.png'

function Collapse({ title, content, className }) {
  const [open, setOpen] = useState(false)
  return open ? (
    <div className={className}>
      <div
        className="about-us__collapse__details"
        onClick={() => setOpen(false)}
      >
        <h3 onClick={() => setOpen(false)}>{title}</h3>
        <img src={arrowUp} alt="" onClick={() => setOpen(false)} />
      </div>
      <div className="about-us__collapse__text">
        <p>{content}</p>
      </div>
    </div>
  ) : (
    <div className={className}>
      <div
        className="about-us__collapse__details"
        onClick={() => setOpen(true)}
      >
        <h3>{title}</h3>
        <img src={arrowDown} alt="" onClick={() => setOpen(true)} />
      </div>
    </div>
  )
}

Collapse.propTypes = {
  title: PropTypes.string,
  content: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
  className: PropTypes.string,
}

export default Collapse
