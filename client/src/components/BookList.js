import {DisplayBooks} from '../queries/queries';

function BookList() {
    

    return  (
      <div>
        <ul id="book-list">
            <li>
                {DisplayBooks()}
            </li>
        </ul>
      </div>
    );
  }
  
  export default BookList;
  