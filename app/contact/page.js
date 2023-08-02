'use client'
import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import { Container, Row, Col } from 'react-bootstrap'; 
import adresseLogo from "../../public/adresseLogo.png";
import phoneLogo from "../../public/phoneLogo.png"
import emailLogo from "../../public/emailLogo.png"
import Image from 'next/image'

import './Contact.css'; 
export const Contact = () => {
  const nomRegex = /^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*){3,}$/
  const emailRegex = /^[\w.-]+@[a-zA-Z_-]+?(?:\.[a-zA-Z]{2,})+$/
  const messageRegex = /^.{4,1000}$/

  const [state, setState] = useState({
    nom: '',
    email: '',
    message: ''
  });

  const [errors, setErrors] = useState({
    nom: '',
    email: '',
    message: ''
  });

  function handleChange(event) {
    const { name, value, checked, type } = event.target;
    validateField(name, value);
    setState(previousState => ({ ...previousState, [name]: type === 'checkbox' ? checked : value }));
  }

  function validateField(field, value) {
    switch (field) {
        case 'nom':
          if (!nomRegex.test(value)) setErrors(prev => ({ ...prev, [field]: `le nom ne doit pas contenir des caractéres spéciaux` }));
          else setErrors(prev => ({ ...prev, [field]: '' }));
          break;
        case 'email':
          if (!emailRegex.test(value)) setErrors(prev => ({ ...prev, [field]: 'Adresse e-mail n\'est pas valide' }));
          else setErrors(prev => ({ ...prev, [field]: '' }));
          break;
        case 'message':
          if (!messageRegex.test(value)) setErrors(prev => ({ ...prev, [field]: `${field} n'est pas valide, doit contenir entre 4 et 1000 caractères` }));
          else setErrors(prev => ({ ...prev, [field]: '' }));
          break;
        default:
          break;
      }  }

  function fieldHasError(field) {
    return errors[field] && errors[field] !== '';
  }

  function isFormValid() {
    const { nom, email, message } = state;
    const isValid = nomRegex.test(nom) && emailRegex.test(email) && messageRegex.test(message);

    if (!isValid) {
      validateField('nom', nom);
      validateField('email', email);
      validateField('message', message);
    }

    return isValid;  }

  const sendEmail = (e) => {
    e.preventDefault();

    if (isFormValid()) {
      emailjs.sendForm('Laoufi_Youcef', 'template_Laoufi', e.target, 'fT05Pv6zCKGoa4qMl')
        .then((result) => {
          console.log(result.text);
          alert("Message envoyé avec succès"); // Affiche un message de succès
        })
        .catch((error) => {
          console.log(error.text);
        });

      // Réinitialisez le formulaire après l'envoi
      e.target.reset();
    }
  };

  return (
    <section className="contact" >
    <Container>
      <Row>
        <Col size={12} md={6} className="info">  
          <div className="youcef-adr">
            <Image className="picAdresse" src={adresseLogo} alt="Icon" />
            Adresse : Gatineau, QC
          </div>
          <div className="youcef">
            <Image src={phoneLogo} className="picPhone" alt="Icon" />
            Téléphone : 514-476-9309
          </div>
          <div className="youcef">
            <Image src={emailLogo} className="picEmail" alt="Icon" />
            Email : youceflaoufi3@gmail.com
          </div> 
        </Col>
        <Col size={12} md={6}>
          <div>
            <h2>Contactez-moi</h2>
            <form onSubmit={sendEmail}>
              <Row>
                <Col size={12} sm={6} className="nom">
                  <div className={fieldHasError('nom') ? "invalid-feedback" : "valid-feedback"}>{errors.nom}</div>
                  <input className={`form-control ${fieldHasError('nom') && "is-invalid"}`} onChange={handleChange} type="text" name="nom" placeholder="Nom" />
                </Col>
                <Col size={12} sm={6} className="email">
                  <div className={fieldHasError('email') ? "invalid-feedback" : "valid-feedback"}>{errors.email}</div>
                  <input className={`form-control ${fieldHasError('email') && "is-invalid"}`} onChange={handleChange} type="email" name="email" placeholder="Adresse e-mail" />
                </Col>
                <Col size={12} className="message">
                  <div className={fieldHasError('message') ? "invalid-feedback" : "valid-feedback"}>{errors.message}</div>
                  <textarea className={`form-control ${fieldHasError('message') && "is-invalid"}`} rows="6" onChange={handleChange} name="message" placeholder="Message" />
                  <button type="submit"><span>Envoyer</span></button>
                </Col>
              </Row>
            </form>
          </div>
        </Col>
      </Row>
    </Container>
  </section>
  );
}
export default Contact;
