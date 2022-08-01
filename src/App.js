import { useEffect, useState } from 'react';
import './App.css';
import Notes from './Notes/Notes';

function App() {
  const [notes, setNotes] = useState([])
  const [newNote, setNewNote] = useState()
  
  const getNotes = async () => {
    let response = await fetch('http://localhost:7777/notes') 
    return await response.json()
  }
  const postNotes = async (id, text) => {
    await fetch('http://localhost:7777/notes', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json;charset=utf-8'
      },
      body: JSON.stringify({
        id: id,
        text: text
      })
    })
    return await setNotes(await getNotes())

  }
  const deleteNotes = async (id) => {
    await fetch('http://localhost:7777/notes/' + id, {
      method: 'DELETE'
    })
    return await setNotes(await getNotes())
  }

  useEffect(() => {
    async function fetchData() {
      let response = await getNotes()
      await setNotes(response)
      await console.log(notes)
    }
    fetchData()
  }, [])

  return (
    <div className="App">
      <Notes notes={notes} deleteNotes={deleteNotes} postNotes={postNotes}
      newNote={newNote} setNewNote={setNewNote} />
    </div>
  );
}

export default App;
