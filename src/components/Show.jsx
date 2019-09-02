import React from 'react'
import { Link } from 'react-router-dom'
import Cast from '../components/Cast'

const Show = props => {
  const { movie, imgSize } = props
  const imageUrl = 'https://image.tmdb.org/t/p/'

  if (!movie) return <></>
  return (
    <section className="show-containers">
      <h3>
        Title: <Link to={`/movie/${movie.id}`}>{movie.name}</Link>
      </h3>
      <h4>First Aired: {movie.first_air_date}</h4>
      <img src={`${imageUrl}${imgSize}${movie.poster_path}`} alt={movie.id} />
      <h4>Description: {movie.overview}</h4>
      {props.showCast ? <Cast movie={movie} /> : <></>}
    </section>
  )
}

export default Show
