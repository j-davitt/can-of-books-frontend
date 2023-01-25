import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import { Button } from 'react-bootstrap';
import './Button.css'
import UpdateBookForm from './UpdateBookForm';

class BookCarousel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showUpdateForm: false
    }
  }

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

        <Button variant="dark" id='deleteBtn' onClick={() => { this.props.deleteBooks(this.props._id) }}>Delete</Button>
        <Button variant="info" onClick={() => { this.setState({ showUpdateForm: true }) }}>Update</Button>
        {
          this.state.showUpdateForm &&
          <UpdateBookForm
            updateBooks={this.props.updateBooks}
            title={this.props.title}
            description={this.props.description}
            status={this.props.status}
          />
        }
      </>

    )
  }
}


export default BookCarousel;