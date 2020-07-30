import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../assests/img/castorflix.png'
import Button from '../Button';
import './menu.css'

function Menu() {
    return (
        <nav className='Menu'>
            <Link to='/'>
                <img className="Logo" src={Logo} alt='CastorFlix' />
            </Link>
            <Button as={Link} className="ButtonLink" to="/cadastro/video">
                Novo vídeo
            </Button>
        </nav>
    );
}

export default Menu;