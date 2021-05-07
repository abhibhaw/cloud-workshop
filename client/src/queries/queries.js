import { useQuery, gql } from "@apollo/client";

const getBookQuery = gql`
  {
    books {
      name
      id
    }
  }
`;

function DisplayBooks() {
  const { loading, error, data } = useQuery(getBookQuery);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;
  return data.books.map((book) => {
    return <li key={book.id}>{book.name}</li>;
  });
}

const getAuthorsQuery = gql`
  {
    authors {
      name
      id
    }
  }
`;

function DisplayAuthors() {
  const { loading, error, data } = useQuery(getAuthorsQuery);
  if (loading) return <option disabled>Loading...</option>;
  if (error) return <option disabled>Error :(</option>;
  return data.authors.map((author) => {
    return (
      <option key={author.id} value={author.id}>
        {author.name}
      </option>
    );
  });
}

const addBookMutation = gql`
  mutation {
    addBook(name: "", genre: "", authorId: "") {
      name
      id
    }
  }
`;

export { DisplayBooks, DisplayAuthors, addBookMutation };
