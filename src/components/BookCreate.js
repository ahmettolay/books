import { useState, useContext } from 'react'
import BookContext from '../context/books'

const BookCreate = () => {
  const { createBook } = useContext(BookContext)
  const [title, setTitle] = useState('')
  const handleChange = (event) => {
    setTitle(event.target.value)
  }
  const handleSubmit = (event) => {
    event.preventDefault()
    createBook(title)
    setTitle('')
  }
  return (
    <div className='book-create'>
      <h3>Kitap Ekle</h3>
      <form onSubmit={handleSubmit}>
        <label>Title</label>
        <input className='input' value={title} onChange={handleChange} />
        <button className='button'>Oluştur</button>
      </form>
    </div>
  )
}
export default BookCreate
