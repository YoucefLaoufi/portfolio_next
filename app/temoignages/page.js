'use client'
import React, { useEffect, useState } from 'react'
import { Container, Row, Col} from "react-bootstrap";
import {  useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { addTemoignage, getTemoignage ,getAllTemoignages,deleteTemoignage} from "@/store/reducers/temoignageReducer"
import { useRouter } from "next/navigation";
import './temoignage.css'
const AddTemoignage = () => {
    // Regex pour les validations
    const nomRegex = /^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*){3,}$/
    const emailRegex = /^[\w.-]+@[a-zA-Z_-]+?(?:\.[a-zA-Z]{2,})+$/
  const messageRegex = /^.{4,1000}$/
  const numeroRegex = /^\d{10}$/;


  const router = useRouter()
  const { id } = useParams()
    const dispatch = useDispatch()
    
  
    const temoignages = useSelector(state => state.temoignage.temoignages)

  /*  useEffect(() => {
        dispatch(getAllTemoignages())
      }, [dispatch])

    useEffect(() => {
      setState(previousState => ({
        ...previousState,
        temoignages: temoignages
      }));
    }, [temoignages]);*/

  
  
    // Lecture de le temoignage a partir du store
    const temoignage = useSelector(state => state.temoignage.temoignage)

    const [state, setState] = useState({

        nom: '',
        message: '',
        numero: '',
        email: ''
    })

    // Erreur de validation
    const [errors, setErrors] = useState({
      nom: '',
      message: '',
      numero: '',
      email: ''
    })

   /* useEffect(() => {
        function getTemoignage() {
            dispatch(getTemoignageById(id))
                .then(() => { })
                .catch(err => console.log('Erreur lecture temoignage', err))
        }
        if (id) getTemoignage()
    }, [id])

    useEffect(() => {
        if (temoignage && id) setState(temoignage)
    }, [temoignage])
*/
    function handleChange(event) {
        const { name, value, checked, type } = event.target
        type !== 'checkbox' && validateField(name, value)
        setState(previousState => ({ ...previousState, [name]: type === 'checkbox' ? checked : value }))
    }

    // Valider chaque champ avec des conditions donnees

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
          case 'numero':
            if (!numeroRegex.test(value)) setErrors(prev => ({ ...prev, [field]: `${field}  doit contenir 10 chiffres` }));
            else setErrors(prev => ({ ...prev, [field]: '' }));
            break;
        default:
          break;
      }
    }

    function fieldHasError(field) {
    return errors[field] && errors[field] !== '';
  }
  


  function isFormValid() {
    const { nom, email, message, numero } = state;
    const isValid = nomRegex.test(nom) && emailRegex.test(email) && messageRegex.test(message) && numeroRegex.test(numero);

    if (!isValid) {
      validateField('nom', nom);
      validateField('email', email);
      validateField('message', message);
      validateField('numero', numero);

    }

    return isValid;
  }
  
  function goToEdit(id) {   
    dispatch(getTemoignage(id))
    router.push(`/list-temoignage/${id}`)
}

function supprimer(id) {  
    dispatch(deleteTemoignage(id))
}

function getTemoignages() {
    dispatch(getAllTemoignages())
        .then(() => { })
        .catch(err => console.log('Erreur lecture des etudiants', err))
}

    function submit(event) {
        event.preventDefault()
            isFormValid() && dispatch(addTemoignage({ ...state, id: temoignages.length + 1 }))
            alert("Temoignage envoyé avec succès");
            setState(prev => ({
                ...prev,
                prenom: '',
                nom: '',
                email: '',
                numero:'',
                message:''

            }))
    }

    return (
        <>
        {temoignages.length ? (
            <>
                 <h1 className='titre_liste'>Liste des temoignages</h1>
            <table className='liste'>
                <thead>
                    <tr className='entete'>
                        <td>Id</td>
                        <td>Numéro</td>
                        <td>Nom</td>
                        <td>Email</td>
                        <td>Message</td>
                        <td></td>
                    </tr>
                </thead>
                <tbody>
                    {temoignages.map(temoignage => <tr key={temoignage.id}>
                        <td>{temoignage.id}</td>
                        <td>{temoignage.numero}</td>
                        <td>{temoignage.nom}</td>
                        <td>{temoignage.email}</td>
                        <td>{temoignage.message}</td>


                        <td><button className='btn btn-success' onClick={() => goToEdit(temoignage.id)}>Editer</button> <button onClick={() => supprimer(temoignage.id)} className='btn btn-danger'>Supprimer</button></td>
                    </tr>)}
                </tbody>
            </table>
            </>

        ) : ''}
      <section className="contact" >
      <Row>

        <div className='card'>
            <h2 >{id ? 'Modifier un Temoignage' : 'Ajouter un Temoignage'}</h2>
            <div className='card-body'>
                <form onSubmit={submit}>
  <Col xs={12} md={6} className="nom">
    <div className={fieldHasError('nom') ? "invalid-feedback_contact" : "valid-feedback"}>{errors.nom}</div>
    <input className={`form-control ${fieldHasError('nom') && "is-invalid"}`} onChange={handleChange} value={state.nom} type="text" name="nom" placeholder="Nom" />
  </Col>
  <Col xs={12} md={6} className="numero">
    <div className={fieldHasError('numero') ? "invalid-feedback_contact" : "valid-feedback"}>{errors.numero}</div>
    <input className={`form-control ${fieldHasError('numero') && "is-invalid"}`} onChange={handleChange} value={state.numero} type="text" name="numero" placeholder="Numéro de téléphone"  />
  </Col>
  <Col xs={12} md={6} className="email">
    <div className={fieldHasError('email') ? "invalid-feedback_contact" : "valid-feedback"}>{errors.email}</div>
    <input className={`form-control ${fieldHasError('email') && "is-invalid"}`} onChange={handleChange} value={state.email} type="email" name="email" placeholder="Adresse e-mail" />
  </Col>
  <Col xs={12} md={6} className="message">
    <div className={fieldHasError('message') ? "invalid-feedback_contact" : "valid-feedback"}>{errors.message}</div>
    <textarea className={`form-control ${fieldHasError('message') && "is-invalid"}`} rows="6" onChange={handleChange} value={state.message} name="message" placeholder="Message" />
    <button type="submit"><span>Envoyer</span></button>
 
  </Col>


              </form>
            </div>
            </div>
            </Row>

</section>
</>
    )
}
export default AddTemoignage;
