import React from 'react'
import { connect } from 'react-redux'

const SongDetail = ({ currentSong = 'None selected yet' }) => {
  if(!currentSong){
    return <div>Select a song!</div>
  }
  return (
    <div>
      <h3>Details for:</h3>
      <p>
        Title: {currentSong.title}
        <br />
        Duration: {currentSong.duration}
      </p>
      
    </div>
  )
}

const mapStateToProps = ({ selectedSong }) => {
  return { currentSong: selectedSong }
}

export default connect(mapStateToProps)(SongDetail)