'use client'
import { Col } from "react-bootstrap";
import './CarteProjet.css'
import Link from "next/link";
import Image from 'next/image'

export const CarteProjet = ({ title,  imgUrl,id }) => {
  return (
    <Col size={12} sm={6} md={4}>
      <div className="carte">
      <Link href={`/projet${id}`} className="link">
        <Image src={imgUrl} />
        <div className="information">
          <h4>{title}</h4>
        </div>
        </Link>
      </div>
    </Col>
  )
}
export default CarteProjet;
