import React, { useEffect, useState } from 'react'
import axios from 'axios'

const Cast = () => {
  const [cast, setCast] = useState([])

  const fetchData = async () => {
    const response = await axios.get(
      `https://api.themoviedb.org/3/tv/1/credits?api_key=785c5d04247a97014c1e2374403ebdc2&language=en-US`
    )
    console.log(response.data.cast)
    setCast(response.data.cast)
    console.log({ cast })
  }

  useEffect(() => {
    fetchData()
    console.log({ cast })
  }, [])

  return (
    <div>
      <ul>
        {cast.map(member => {
          return <li>{member.character + ' '}</li>
        })}
      </ul>
    </div>
  )
}

export default Cast
