import React, { useState, useEffect } from 'react'
import axios from 'axios'

const HomePage = () => {
  const [topMovies, setTopMovies] = useState([])
  const imgSize = 'w200'
  const imageUrl = 'https://image.tmdb.org/t/p/'
  const [randomMovie, setRandomMovie] = useState({})

  const getTopMovies = async () => {
    const resp = await axios.get(
      `https://api.themoviedb.org/3/tv/top_rated?api_key=c2cccc08a093d5b7cfe606b5745c1af5&language=en-US&page=1`
    )
    console.log('got all top movies', resp.data)
    console.log('targeting one movie', resp.data.results[0])
    setTopMovies(resp.data.results)
    getRandomPicture(resp.data.results)
  }

  const getRandomPicture = photos => {
    console.log(photos)
    let randomIdx = Math.floor(Math.random() * photos.length)
    console.log(randomIdx)
    let randMovie = photos[randomIdx]
    console.log(randMovie)
    setRandomMovie(randMovie)
    // return randomPhotos
  }

  useEffect(() => {
    getTopMovies()
    // setInterval(getRandomPicture, 2000)
    // getRandomPicture()
  }, [])

  return (
    <>
      <h1>Top Rated Movies</h1>
      {topMovies.map((movie, i) => {
        return (
          <section className="movie-titles" key={i}>
            <h3>Title: {movie.original_name}</h3>
            <h4>First Aired: {movie.first_air_date}</h4>
            <img
              src={`${imageUrl}${imgSize}${movie.poster_path}`}
              alt={movie.id}
            />
            <h4>Description: {movie.overview}</h4>
          </section>
        )
      })}
    </>
  )
}

export default HomePage
