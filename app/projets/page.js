'use client'
import { Container, Row, Col, Tab} from "react-bootstrap";
import CarteProjet from '@/app/CarteProjet/page.js'
import projImg1 from "../../public/projet1.png";
import projImg2 from "../../public/projet3.png";
import projImg3 from "../../public/projet2.PNG";
import 'animate.css';
import './projets.css'
export const Projects = () => {

  const projects = [
    {
        id:1,
      title: "NextNap Plateforme de location immobiliére",
      imgUrl: projImg1,
    },
    {
        id:2,
      title: "Questionnaire SAAQ",
      imgUrl: projImg2,
    },
    {
        id:3,
      title: "Application bureau de Gestion des commandes",
      imgUrl: projImg3,
    }
  ];

  return (
    <section  id="project" className="project">
      <Container >
        <Row>
          <Col size={12}>             
              <div className="animate__animated animate__fadeIn">
                <h2>Mes Projets</h2>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Tab.Content id="slideInUp" className= "animate__animated animate__slideInUp">
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          projects.map((project, index) => {
                            return (
                              <CarteProjet
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>
          </Col>
        </Row>
      </Container>
    </section>
  )
}
export default Projects;
