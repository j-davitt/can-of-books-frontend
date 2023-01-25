import React from 'react';
import axios from 'axios';
import Carousel from 'react-bootstrap/Carousel';
import BookCarousel from './BookCorousel';
import { Container, Form, Button } from 'react-bootstrap';
import BookFormModal from './BookFormModal';

class BestBooks extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      books: []
    }
  }


  getBooks = async () => {
    try {
      let url = `${process.env.REACT_APP_SERVER}/books`

      let bookData = await axios.get(url);

      this.setState({
        books: bookData.data,
      })

    } catch (error) {
      console.log(error.response);
    }
  }



  deleteBooks = async (id) => {
    try {
      let url = `${process.env.REACT_APP_SERVER}/books/${id}`
      await axios.delete(url);
      let updatedBooks = this.state.books.filter(book => book._id !== id);
      this.setState({
        books: updatedBooks
      });

    } catch (error) {
      console.log(error.message);

    }

  }

  handleBookSubmit = (e) => {
    e.preventDefault();

    let newBook = {
      title: e.target.title.value,
      description: e.target.description.value,
      status: e.target.status.checked
    }
    console.log('new Book from form>>>', newBook);
    this.postBooks(newBook);
  }

  postBooks = async (bookObj) => {
    try {
      let url = `${process.env.REACT_APP_SERVER}/books`
      let createdBook = await axios.post(url, bookObj);
      this.setState({
        books: [...this.state.books, createdBook.data]
      })

    } catch (error) {
      console.log(error.message);

    }
  }

  updateBooks = async (bookToUpdate) => {
    try {
      let url = `${process.env.REACT_APP_SERVER}/books/${bookToUpdate._id}`

      let updatedBook = await axios.put(url, bookToUpdate);

      let updatedBookArr = this.state.books.map(existingBook => {
        return existingBook._id === bookToUpdate._id
        ? updatedBook.data
        : existingBook
      });
      
      this.setState({
        books: updatedBookArr
      })

    } catch (error) {
      console.log(error.message)
    }
  }

  componentDidMount() {
    this.getBooks();
  }

  render() {

    /* TODO: render all the books in a Carousel */

    return (
      <>
        <h2>My Essential Lifelong Learning &amp; Formation Shelf</h2>

        {this.state.books.length ? (
          <Carousel>
            {this.state.books.map((book, idx) => {
              return (
                <Carousel.Item key={idx}>
                  <BookCarousel
                    title={book.title}
                    description={book.description}
                    status={book.status}
                    deleteBooks={this.deleteBooks}
                    _id={book._id}
                    updateBooks={this.updateBooks}
                  />
                </Carousel.Item>
              )
            })}
          </Carousel>
        ) : (
          <h3>No Books Found :(</h3>
        )}

          <BookFormModal 
          handleBookSubmit={this.handleBookSubmit}
          />

        {/* <Container className="mt-5">
          <Form onSubmit={this.handleBookSubmit}>
            <Form.Group controlId="title">
              <Form.Label>Title</Form.Label>
              <Form.Control type="text" />
            </Form.Group>
            <Form.Group controlId="description">
              <Form.Label>Description</Form.Label>
              <Form.Control type="text" />
            </Form.Group>
            <Form.Group controlId="status">
              <Form.Check type="checkbox" label="available" />
            </Form.Group>
            <Button type="submit">Add Book</Button>
          </Form>
        </Container> */}

      </>
    )
  }
}

export default BestBooks;
