import React, { useEffect, useState } from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link, useLocation } from "react-router-dom";


const NavBar = () => {
  const [isHomeNav,setIsHome]=useState(true)
  const location = useLocation()
  console.log(location.pathname);

  useEffect(()=>{
    if(location.pathname === '/') {
      setIsHome(false)
    }
  },[location.pathname])
  
  return (
    <Navbar expand="lg" className="nav_header" style={ {  borderBottom: isHomeNav ? '1px solid #ddd' : ''}}>
      <Container>
      <Nav.Link as={Link} to='/admin/createService'> 
              Admin
            </Nav.Link>
        <Navbar.Brand as={Link} to='/'>
          <svg
            aria-label="Travaux.com"
            data-testid="travauxLogo"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 190 32"
            height="1.5rem"
            className="css-1q3dvml ev1au544"
            data-light="false"
      
          >
            <path
    
              d="M34.2 6v3.5h5.7v15.1H44v-15h5.7V6H34.2Zm15.5 18.6V11.2h3.7V13c1-1.2 2.8-2.2 4.5-2.2v3.5a5 5 0 0 0-1 0c-1.2 0-2.9.6-3.5 1.4v9h-3.7Zm19.7-4.3v-4.8c-.6-.8-2-1.5-3.2-1.5-2.2 0-3.6 1.6-3.6 3.9s1.4 3.9 3.6 3.9a4 4 0 0 0 3.2-1.5Zm0 4.3V23a5.5 5.5 0 0 1-4.4 2c-3.5 0-6.3-2.5-6.3-7 0-4.4 2.7-7 6.3-7 1.7 0 3.2.6 4.4 2v-1.7H73v13.4h-3.7Zm10.8 0-5.7-13.4h4l3.6 9.3 3.8-9.3h4l-5.7 13.4h-4Zm20.1-4.3v-4.8c-.6-.8-2-1.5-3.2-1.5-2 0-3.5 1.6-3.5 3.9s1.4 3.9 3.5 3.9c1.3 0 2.6-.6 3.2-1.5Zm0 4.3V23a5.5 5.5 0 0 1-4.3 2c-3.6 0-6.3-2.5-6.3-7 0-4.4 2.7-7 6.3-7 1.6 0 3.2.6 4.3 2v-1.7h3.8v13.4h-3.8Zm15.8 0V23c-1 1-2.6 2-5 2-3 0-4.5-1.6-4.5-4.2v-9.5h3.7v8.1c0 1.9 1 2.5 2.6 2.5 1.4 0 2.6-.7 3.2-1.5v-9.1h3.7v13.4h-3.7Zm15.6 0-3.2-4.5-3.3 4.5h-4.1l5-6.9-4.7-6.5h4.1l3 4.1 2.9-4.1h4.1l-4.7 6.5 5 7h-4.1Zm6.6-1c0-.7.7-1.2 1.4-1.2s1.2.5 1.2 1.2c0 .6-.5 1.2-1.2 1.2s-1.4-.6-1.4-1.2Zm3.8-5.8c0-3.9 2.7-7 6.9-7a6 6 0 0 1 5 2.3l-1.1.9a4.5 4.5 0 0 0-3.8-1.9c-3.3 0-5.3 2.5-5.3 5.7 0 3.3 2 5.8 5.3 5.8 1.5 0 2.8-.6 3.8-2l1 1a5.9 5.9 0 0 1-5 2.3c-4 0-6.8-3.2-6.8-7Zm25.2 0c0-3-1.9-5.7-5.2-5.7-3.3 0-5.1 2.8-5.1 5.7 0 3 1.8 5.8 5.1 5.8s5.2-2.8 5.2-5.8Zm-12 0c0-3.9 2.7-7 6.8-7 4.2 0 6.8 3.1 6.8 7 0 4-2.6 7-6.8 7-4.1 0-6.7-3-6.7-7Zm33.1 6.7v-9.3c0-1.9-.8-3-2.8-3-1.5 0-3.3 1-4 2.2v10.1H180v-9.3c0-1.9-.8-3-2.8-3-1.5 0-3.2 1-4 2.2v10.1h-1.6V11.2h1.6v2c.5-.9 2.5-2.4 4.5-2.4 2.2 0 3.4 1.2 3.7 2.5a6 6 0 0 1 4.7-2.5c2.6 0 3.8 1.4 3.8 4.1v9.6h-1.5Z"
              fill="#000"
            ></path>
            <path
      
              d="M1 25.1h24c.5 0 1-.4 1.1-1V6.4c-.1-.5-.6-.7-1.2-1L13.8.2c-.6-.3-.9-.3-1.5 0L1 5.3c-.6.3-1 .5-1 1v17.9c0 .5.5 1 1 1Z"
              fill="#E73B1D"
            ></path>
            <path
  
              d="M9.9 21.3v-1.9h1.7V9.6H7.9v2.2H5.8v-4h14.5v4h-2V9.6h-3.8v9.8H16v1.9H10Z"
              fill="#fff"
            ></path>
          </svg>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav navbar_items">
          <Nav className="ms-auto header_link d-flex justify-content-center align-items-center">
     
            <Nav.Link href="#home">
              <h6 style={{color:isHomeNav? 'black':'',display: location.pathname ==='/professionnel/inscription/nouvelle'?'none':''}} 
            >Publish a project</h6>
            </Nav.Link>
            <Nav.Link  as={Link} to='/connexion'>
              <h6 style={{color:isHomeNav? 'black':''}}>Connexion</h6>
            </Nav.Link>
            <Nav.Link href="#link" className="active register" as={Link} to={location.pathname==='/professionnel/inscription/nouvelle'?'/': '/professionnel/inscription/nouvelle'}>
              {" "}
              <button style={ {    backgroundColor: isHomeNav ? 'white' : '', color:isHomeNav ? 'black':''}}>
               {location.pathname ==="/professionnel/inscription/nouvelle" ? "Je suis un particulier" :"S'inscrire en tant que professionnel"}</button>
            </Nav.Link>
         
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
