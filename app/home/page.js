'use client'
import { Container, Row, Col } from "react-bootstrap";
import monImage from "../../public/mypicture.jpg";
import Image from 'next/image'
import 'animate.css';
import './Accueil.css'

export const Accueil = () => {
  return (
    <section className="banner" id="home">
      <Container>
        <Row className="aligh-items-center">
          <Col xs={12} md={6} xl={7}>
              <div className= "animate__animated animate__fadeIn">
                <span className="titre">Bienvenue sur mon Portfolio</span>
                <h1>Hi! I'm Youcef</h1>
                  <p>Je suis un développeur junior passionné par la programmation informatique. Mon objectif à court terme est d'intégrer une entreprise dynamique où je pourrai mettre en pratique mes compétences techniques. À long terme, je souhaite évoluer en tant que développeur expérimenté et contribuer à des projets innovants qui repoussent les limites technologiques.</p>
              </div>
          </Col>
          <Col xs={12} md={6} xl={5}>
             
                <div className={ "animate__animated animate__zoomIn"}>
                  <Image src={monImage} alt="My picture"/>
                </div>
          </Col>
        </Row>
      </Container>
    </section>
  )
}
export default Accueil;
