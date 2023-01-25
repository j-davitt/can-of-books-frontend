import React from 'react';
import { Container, Form, Button } from 'react-bootstrap';
import Modal from 'react-bootstrap/Modal';


class UpdateBookForm extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      modalShow: true
    }
  }

  handleSubmit = (event) => {
    event.preventDefault();

    let bookToUpdate = {
      title: event.target.title.value,
      description: event.target.description.value,
      status: event.target.status.checked,
      _id: this.props.book._id,
      __v: this.props.book.__v
    }
    this.props.updateBooks(bookToUpdate);
  }

  render() {
    return (
      <>

        <Modal show={this.state.modalShow} onHide={() => { this.setState({ modalShow: false }) }}>
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


export default UpdateBookForm;


// defaultValue={this.props.book.title}
//  defaultValue={this.props.book.description}
// defaultValue={this.props.book.status}
