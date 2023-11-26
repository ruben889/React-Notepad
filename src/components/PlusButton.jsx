import { useState } from "react";



export function PlusButton({notelist, setNotes})
{

    const [createNote,setCreateNote] = useState(false);


    function handleClick()
    {
        setCreateNote(true);
    }

    function stopCreating(e)
    {
        e.stopPropagation();
        setCreateNote(false);
    }
    return(
     <div className = "text-center">
     <button
     onClick={handleClick} 
     className ="bg-gray-500 hover:bg-gray-600 text-white font-bold py-2 px-4 border-4 border-gray-600 rounded mx-auto block"> + </button>
     {createNote && <CreateNoteSelect closeSelect = {stopCreating} notelist={notelist} setNotes={setNotes}/>}
     </div>
     
    );
}

function  CreateNoteSelect({closeSelect, notelist, setNotes})
{
   const [title, setTitle] = useState("");
   const [text, setText] = useState("");
   

   function addNote(e)
   {
       var d = new Date();
       const newNote = {noteID: crypto.randomUUID(),
                        Title: title,
                        Text: text,
                        Date: d.toLocaleDateString()}
       setNotes([...notelist, newNote]);
       setTitle("");
       setText("");
   }

    function handleTitleChange(e)
    {
        setTitle(e.target.value);
    }

    function handleTextChange(e)
    {
        setText(e.target.value);
    }
    return(
        <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center">
        <div className="bg-white rounded-md shadow-lg p-4">
        <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-bold"> New Note</h2>
              <button onClick={closeSelect}> X</button>
            </div>
            <label htmlFor="title" className="text-gray-700 font-medium"> Note Title: </label>
            <input 
            id = "title"
            type = "text"
            value = {title}
            onChange = {handleTitleChange} 
            />
            
            <label htmlFor="text" className=" p-2 rounded-md focus:outline-none focus:border-black-500"> Note Text: </label>
            <textarea
            id = "text"
            value = {text}
            onChange = {handleTextChange}
            />

            <button onClick={addNote}className="bg-gray-200 border border-gray-400 rounded-lg px-4 py-2 text-gray-800 hover:bg-gray-100 hover:border-gray-300 focus:outline-none focus:shadow-outline-gray"> Submit </button>

        </div>
        </div>
    )

    
}


