import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { motion } from 'framer-motion';  // Import motion from framer-motion
import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/HomePage.css';

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
          <source src="C:\projects\Task-Management-System\frontend\Task-Management-System\src\assets\blue.mov" type="video/mp4" />
        </video>
      </motion.div>

      <Container className="home-content">
        <Row className="justify-content-center align-items-center text-center">
          <Col lg={8}>
            <motion.h1
              initial={{ opacity: 0, y: -100 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              className="display-4"
            >
              Welcome to <span className="text-primary">Task Management Web Application</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1.2 }}
              className="lead mb-4"
            >
              Experience a smarter way to manage tasks. Boost productivity, collaborate seamlessly, and accomplish more in less time.
            </motion.p>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default HomePage;
