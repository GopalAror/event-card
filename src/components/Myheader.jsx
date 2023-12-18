import React from 'react'
import { Button, Container, Navbar, Nav } from 'react-bootstrap'
import logo from "../assets/logo.png";

const Myheader = () => {
    return (
        <div>
            <header className="Bg-img mb-sm-5">
                <Container>
                    <Navbar expand="lg">
                        <Container>
                            <Navbar.Brand className='text-white' href="#home"><div className="d-flex align-items-center">
                                <img className='w-logo' src={logo} alt="events free" />
                                <p className="fs-lg1 fw-bold lh-135 ff-poppins text-skyblue m-0">Events </p>
                                <p className="fs-lg1 fw-bold lh-135 ff-poppins text-lightblue m-0">Free</p>
                            </div></Navbar.Brand>
                            <Navbar.Toggle aria-controls="basic-navbar-nav" />
                            <Navbar.Collapse>
                                <Nav className="d-flex justify-content-center w-100 align-items-center h-100 justify-content-lg-end gap-4 pt-5 pt-lg-0">
                                    <Nav.Link className='text-white nav-text' href="#">Home</Nav.Link>
                                    <Nav.Link className='text-white nav-text' href="#">EVENTS</Nav.Link>
                                    <Nav.Link className='text-white nav-text' href="#">FEED</Nav.Link>
                                    <Nav.Link className='text-white nav-text' href="#">USER NAME</Nav.Link>
                                    <Nav.Link>
                                        <div className='d-flex align-items-center'><Button className='fs-md text-white fw-semibold ff-poppins sec-btn lh-150 bg-skyblue'>Log Out</Button>
                                        </div>
                                    </Nav.Link>
                                </Nav>
                            </Navbar.Collapse>
                        </Container>
                    </Navbar>
                    <div className='py-sm-5 mt-5 '>
                        <p className=" fs-md1 fw-normal text-white lh-150 ff-poppins m-0 lh-150">Home {'>'} Events </p>
                        <p className="fs-xxl fw-semibold ff-poppins lh-150 text-white m-0">Events</p>
                    </div>
                </Container>
            </header>
        </div>
    )
}
export default Myheader