import React from 'react';
import PageDefaut from '../../../components/PageDefault';
import { Link } from 'react-router-dom';


function CadastroCategoria() {
    return (
      <PageDefaut>
        <h1>Cadastro de categoria</h1>
        <Link to='/'>
            Home
        </Link>
      </PageDefaut>

    );
  };

export default CadastroCategoria;