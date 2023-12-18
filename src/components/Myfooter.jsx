import React from 'react'
import { Col, Container, Row } from "react-bootstrap";
import Footlogo from "../assets/foot-logo.png";
import img1 from "../assets/foot-img1.png";
import img2 from "../assets/foot-img2.png";
import img3 from "../assets/foot-img3.png";
import img4 from "../assets/foot-img4.png";
import img5 from "../assets/foot-img5.png";
import insta from "../assets/insta.svg";
import fb from "../assets/fb.svg";
import twitter from "../assets/twitter.svg";
const Myfooter = () => {
  return (
    <div>
       <footer className=" bg-black pt-sm-5 mt-5">
            <Container>
                <Row className="mt-5 align-items-center">
                    <Col lg={6}>
                        <div className="d-flex pb-69 mt-20">
                            <img src={Footlogo} alt="#" />
                            <p className="fs-lg1 fw-bold lh-135 ff-poppins text-skyblue m-0 lh-135">Events </p>
                            <p className="fs-lg1 fw-bold lh-135 ff-poppins text-lightblue m-0 lh-135">Free</p>
                        </div>
                        <div>
                            <p className="fs-sm1 fw-normal ff-poppins text-white mw-300 pt-sm-5 pt-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc efficitur urna in dictum suscipit. Suspendisse maximus ipsum sem. c</p>
                        </div>
                        <div className=" d-flex gap-2">
                           <a href="https://www.instagram.com/"><img className='trans' src={insta} alt="insta" /></a>
                           <a href="https://www.facebook.com/"><img className='trans' src={fb} alt="fb" /></a>
                        <a href="https://twitter.com/"><img className='trans' src={twitter} alt="twitr" /></a>
                        </div>
                    </Col>
                    <Col lg={6}>
                        <Row className='pt-5 pt-lg-0'>
                            <Col lg={3} md={4} xs={6}>
                                <ul>
                                    <li><a href="" className="fs-sm1 fw-bold ff-poppins text-white ">SERVICES</a></li>
                                    <li> <a href="" className="fs-sm fw-normal ff-poppins text-white ">About</a></li>
                                    <li><a href="" className="fs-sm fw-normal ff-poppins text-white ">NEWS</a></li>
                                    <li><a href="" className="fs-sm fw-normal ff-poppins text-white ">ullamcorper</a></li>
                                    <li><a href="" className="fs-sm fw-normal ff-poppins text-white ">Contact</a></li>
                                </ul>
                            </Col>
                            <Col lg={3} xs={4}>
                                <ul>
                                    <li><a href="" className="fs-sm1 fw-bold ff-poppins text-white">EVENTS</a></li>
                                    <li><a href="" className="fs-sm fw-normal ff-poppins text-white">ullamcorper</a></li>
                                    <li><a href="" className="fs-sm fw-normal ff-poppins text-white">ullamcorper</a></li>
                                    <li><a href="" className="fs-sm fw-normal ff-poppins text-white">ullamcorper</a></li>
                                    <li><a href="" className="fs-sm fw-normal ff-poppins text-white">ullamcorper</a></li>
                                </ul>
                            </Col>
                            <Col lg={6} xs={12} md={4}>
                                <ul className='m-0 pt-5 pt-md-0'>
                                    <li><a href="" className="fs-sm1 fw-bold ff-poppins text-white ">GALLERY</a></li>
                                    <li>
                                        <ul className=" pt-2">
                                            <Row>
                                                <Col xs={4}>
                                                    <li className=" mb-13"><a href=""><img className="w-100" src={img1} alt="footer-gallery-image"/></a></li>
                                                </Col>
                                                <Col xs={4}>
                                                    <li className=" mb-13"><a href=""><img className="w-100" src={img2} alt="footer-gallery-image"/></a></li>
                                                </Col>
                                                <Col xs={4}>
                                                    <li className=" mb-13"><a href=""><img className="w-100" src={img3} alt="footer-gallery-image"/></a></li>
                                                </Col>
                                                <Col xs={4}>
                                                    <li className=" pt-2"><a href=""><img className="w-100" src={img4} alt="footer-gallery-image"/></a></li>
                                                </Col>
                                                <Col xs={4}>
                                                    <li className="pt-2"><a href=""> <img className="w-100" src={img5} alt="footer-gallery-image"/></a></li>
                                                </Col>
                                                <Col xs={4}>
                                                    <li className="pt-2 h-100"><a className="h-100" href=""><p className="background-blue h-100 f-showmore mb-0">Show More</p></a></li>
                                                </Col>
                                            </Row>
                                        </ul>
                                    </li>
                                </ul>
                            </Col>
                        </Row>
                    </Col>
                </Row>
                <p className=" text-center fs-sm1 fw-normal ff-poppins text-white m-0 pb-4 pt-5 mt-3"> © Credits of companyName belong to companyName.</p>
            </Container>
        </footer>
    </div>
  )
}

export default Myfooter
