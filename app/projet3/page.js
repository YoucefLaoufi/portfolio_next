'use client'
import { Container, Row, Col } from "react-bootstrap";
import wpfLogo from "../../public/WPF.png";
import mysqlLogo from "../../public/mysqlLogo.png"
import cLogo from "../../public/cLogo.png"
import projet2 from "../../public/projet2.PNG"
import Image from 'next/image'

import 'animate.css';
import './projet3.css'

export const Projet3 = () => {
  

  return (
    <section className="contact" id="connect">
      <Container>
        <Row className="align-items-center">
          <Col size={12} md={6} className="info">  
               <div className="titreGauche">TECHNOLOGIES</div>
               <div className="youcef"><Image className="picWpf" src={wpfLogo} alt="Icon" /> WPF (Windows Presentation Foundation) </div>
               <div className="youcef-adr"><Image src={mysqlLogo} className="picMysql" alt="Icon" />MySQL (BackEnd)</div>  
               <div className="youcef-adr"><Image src={cLogo} className="picVue" alt="Icon" />Langage de programmation : C#</div>       
     
          </Col>
          <Col size={12} md={6}>

                <div className={"animate__animated animate__fadeIn"}>
                <div className="titreDroite">Application de gestion des employés</div>
                  <Row>
                    <Image src={projet2} className="PicProjet1" alt="picture"/>
                    <div className="description">Notre application WPF offre une solution complète de gestion des employés, permettant d'ajouter, de supprimer, de modifier et de rechercher facilement les informations des employés. Grâce à une interface conviviale et intuitiveCette application, développée avec le framework WPF de Microsoft.</div>
                    
                  </Row>
              </div>
          </Col>
        </Row>
      </Container>
    </section>
  )
}
export default Projet3;
