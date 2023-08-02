'use client'
import { Container, Row, Col } from "react-bootstrap";
import cLogo from "../../public/cLogo.png";
import netLogo from "../../public/netLogo.png"
import image1Projet2 from "../../public/projet2Details_1.png"
import image2Projet2 from "../../public/projetDetails_2.png"
import 'animate.css';
import './projet2.css'
import Image from 'next/image'

export const Projet2 = () => {
  

  return (
    <section className="contact" id="connect">
      <Container>
        <Row className="align-items-center">
          <Col size={12} md={6} className="info">  
               <div className="titre">TECHNOLOGIES</div>
               <div className="youcef"><Image className="picC" src={cLogo} alt="Icon" />Langage de programmation : C#</div>
               <div className="youcef-adr"><Image src={netLogo} className="picNet" alt="Icon" />Framework : .NET</div>       
          </Col>
          <Col size={12} md={6}>

                <div className={"animate__animated animate__fadeIn"}>
                <h2>Questionnaire SAAQ</h2>
                  <Row>
                    <div className="image">
                    <Image src={image1Projet2} alt="image1" />
                    <Image src={image2Projet2} alt="image1" />
                    </div>
                    <div className="description">Le projet consiste en la création d'une application de questionnaire en C#. Cette application permet de réaliser des examens théoriques sous forme de questions à choix multiples. Les utilisateurs peuvent passer l'examen, répondre aux questions et obtenir des résultats.</div>
                    
                  </Row>
              </div>
          </Col>
        </Row>
      </Container>
    </section>
  )
}
export default Projet2;
