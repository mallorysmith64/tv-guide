import React, { useState, useEffect } from 'react'
import axios from 'axios'

const HomePage = () => {
  const [topMovies, setTopMovies] = useState([])

  //async cannot go on components
  const getTopMovies = async () => {
    // const fetchData = async () => {
    const resp = await axios.get(
      `https://api.themoviedb.org/3/tv/top_rated?api_key=c2cccc08a093d5b7cfe606b5745c1af5&language=en-US&page=1`
    )
    console.log(resp.data)
    // console.log('list of all top rated TV shows', resp.data.results)
    // setTopMovies(resp.data)
  }

  useEffect(() => {
    getTopMovies()
  }, [])

  return (
    <>
      {topMovies.map((movie, i) => {
        return <h3 key={i}>{movie.movie}</h3>
      })}
    </>
  )
}

export default HomePage
