import {DisplayAuthors, addBookMutation} from '../queries/queries';
import {useState} from 'react';

function AddBook() {
    const [name, setName] = useState("");
    const [genre, setGenre] = useState("");
    const [authorId, setAuthorId] = useState("");

    const submitForm = (e) => {
        e.preventDefault();
        
    }

    return (
        <form id="add-book" onSubmit={submitForm}>
            <div className="field">
                <label>Book name:</label>
                <input type="text" onChange={(e)=> {setName(e.target.value)}} />
            </div>
            <div className="field">
                <label>Genre:</label>
                <input type="text" onChange={(e)=> {setGenre(e.target.value)}} />
            </div>
            <div className="field">
                <label>Author:</label>
                <select onChange={(e)=> {setAuthorId(e.target.value)}} required>
                    <option value="">Select Author</option>
                    {DisplayAuthors()}
                </select>
            </div>
            <button>+</button>

        </form>
    );
  }
  
  export default AddBook;