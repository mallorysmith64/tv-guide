import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Route, Link, Switch, withRouter } from 'react-router-dom'
import Show from './Show'

const HomePage = props => {
  const [topShows, setTopShows] = useState([])
  const imgSize = 'w200'
  // const [randomIndex, setRandomIndex] = useState(0)
  const [randomShow, setRandomShow] = useState({})

  const getTopShows = async () => {
    const resp = await axios.get(
      `https://api.themoviedb.org/3/tv/top_rated?api_key=c2cccc08a093d5b7cfe606b5745c1af5&language=en-US&page=1`
    )
    console.log('got all top movies', resp.data)
    setTopShows(resp.data.results)
    getRandomPicture(resp.data.results)
  }

  const getRandomPicture = photos => {
    console.log(photos)
    let randomIdx = Math.floor(Math.random() * photos.length)
    console.log(randomIdx)
    let randShow = photos[randomIdx]
    console.log(randShow)
    setRandomShow(randShow)
    // return randomPhotos
  }

  useEffect(() => {
    getTopShows()
    // setInterval(getRandomPicture, 2000)
    // getRandomPicture()
  }, [])

  return (
    <>
      {/* <h1>Random Show</h1>
      <section className="random-photo"> */}
      {/* <h1>{topShows[randomIndex].original_name}</h1> */}
      {/* <img
          src={`${imageUrl}${imgSize}${topShows[randomIndex].poster_path}`}
          alt={topShows[randomIndex].id}
        /> */}
      {/* </section> */}
      <h1>
        <Link to="/">Top Rated Shows</Link>
      </h1>
      <Switch>
        <Route exact path="/">
          <h2>Top Rated Shows</h2>
          {console.log('topShows', topShows)}
          {topShows.map((movie, i) => {
            return (
              <Show showCast={false} movie={movie} imgSize={imgSize} key={i} />
            )
          })}
        </Route>
        <Route
          path="/movie/:id"
          render={props => {
            console.log('props', props)
            let {
              match: {
                params: { id }
              }
            } = props
            id = parseInt(id)
            const movies = topShows.filter(m => {
              return m.id === id
            })
            console.log('topShows', topShows)
            console.log('movies', movies)

            if (!movies.length)
              return <div>Show id {props.match.params.id} not found</div>

            return movies.map(m => {
              return (
                <Show showCast={true} movie={m} key={m.id} imgSize={imgSize} />
              )
            })
          }}
        />
      </Switch>
    </>
  )
}

export default withRouter(HomePage)
