import React from 'react';
import { FooterBase } from './styles';

import Logo from '../../assets/img/HebelFlix.png';

function Footer() {
  return (
    <FooterBase>
      <a href="https://www.hebelautomacao.com.br/">
        <img src={Logo} alt="Logo HebelFlix" />
      </a>
      <p>
        Orgulhosamente criado durante a
        {' '}
        <a href="https://www.alura.com.br/">
          Imersão React da Alura
        </a>
      </p>
    </FooterBase>
  );
}

export default Footer;
