import React, { useEffect, useState } from 'react'
import axios from 'axios'

const Cast = props => {
  const [cast, setCast] = useState([])

  const fetchData = async () => {
    const baseUrl = 'https://api.themoviedb.org'
    const api_key = '785c5d04247a97014c1e2374403ebdc2'

    const tvid = props.show.id
    const response = await axios.get(
      `${baseUrl}/3/tv/${tvid}/credits?api_key=${api_key}&language=en-US`
    )
    setCast(response.data.cast)
  }

  useEffect(() => {
    if (props.show) fetchData()
  }, [])

  return (
    <div className="character-row">
      {cast.map(member => {
        return (
          <div className="charinfo">
            <li>{member.character}</li>
            <div className="images">
              <img
                className="profile-pic"
                src={`${'https://image.tmdb.org/t/p/w500'}${
                  member.profile_path
                }`}
                alt={cast.name}
              />
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default Cast
