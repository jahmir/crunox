import React, { useEffect, useState } from 'react'
import { Button, Form } from 'react-bootstrap'
import { useSelector, useDispatch } from 'react-redux'
import FormContainer from '../components/FormContainer'
import { getActivityAction, editActivityAction } from '../actions/activityActions'

const EditActivityScreen = ({ match, history }) => {

    const [name, setName] = useState('')
    const [description, setDescription] = useState('')

    const dispatch = useDispatch()

    const getActivity = useSelector(state => state.getActivity)
    const { loading, activity } = getActivity

    // useEffect(() => {
    //     if (!activity) {
    //         dispatch(getActivityAction(match.params.id))
    //     }
    // }, [dispatch, activity, match])

    const submitHandler = (e) => {
        const activity = {
            _id: match.params.id,
            name: name,
            description: description
        }

        e.preventDefault()
        dispatch(editActivityAction(activity))
        history.push('/activities')
    }

    return (
        <FormContainer>
            <Form onSubmit={submitHandler}>
                <h1 className='mb-3'>EDIT Activity</h1>
                {loading && <h4>Please wait....</h4>}
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

export default EditActivityScreen
