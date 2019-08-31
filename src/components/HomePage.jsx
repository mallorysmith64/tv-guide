import React, { useState, useEffect } from 'react'
import axios from 'axios'

const HomePage = () => {
const [topMovies, setTopMovies] = useState([])
const imgSize = 'w200'

//async cannot go on components
const getTopMovies = async () => {
const resp = await axios.get(
`https://api.themoviedb.org/3/tv/top_rated?api_key=c2cccc08a093d5b7cfe606b5745c1af5&language=en-US&page=1`
)
console.log('got all top movies', resp.data)
console.log('targeting one movie', resp.data.results[0])
// console.log('targeting one movie title:', resp.data.results[0].name)
setTopMovies(resp.data.results)
}

// const getRandomMovie = () => {
// let randomMovie = Math.floor(Math.random() * [0])
// }

useEffect(() => {
getTopMovies()
}, [])

return (
<>
  <h1>Top Rated Movies</h1>
  {topMovies.map((movie, i) => {
  return (
  <section className="movie-titles" key={i}>
    <h3>Title: {movie.original_name}</h3>
    <h4>First Aired: {movie.first_air_date}</h4>
    <img src={`https://image.tmdb.org/t/p/${imgSize}${movie.poster_path}`} alt="images of top rated movies" />
    <h4>Description: {movie.overview}</h4>
  </section>
  )
  })}
</>
)
}

export default HomePage