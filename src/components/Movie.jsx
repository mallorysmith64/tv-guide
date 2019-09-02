import React from 'react'
import { Link } from 'react-router-dom'
import Cast from '../components/Cast'

const Show = props => {
  const { show, imgSize } = props
  const imageUrl = 'https://image.tmdb.org/t/p/'

  if (!show) return <></>
  return (
    <section className="show-containers">
      <h3>
        Title: <Link to={`/show/${show.id}`}>{show.name}</Link>
      </h3>
      <h4>First Aired: {show.first_air_date}</h4>
      <img src={`${imageUrl}${imgSize}${show.poster_path}`} alt={show.id} />
      <h4>Description: {show.overview}</h4>
      {props.showCast ? <Cast show={show} /> : <></>}
    </section>
  )
}

export default Show
