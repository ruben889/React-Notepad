import { useState } from 'react'
import './App.css'
import {Title} from './components/Title.jsx' 
import {List} from './components/List.jsx'
import {notes} from './assets/notes.js'
import bgVideo from './assets/star_burst.mp4'

function App() {

  return (
 
    <div className ='app-container'>
      <video className='bgV' src={bgVideo} autoPlay loop muted >
      </video>
      <div className='content'>
      <Title />
      <List notelist={notes}/>
      </div>
    </div>
  )
}

export default App
