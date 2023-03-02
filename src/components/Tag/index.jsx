import React from 'react'
function Tag({ tags }) {
  return (
    <ul className="tagsList">
      {tags.map(tag => (
        <li className="tagsList__tag" key={tag}>
          {tag}
        </li>
      ))}
    </ul>
  )
}

export default Tag
