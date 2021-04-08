import React, { useState, useEffect } from 'react'
import { Button, Col, Form, Row } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import Message from '../components/Message'
import { loginAction } from '../actions/userActions'
import { Link } from 'react-router-dom'
import FormContainer from '../components/FormContainer'
import LoginContainer from '../components/LoginContainer'
import axios from 'axios'

const LoginScreen = ({ history }) => {

    const [url, setUrl] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const dispatch = useDispatch()

    const login = useSelector((state) => state.login)
    const { loading, userInfo, error } = login


    useEffect(async () => {
        if (userInfo) {
            history.push('/activities')
        }

    }, [history, userInfo])

    const submitHandler = (e) => {
        e.preventDefault()
        dispatch(loginAction(email, password))
    }

    // const queryString = window.location.search;
    // const urlParams = new URLSearchParams(queryString);
    // const code = urlParams.get('code')
    // console.log(code);

    return (
        <LoginContainer>
            <Form onSubmit={submitHandler}>
                <h1 className='mb-3'>Login</h1>
                {error && <Message variant='danger'>{error}</Message>}
                <Form.Group controlId='email'>
                    {/* <Form.Label>Email Address</Form.Label> */}
                    <Form.Control
                        type='email'
                        placeholder='Enter email'
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    ></Form.Control>
                </Form.Group>

                <Form.Group controlId='password'>
                    <Form.Control
                        type='password'
                        placeholder='Enter password'
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    ></Form.Control>
                </Form.Group>

                <Button className='btn btn-primary btn-sm btn-block py-3' type='submit' variant='primary'>
                    Sign In
                </Button>

                <a href={url} class="google btn">
                    <i className="fa fa-google fa-fw"></i> Login with Google
                </a>


            </Form>
            <Row className='py-3'>
                <Col>
                    New User? <Link to={'/register'}>Register Here</Link>
                </Col>
            </Row>
        </LoginContainer>
    )
}

export default LoginScreen