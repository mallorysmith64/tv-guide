import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Route, Link, Switch} from 'react-router-dom'
import Show from './Show'

const HomePage = props => {
  const [topShows, setTopShows] = useState([])
  const imgSize = 'w200'
  const [randomShow, setRandomShow] = useState({})

  const getTopShows = async () => {
    const resp = await axios.get(
      `https://api.themoviedb.org/3/tv/top_rated?api_key=c2cccc08a093d5b7cfe606b5745c1af5&language=en-US&page=1`
    )
    console.log('got all top shows', resp.data)
    setTopShows(resp.data.results)
    getRandomPicture(resp.data.results)
  }

  const getRandomPicture = photos => {
    let randomIdx = Math.floor(Math.random() * photos.length)
    console.log(randomIdx)
    let randShow = photos[randomIdx]
    console.log(randShow)
    setRandomShow(randShow)
    // return randomPhotos
  }

  useEffect(() => {
    getTopShows()
    setInterval(getTopShows, 5000)
  }, [])

  return (
    <>
      <h1 className="page-title">
        <Link to="/">TV Shows You Should Be Watching</Link>{' '}
      </h1>

      <Switch>
        <Route exact path="/">
          <section className="top-show-header">
            <h2>Top Rated TV Shows</h2>
          </section>
          <section className="random-show-container">
            <Show show={randomShow} imgSize={imgSize} />
          </section>
          <section className="all-shows">
            {topShows.map((show, i) => {
              return (
                <Show showCast={false} show={show} imgSize={imgSize} key={i} />
              )
            })}
          </section>
        </Route>
        <Route
          path="/show/:id"
          render={props => {
            console.log('props', props)
            let {
              match: {
                params: { id }
              }
            } = props
            id = parseInt(id)
            const shows = topShows.filter(m => {
              return m.id === id
            })
            console.log('topShows', topShows)
            console.log('shows', shows)

            if (!shows.length)
              return <div>Show id {props.match.params.id} not found</div>

            return shows.map(m => {
              return (
                <Show showCast={true} show={m} key={m.id} imgSize={imgSize} />
              )
            })
          }}
        />
      </Switch>
      <footer>Updated 2019</footer>
    </>
  )
}

export default HomePage
