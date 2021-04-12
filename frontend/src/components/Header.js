import React from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { LinkContainer } from 'react-router-bootstrap'
import { logout } from '../actions/userActions'

const Header = ({ history }) => {

    const dispatch = useDispatch()

    const login = useSelector((state) => state.login)
    const { userInfo } = login

    const logoutHandler = () => {
        try {
            window.signOut()
            dispatch(logout())
        } catch (error) {
            dispatch(logout())
        }
    }

    return (
        <div>
            <Navbar bg="dark" variant='dark' expand="lg" collapseOnSelect className='py-2'>
                <Container>
                    <LinkContainer to='/' exact={true}>
                        <Navbar.Brand >Activity System</Navbar.Brand>
                    </LinkContainer>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ml-auto">

                            {userInfo &&
                                <>
                                    <LinkContainer to='/activities' exact={true}>
                                        <Nav.Link ><i className='fas fa-tasks'></i>Activities</Nav.Link>
                                    </LinkContainer>

                                    <LinkContainer to='/gallery' exact={true}>
                                        <Nav.Link ><i className='fas fa-tasks'></i>Gallery</Nav.Link>
                                    </LinkContainer>
                                    <Nav.Link onClick={logoutHandler}><i className='fas fa-sign-out-alt'></i>Logout</Nav.Link>
                                </>

                            }

                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    )
}

export default Header