import { useState } from 'react'
import './App.css'
import {Title} from './components/Title.jsx' 
import {List} from './components/List.jsx'
import {notes} from './assets/notes.js'
import { PlusButton } from './components/PlusButton.jsx'

function App() {
  console.log(notes[0])

  return (
    <div>
      <Title />
      <List notelist={notes}/>
      <PlusButton/>
    </div>
  )
}

export default App
