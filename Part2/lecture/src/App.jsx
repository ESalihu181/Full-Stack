const Note = ({ note }) => {
  return(
    <li>{note.content}</li>
  )
}

const App = ({ notes }) => {
  return (
    <div>
      <h1>Notes</h1>
      <ul>
        {notes.map(note => 
          <Note key={note}/>
        )}
      </ul>
    </div>
  )
}

export default App