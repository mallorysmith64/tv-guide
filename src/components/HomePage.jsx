import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Route, Switch } from 'react-router-dom'
import Show from './Show'

const HomePage = () => {
  const [topShows, setTopShows] = useState([])
  const imgSize = 'w200'
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
    let randomShow = photos[randomIdx]
    console.log('random show:', randomShow.original_name)
    setRandomShow(randomShow)
  }

  useEffect(() => {
    getTopShows()
    setInterval(getTopShows, 5000)
  }, [])

  return (
    <>
      <h1 className="page-title"> TV Shows You Should Be Watching</h1>
      <section className="random-show-container">
        <Show show={randomShow} imgSize={imgSize} />
      </section>
      <section className="top-show-header">
        <h2>Top Rated TV Shows</h2>
      </section>
      <Switch>
        <Route exact path="/">
          <section className="all-shows">
            {topShows.map((show, i) => {
              return <Show show={show} imgSize={imgSize} key={i} />
            })}
          </section>
        </Route>
        <Route path="/a">
          <Show show={topShows[0]} imgSize={imgSize} />
        </Route>
      </Switch>
      <footer>Updated 2019</footer>
    </>
  )
}
export default HomePage
