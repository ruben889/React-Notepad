import { useState } from "react";
import { useCallback, useEffect } from "react";


export function List({notelist})
{
 // notelist.map()
 const notes = notelist.map(note =>
    <Note key = {note.noteID} Title = {note.Title} Text = {note.Text} Date = {note.Date}/>
    );

    return (
        <div className ="overflow-y-scroll max-h-96">
        {notes}
        </div>
    )
}

function Note({Title, Text, Date})
{
 const [isHighlighted, setHighlight] = useState(false)
 var notHighlighted = "border border-black-300"
 var Highlighted = "border border-black-300 shadow-md hover:shadow-lg bg-blue-100"
 const [noteSelect, setNoteSelect] = useState(false)

function noteClicked(e){
   setNoteSelect(true)
}

const noteClose = useCallback((e) =>
{
    e.stopPropagation()
    setNoteSelect(false)
}, [])



function noteHover(e){
 setHighlight(true)
}
function mouseLeave(e){
    setHighlight(false)
}

return(
    <div className = {isHighlighted ? Highlighted : notHighlighted}
    onClick = {noteClicked}
    onMouseEnter={noteHover}
    onMouseLeave={mouseLeave}>
        <h3> Title:  {Title} </h3>
        <p> {Text} </p>
        <p> Date: {Date} </p>
        {noteSelect &&  <NoteSelect Title = {Title} Text = {Text} noteClose = {noteClose}/>}
    </div>
)

function NoteSelect({Title, Text, noteClose})
{
    // noteselect edit function? noteselect delete note...
    // to delete 
    return (
        <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center">
          <div className="bg-white rounded-md shadow-lg p-4">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-bold">{Title}</h2>
              <button onClick={noteClose}> X</button>
            </div>
            <p>{Text}</p>
          </div>
        </div>
      );

}


}
