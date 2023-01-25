import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import { Button } from 'react-bootstrap';
import './Button.css'

class BookCarousel extends React.Component {
  render() {
    return (
      <>
        <img
          className="d-block w-100"
          src="https://picsum.photos/100"
          alt={this.props.title}
        />
        <Carousel.Caption>
          <h3>{this.props.title}</h3>
          <p>{this.props.description}</p>
          <p>{this.props.status}</p>
        </Carousel.Caption>
        <Button id='deleteBtn' onClick={() => { this.props.deleteBooks(this.props._id) }}>Delete</Button>
      </>

    )
  }
}


export default BookCarousel;