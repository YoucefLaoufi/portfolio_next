import React from 'react';
import Link from "next/link";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import './Footer.css';

const Footer = () => {
  return (
    <footer>
      <div>
        <p>Copyright 2023. All Rights Reserved</p>
        <ul>
          <li>
            <Link className='lien' href="https://github.com/YoucefLaoufi" >  <FontAwesomeIcon icon={faGithub} />  Github 
            </Link>
          </li>
          <li>
            <Link className='lien' href="https://www.linkedin.com/in/youcef-laoufi-9917a8246/" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faLinkedin} />
              LinkedIn
            </Link>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;