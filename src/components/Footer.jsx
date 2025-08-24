import React from 'react';


import { Link as ScrollLink } from 'react-scroll';

export const Footer = () => (
  <footer className='footer-box' style={{ textAlign: 'center', padding: '20px', color: '#61dafb' }}>
    <p>Created by KapeStudio</p>
    <ScrollLink
      to="top"
      smooth={true}
      duration={500}
      style={{ cursor: 'pointer', textDecoration: 'underline' }}
    >
      Back to Top ↑
    </ScrollLink>
  </footer>
);



