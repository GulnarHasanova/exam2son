import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import "../Home/home.css"
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
function Index() {
    return (
        <>
            <nav>
                <Container>
                    <Row>
                        <Col><div className='Logo'><p>OneSchool</p></div></Col>
                        <Col><div > <Link to="/">Home</Link>
                            <Link to="about">about</Link>
                            <Link to="add">Add</Link>


                        </div></Col>
                    </Row>


                </Container>
            </nav>

            <div style={{paddingTop: "70px"}}>
                <Outlet />

            </div>


        </>

    )
}

export default Index