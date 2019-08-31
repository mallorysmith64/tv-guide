import React, { useState, useEffect } from 'react'
import axios from 'axios'

const HomePage = () => {
  const [topMovies, setTopMovies] = useState([]) //array in console

  //async cannot go on components
  const getTopMovies = async () => {
    // const fetchData = async () => {
    const resp = await axios.get(
      `https://api.themoviedb.org/3/tv/top_rated?api_key=c2cccc08a093d5b7cfe606b5745c1af5&language=en-US&page=1`
    )
    console.log('got all top movies', resp.data)
    console.log('targeting one movie', resp.data.results[0])
    console.log('targeting one movie title:', resp.data.results[0].name)
    setTopMovies(resp.data.results)
  }

  useEffect(() => {
    getTopMovies()
  }, [])

  return (
    <>
      {topMovies.map((movie, i) => {
        return (
          <section key={i}>
            <h3>{movie.original_name}</h3>
          </section>
        )
      })}
    </>
  )
}

export default HomePage
