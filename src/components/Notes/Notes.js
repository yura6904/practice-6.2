
function Notes(props) {

  return (
    <div className="Notes">
        <div className="notes-list">
            {props.notes.length > 0 ? props.notes.map((n,idx) => {
                return (
                    <div key={idx}>
                        <p>{n.text}</p>
                        <button onClick={() => {props.deleteNotes(n.id)}}>x</button>
                    </div>)
                }
            ) : null}
        </div>
        <div className="enter-note">
            <input onChange={evt => props.setNewNote(evt.target.value)}></input>
            <button onClick={() => {props.postNotes(props.notes.length, props.newNote)}}>добавить</button>
        </div>
    </div>
  );
}

export default Notes;
