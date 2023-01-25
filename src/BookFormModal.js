import React from 'react';
import { Container, Form, Button } from 'react-bootstrap';
import Modal from 'react-bootstrap/Modal';


class BookFormModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modalShow: false
    }
  }


  render() {
    return (
      <>
        <Button variant="primary" onClick={() => { this.setState({ modalShow: true }) }}>
          Add a book!
        </Button>

        <Modal show={this.state.modalShow} onHide={() => { this.setState({ modalShow: false }) }}>
          <Modal.Header closeButton>
            <Modal.Title>Fill out all info</Modal.Title>
          </Modal.Header>
          <Modal.Body>

            <Container className="mt-5">
              <Form onSubmit={this.props.handleBookSubmit}>
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


export default BookFormModal;