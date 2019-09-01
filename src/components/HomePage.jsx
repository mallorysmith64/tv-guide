import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Route, Switch } from 'react-router-dom'
import Show from './Show'

const HomePage = () => {
  const [topShows, setTopShows] = useState([])
  const imgSize = 'w200'
  // const [randomIndex, setRandomIndex] = useState(0)
  // const imageUrl = 'https://image.tmdb.org/t/p/'
  const [randomShow, setRandomShow] = useState({})

  const getTopShows = async () => {
    const resp = await axios.get(
      `https://api.themoviedb.org/3/tv/top_rated?api_key=c2cccc08a093d5b7cfe606b5745c1af5&language=en-US&page=1`
    )
    console.log('got all top movies', resp.data)
    console.log('targeting one show', resp.data.results[0])
    setTopShows(resp.data.results)
    getRandomPicture(resp.data.results)
  }

  const getRandomPicture = photos => {
    let randomIdx = Math.floor(Math.random() * photos.length)
    console.log(randomIdx)
    let randShow = photos[randomIdx]
    console.log('random show:', randShow.original_name)
    setRandomShow(randShow)
  }

  useEffect(() => {
    getTopShows()
  }, [])

  return (
    <>
      <h2>TV Show of The Day</h2>
      <Show className="random-photo" show={randomShow} imgSize={imgSize} />
      <h2>Top Rated TV Shows</h2>
      <Switch>
        <Route exact path="/">
          {topShows.map((show, i) => {
            return <Show show={show} imgSize={imgSize} key={i} />
          })}
        </Route>
        <Route path="/a">
          <Show show={topShows[0]} imgSize={imgSize} />
        </Route>
      </Switch>
    </>
  )
}

export default HomePage
