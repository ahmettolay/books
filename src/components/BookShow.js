import { useState, useContext } from 'react'
import BookEdit from './BookEdit'
import BookContext from '../context/books'

const BookShow = ({ book }) => {
  const { deleteBookById } = useContext(BookContext)
  const [showEdit, setShowEdit] = useState(false)
  console.log(book);

  const handleDeleteClick = () => {
    deleteBookById(book.id)
  }

  const handleEditClick = () => {
    setShowEdit((p) => !p)
  }

  const handleSubmit = () => {
    setShowEdit(false)
  }

  let content = <h3>{book.title}</h3>
  if (showEdit) {
    content = <BookEdit onSubmit={handleSubmit} book={book} />
  }
  return (
    <div className='book-show'>
      {content}
      <img src={`https://picsum.photos/seed/${book.id}/300/200`} alt='books' />
      <div className='actions'>
        <button className='edit' onClick={handleEditClick}>
          Edit
        </button>
        <button className='delete' onClick={handleDeleteClick}>
          Delete
        </button>
      </div>
    </div>
  )
}
export default BookShow
