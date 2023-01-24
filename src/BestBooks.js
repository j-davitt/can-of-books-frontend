import React from 'react';
import axios from 'axios';
import Carousel from 'react-bootstrap/Carousel';
import BookCarousel from './BookCorousel';

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

  // REACT LIFECYCLE METHOD
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
                <Carousel.Item>
                  <BookCarousel 
                    title={book.title}
                    description={book.description}
                    status={book.status}
                  />
                </Carousel.Item>
              )
            })}
          </Carousel>
        ) : (
          <h3>No Books Found :(</h3>
        )}
      </>
    )
  }
}

export default BestBooks;
