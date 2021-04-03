import React, { useEffect } from 'react'
import moment from 'moment'
import { Button, Col, Row, Table } from 'react-bootstrap'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { LinkContainer } from 'react-router-bootstrap'
import { getActivitiesAction, deleteActivityAction } from '../actions/activityActions'
import FormContainer from '../components/FormContainer'

const ActivityListScreen = ({ history }) => {

    const dispatch = useDispatch()

    const getActivities = useSelector(state => state.getActivities)
    const { activities, loading } = getActivities

    const deleteActivity = useSelector(state => state.deleteActivity)
    const { loading: del } = deleteActivity

    useEffect(() => {
        dispatch(getActivitiesAction())
    }, [dispatch])

    const deleteHandler = (id) => {
        dispatch(deleteActivityAction(id))
    }

    return (

        <FormContainer>
            <Row>
                <Col className='d-flex '>

                    <LinkContainer to='/add'>
                        <Button className='ml-auto mb-3 btn-sm'>Add Activity</Button>
                    </LinkContainer>
                </Col>
            </Row>
            {loading ? <h4>Please wait...</h4> : (
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Activity Name</th>
                            <th>Description</th>
                            <th>Date Created</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {activities && activities.map((activity) => (
                            <tr key={activity._id}>
                                <td>*</td>
                                <td>{activity.name}</td>
                                <td>{activity.description}</td>
                                <td>{moment(activity.createdAt).format('MMMM DD, YYYY')}</td>
                                <td className='d-flex justify-content-between border-0'><span><i className='fas fa-trash-alt' onClick={() => deleteHandler(activity._id)}></i></span>
                                    <LinkContainer to={`edit/${activity._id}`}>
                                        <span><i className='fas fa-edit'></i></span>
                                    </LinkContainer>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
            )}
        </FormContainer>
    )
}

export default ActivityListScreen
