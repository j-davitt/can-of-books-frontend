import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import './Button.css'
import { Container, Form, Button } from 'react-bootstrap';
import Modal from 'react-bootstrap/Modal';

class BookCarousel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showUpdateForm: false
    }
  }

  handleSubmit = (event) => {
    event.preventDefault();

    let bookToUpdate = {
      title: event.target.title.value,
      description: event.target.description.value,
      status: event.target.status.checked,
      _id: this.props._id,
      __v: this.props.__v
    }
    this.props.updateBooks(bookToUpdate);
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
        
        <Modal show={this.state.showUpdateForm} onHide={() => { this.setState({ showUpdateForm: false }) }}>
          <Modal.Header closeButton>
            <Modal.Title>Fill out all info</Modal.Title>
          </Modal.Header>
          <Modal.Body>

            <Container className="mt-5">
              <Form onSubmit={this.handleSubmit}>
                <Form.Group controlId="title" >
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
                <Button type="submit">Update Book</Button>
              </Form>
            </Container>

          </Modal.Body>

        </Modal>
      </>

    )
  }
}


export default BookCarousel;