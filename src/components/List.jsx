import { useState } from "react";
import { useCallback, useEffect } from "react";


export function List({notelist})
{
 // notelist.map()
 // how can i
 const [notesListed,setNotesListed] = useState(notelist)

 function handleDelete(ID){
    console.log("clicked")
    setNotesListed( notesListed.filter( notes => notes.noteID !== ID))
 }

 const notes = notesListed.map(note =>
    <Note key = {note.noteID} ID = {note.noteID} Title = {note.Title} Text = {note.Text} Date = {note.Date} handleDelete ={handleDelete}/>
    );

    return (
        <div className ="overflow-y-scroll max-h-96">
        {notes}
        </div>
    )
}

function Note({ID, Title, Text, Date, handleDelete})
{
 const [isHighlighted, setHighlight] = useState(false)
 var notHighlighted = "border border-black-300"
 var Highlighted = "border border-black-300 shadow-md hover:shadow-lg bg-blue-100"
 const [noteSelect, setNoteSelect] = useState(false)

 // edit title function
 // edit text function
 // delete function 

 function delNote()
 {
    handleDelete(ID)
 }
 


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
        {noteSelect &&  <NoteSelect ID = {ID} Title = {Title} Text = {Text} noteClose = {noteClose} handleDelete = {delNote}/>}
    </div>
)

function NoteSelect({ID, Title, Text, noteClose, handleDelete})
{
    // noteselect edit function? noteselect delete note...
    // to delete 
    const [isEditing, setEdit] = useState(false)
    

    function handleEdit(e)
    {
        setEdit(true)
    }

    function saveEdit(e)
    {
        setEdit(false)
    }
    
    

    return (
        <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center">
          <div className="bg-white rounded-md shadow-lg p-4">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-bold">{Title}</h2>
              <button onClick={noteClose}> X</button>
            </div>
            <p>{Text}</p>
            {isEditing ?<button onClick={saveEdit} className="bg-gray-200 border border-gray-400 rounded-lg px-4 py-2 text-gray-800 hover:bg-gray-100 hover:border-gray-300 focus:outline-none focus:shadow-outline-gray"> Save </button>
             : <button onClick={handleEdit} className="bg-gray-200 border border-gray-400 rounded-lg px-4 py-2 text-gray-800 hover:bg-gray-100 hover:border-gray-300 focus:outline-none focus:shadow-outline-gray"> Edit </button> }
              <br></br>
             <button onClick = {handleDelete} className="bg-gray-200 border border-gray-400 rounded-lg px-4 py-2 text-gray-800 hover:bg-gray-100 hover:border-gray-300 focus:outline-none focus:shadow-outline-gray"> Delete </button>
          </div>
        </div>
      );

}


}
