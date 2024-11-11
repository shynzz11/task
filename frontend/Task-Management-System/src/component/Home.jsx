import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { motion } from 'framer-motion';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/HomePage.css';
import img1 from '../assets/real.jpg'; // Adjust the relative path if needed
import blue from "../assets/blue.mov"


const HomePage = () => {
  return (
    <div className="center-in-page">
      {/* Motion div to apply framer-motion to video */}
      <motion.div
        className="video-background"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
      >
        <video autoPlay muted loop className="video-element">
          <source src={blue} type="video/mp4" />
        </video>
      </motion.div>

      <Container className="home-content">
        <Row className="justify-content-center align-items-center text-center">
          {/* Left Column: Text */}
          <Col lg={6} className="text-column">
            <motion.div
              initial={{ opacity: 0, x: -100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
              className="card-container"
            >
              <h1 className="display-4">
                Welcome to <span className="task-flow"><br/>Task Flow</span>
              </h1>
              <p className="lead mb-4">
                Experience a smarter way to manage tasks. Boost productivity, collaborate seamlessly, and accomplish more in less time.
              </p>
            </motion.div>
          </Col>

          {/* Right Column: Image */}
          <Col lg={6} className="image-column">
            <motion.img
              src={img1}  // Replace with your image path
              alt="Task Flow"
              className="img-fluid rounded shadow"
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1.5 }}
            />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default HomePage;
