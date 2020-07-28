import React from 'react';
import Logo from '../../assests/img/castorflix.png'
import Button from '../Button';
import './menu.css'

function Menu() {
    return (
        <nav className='Menu'>
            <a href='/'>
                <img className="Logo" src={Logo} alt='CastorFlix' />
            </a>
            <Button as='a' className="ButtonLink" href="/">
                Novo vídeo
            </Button>
        </nav>
    );
}

export default Menu;