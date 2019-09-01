import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { BrowserRouter, Route, Link, Switch } from 'react-router-dom'
import Movie from './Movie'

const HomePage = () => {
  const [topMovies, setTopMovies] = useState([])
  const imgSize = 'w200'
  // const [randomIndex, setRandomIndex] = useState(0)
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
      {/* <h1>Random Movie</h1>
      <section className="random-photo"> */}
      {/* <h1>{topMovies[randomIndex].original_name}</h1> */}
      {/* <img
          src={`${imageUrl}${imgSize}${topMovies[randomIndex].poster_path}`}
          alt={topMovies[randomIndex].id}
        /> */}
      {/* </section> */}
      <h1>Top Rated Movies</h1>
      <Switch>
        <Route exact path="/">
          <h2>Top Rated Movies</h2>
          {topMovies.map((movie, i) => {
            return <Movie movie={movie} imgSize={imgSize} key={i} />
          })}
        </Route>
        <Route path="/a">
          {console.log('topMovies', topMovies)}
          <Movie movie={topMovies[0]} imgSize={imgSize} />
        </Route>
      </Switch>
    </>
  )
}

export default HomePage
