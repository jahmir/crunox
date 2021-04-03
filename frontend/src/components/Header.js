import React from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'

const Header = ({ history }) => {

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

                            <LinkContainer to='/activities' exact={true}>
                                <Nav.Link ><i className='fas fa-tasks'></i>Activities</Nav.Link>
                            </LinkContainer>

                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    )
}

export default Header