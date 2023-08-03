'use client'
import Link from "next/link";
import { Navbar, Nav, Container } from "react-bootstrap";
import './Navbar.css';

export const NavBar = () => {

  /* Supprimez l'utilisation de useState pour le lien actif */
 
  return (
    <Navbar >
        <Container>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link href="/home" className= 'navbar-link'>Accueil</Nav.Link>
              <Nav.Link href="/contact" className= 'navbar-link'>Contact</Nav.Link>
              <Nav.Link href="/projets" className='navbar-link' >Projets</Nav.Link>
              <Nav.Link href="/temoignages" className='navbar-link' >Témoignage</Nav.Link>
              </Nav>   
          </Navbar.Collapse> 
        </Container>
      </Navbar>
  );
}
export default NavBar;
