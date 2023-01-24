import React from 'react';
import Carousel from 'react-bootstrap/Carousel';

class BookCarousel extends React.Component {
  render() {
    return (
      <>
        <img
          className="d-block w-100"
          src="../assets/book.jpg"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>{this.props.title}</h3>
          <p>{this.props.description}</p>
          <p>{this.props.status}</p>
        </Carousel.Caption>
      </>

    )
  }
}


export default BookCarousel;