import axios from 'axios'
import React, { useState } from 'react'
import { Button, Card, Col, Row, Form, Modal } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'
import FormContainer from '../components/FormContainer'

const GalleryScreen = () => {

    const [show, setShow] = useState(false);
    const [image, setImage] = useState('')

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const uploadFileHandler = async (e) => {
        const file = e.target.files[0]
        const formData = new FormData()
        formData.append('image', file)

        try {
            const config = {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            }

            const { data } = await axios.post('/api/uploads', formData, config)

            setImage(data)
        } catch (error) {
            console.error(error)
        }
    }

    const submitHandler = (e) => {
        e.preventDefault()
        setShow(false)
    }

    return (
        <>
            <FormContainer>
                <Row>
                    <Col className='d-flex '>
                        <LinkContainer to='#'>
                            <Button className='ml-auto mb-3 btn-sm' variant="primary" onClick={handleShow}>
                                <i className='fas fa-plus'></i> Image
                        </Button>
                        </LinkContainer>
                    </Col>
                </Row>

                <Modal show={show} onHide={handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>Upload Image</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Form onSubmit={submitHandler}>
                            <Form.Group controlId='image'>
                                <Form.Label>Image</Form.Label>
                                <Form.Control
                                    className='mb-3'
                                    type='text'
                                    placeholder='Enter image url'
                                    value={image}
                                    onChange={(e) => setImage(e.target.value)}
                                ></Form.Control>
                                <Form.File
                                    id='image-file'
                                    label='Choose File'
                                    custom
                                    onChange={uploadFileHandler}
                                ></Form.File>
                            </Form.Group>
                        </Form>
                    </Modal.Body>

                    <Modal.Footer>
                        <Button variant="secondary" onClick={handleClose}>
                            Close
          </Button>
                        <Button variant="primary" onClick={submitHandler}>
                            Upload
          </Button>
                    </Modal.Footer>
                </Modal>

                <Card className='my-3 p-3 rounded' style={{ width: "300px" }}>
                    <Card.Img src='/uploads\image-1617946133738.jpg' variant='top' />
                    <Card.Title>Test</Card.Title>
                </Card>
            </FormContainer>
        </>
    )
}

export default GalleryScreen
