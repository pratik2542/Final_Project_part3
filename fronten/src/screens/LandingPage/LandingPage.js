import React, {  } from 'react'
import { Button, Container, Row } from 'react-bootstrap'
import "./LandingPage.css";


const LandingPage = () => {

    //useEffect(() => {
      //  const userInfo = localStorage.getItem("userInfo");
    
        //if (userInfo) {
          //  history.push("/mynotes");
        //}
    //}, [history]);

  return (
    <div className='main'>
        <Container>
            <Row>
                    <div className = 'intro-text'>
                        <div>
                            <h1 className='title'>
                                Welcome to our Project
                            </h1>
                            <p className='subtitle'>
                                We are hear to serve at our best 
                            </p>
                        </div>
                        <div className='buttonContainer'>
                            <a href='/login'>
                                <Button size='lg' className='landingbutton'>
                                    Login
                                </Button>
                            </a>
                            <a href='/register'>
                                <Button size='lg' className='landingbutton' variant = 'outline-primary'>
                                    Sign-Up
                                </Button>
                            </a>
                        </div>
                        
                    </div>
            </Row>
        </Container>
    </div>
  )
}

export default LandingPage