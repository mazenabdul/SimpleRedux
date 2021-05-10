import { combineReducers } from 'redux'

const songsReducer = () => {
  return [
  {
    title: 'No Scrubs',
    duration: '4:05'
  },
  {
    title: 'Thriller',
    duration: '3:27'
  },
  {
    title: 'Jingle Bells',
    duration: '2:01'
  },
]
}

const selectedSongReducer = (selectedSong = null, action) => {
  if(action.type === 'SELECT_SONG'){
    return action.payload
  }
  return selectedSong
}

export default combineReducers({

  songs: songsReducer,
  selectedSong: selectedSongReducer

})