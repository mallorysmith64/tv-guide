import React from 'react'

const Show = props => {
  const { show, imgSize } = props
  const imageUrl = 'https://image.tmdb.org/t/p/'
  if (!show) return <></>
  return (
    <section className="show-titles">
      <h3>Title: {show.original_name}</h3>
      <h4>First Aired: {show.first_air_date}</h4>
      <img src={`${imageUrl}${imgSize}${show.poster_path}`} alt={show.id} />
      <h4>Description: {show.overview}</h4>
    </section>
  )
}

export default Show
