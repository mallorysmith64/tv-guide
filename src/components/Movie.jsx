import React from 'react'

const Movie = props => {
  const { movie, imgSize } = props
  const imageUrl = 'https://image.tmdb.org/t/p/'
  if (!movie) return <></>
  return (
    <section className="movie-titles">
      <h3>Title: {movie.original_name}</h3>
      <h4>First Aired: {movie.first_air_date}</h4>
      <img src={`${imageUrl}${imgSize}${movie.poster_path}`} alt={movie.id} />
      <h4>Description: {movie.overview}</h4>
    </section>
  )
}

export default Movie
