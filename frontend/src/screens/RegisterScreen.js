import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { registerAction } from '../actions/userActions'
import Message from '../components/Message'

const RegisterScreen = ({ history }) => {

    const [email, setEmail] = useState('')
    const [name, setName] = useState('')
    const [password, setPassword] = useState('')

    const dispatch = useDispatch()

    const register = useSelector(state => state.register)
    const { loading, error, userInfo } = register

    useEffect(() => {
        if (userInfo) {
            history.push('/activities')
        }
    }, [history, userInfo])

    const submitRegisterForm = (e) => {
        e.preventDefault()
        dispatch(registerAction(email, name, password))
    }

    return (
        <form className='container' onSubmit={submitRegisterForm}>
            <h1 className='mb-3'>Register</h1>
            {error && <Message variant='danger'>{error}</Message>}
            <div className="form-group">
                <label for="name" className='form-label'>Name</label>
                <input type="text" className="form-control" id="name" value={name} onChange={(e) => setName(e.target.value)} />
            </div>
            <div className="form-group">
                <label for="exampleInputEmail1" className='form-label'>Email address</label>
                <input type="email" className="form-control" id="email" value={email} onChange={(e) => setEmail(e.target.value)} />
            </div>
            <div className="form-group">
                <label for="password">Password</label>
                <input type="password" className="form-control" id="password" value={password} onChange={(e) => setPassword(e.target.value)} />
            </div>
            <button type="submit" className="btn btn-primary mt-2">Submit</button>
        </form>
    )
}

export default RegisterScreen