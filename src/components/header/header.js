import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
  import { faCoffee } from '@fortawesome/free-solid-svg-icons'
import './header.css'

const Header = () => {
    return (
        <div className='header'>
            <h1>
            <FontAwesomeIcon icon={faCoffee} ></FontAwesomeIcon>
            Physics-study
            </h1>
            <p>Select today’s Physics study.

            </p>

        </div>
    );
};

export default Header;