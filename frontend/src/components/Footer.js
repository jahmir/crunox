import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'

const Footer = () => {
    return (
        <footer className='footer mt-auto'>
            <Container>
                <Row className='mt-auto'>
                    <Col className='text-center py-3'>Copyright &copy; Activity System by Altair</Col>
                </Row>
            </Container>
        </footer>
    )
}

export default Footer