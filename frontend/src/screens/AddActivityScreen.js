import React, { useState } from 'react'
import { Button, Form } from 'react-bootstrap'
import FormContainer from '../components/FormContainer'
import { createActivityAction } from '../actions/activityActions'
import { useDispatch } from 'react-redux'

const AddActivityScreen = ({ history }) => {

    const [name, setName] = useState('')
    const [description, setDescription] = useState('')

    const dispatch = useDispatch()

    const submitHandler = (e) => {

        const activityData = {
            name,
            description
        }

        e.preventDefault()
        dispatch(createActivityAction(activityData))
        history.push('/activities')
    }

    return (
        <FormContainer>
            <Form onSubmit={submitHandler}>
                <h1 className='mb-3'>Add Activity</h1>
                <Form.Group controlId='name'>
                    <Form.Label>Name</Form.Label>
                    <Form.Control
                        type='text'
                        placeholder='name'
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    ></Form.Control>
                </Form.Group>

                <Form.Group controlId='description'>
                    <Form.Label>Description</Form.Label>
                    <Form.Control
                        type='text'
                        placeholder='description'
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                    ></Form.Control>
                </Form.Group>
                <Button type='submit' variant='primary'>
                    Save
        </Button>
            </Form>
        </FormContainer>
    )
}

export default AddActivityScreen
