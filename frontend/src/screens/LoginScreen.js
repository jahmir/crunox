import React, { useState, useEffect } from 'react'
import { Button, Col, Form, Row } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import Message from '../components/Message'
import { loginAction } from '../actions/userActions'
import { Link } from 'react-router-dom'
import LoginContainer from '../components/LoginContainer'

const LoginScreen = ({ history }) => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const dispatch = useDispatch()

    const login = useSelector((state) => state.login)
    const { userInfo, error } = login


    useEffect(() => {
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

                <div className="g-signin2" style={{ width: "540px", marginTop: "10px" }} data-onsuccess='onSignIn'></div>


            </Form>
            <Row className='py-3'>
                <Col>
                    New User? <Link to={'/register'}>Register Here</Link>
                </Col>
            </Row>
        </LoginContainer >
    )
}

export default LoginScreen