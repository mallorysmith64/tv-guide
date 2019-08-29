import React, { useState, useEffect } from 'react'
import axios from 'axios'

//async cannot go on components

const HomePage = () => {
  const fetchData = async () => {
    const resp = await axios.get(
      `https://api.themoviedb.org/3/tv/top_rated?api_key=c2cccc08a093d5b7cfe606b5745c1af5&language=en-US&page=1`
    )
    console.log('setup api', resp.data)
  }

  useEffect(() => {
    fetchData()
  }, [])

  return (
    <>
      <h1>something here</h1>
    </>
  )
}

export default HomePage
