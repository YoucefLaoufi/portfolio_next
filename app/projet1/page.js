'use client'
import { Container, Row, Col } from "react-bootstrap";
import nodeLogo from "../../public/nodeLogo.png";
import mysqlLogo from "../../public/mysqlLogo.png"
import vueLogo from "../../public/vueLogo.png"
import projet1 from "../../public/projet1.png"
import Image from 'next/image'

import 'animate.css';
import './projet1.css'

export const Projet1 = () => {
  

  return (
    <section className="contact" id="connect">
      <Container>
        <Row className="align-items-center">
          <Col sx={12} md={6} className="info">  
               <div className="titre">TECHNOLOGIES</div>
               <div className="youcef"><Image className="picNode" src={nodeLogo} alt="Icon" /> Node js, Express js </div>
               <div className="youcef-adr"><Image src={mysqlLogo} className="picMysql" alt="Icon" />MySQL (BackEnd)</div>  
               <div className="youcef-adr"><Image src={vueLogo} className="picVue" alt="Icon" />Vue js (FrontEnd)</div>       
     
          </Col>
          <Col sx={12} md={6}>

                <div className={"animate__animated animate__fadeIn"}>
                <h2 className="titre">Next Nap</h2>
                  <Row>
                    <Image src={projet1} className="PicProjet1" alt="picture"/>
                    <div className="description">Le projet consiste en la création d'une plateforme de location immobilière appelée "NextNap" en utilisant Node.js pour le développement du backend et Vue.js pour le développement du frontend. L'objectif de cette plateforme est de permettre aux utilisateurs de rechercher, consulter et louer des biens immobiliers tels que des appartements, des maisons, des bureaux, etc.</div>
                    
                  </Row>
              </div>
          </Col>
        </Row>
      </Container>
    </section>
  )
}
export default Projet1;
