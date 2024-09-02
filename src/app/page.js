import Image from 'next/image';
import React from 'react';
import { Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, Button } from '@nextui-org/react';
import styles from './styles/page.module.css';
import BUTON from './componente/button/index.jsx';

export default function Home() {
  const direcciones = ['Nosotras', 'Contacto', 'Reservas'];

  return (
    <main className={styles.main}>
      <Navbar isBordered isBlurred={false} className={styles.stickyNavbar}>
        <NavbarBrand>
          {/* Optional: Add logo or brand name here */}
        </NavbarBrand>
        <NavbarContent className={styles.navContent} justify="center">
          {direcciones.map((direccion, index) => (
            <NavbarItem key={index} className={styles.navbarItem}>
              <BUTON direccion={direccion} />
            </NavbarItem>
          ))}
        </NavbarContent>
      </Navbar>
      <div className={styles.description}>
        <p className={styles.markermodu}>
          Bienvenido a nuestra página :D !&nbsp;
        </p>
          <Image
            src="/dogs.png" // Ruta correcta a la imagen en la carpeta pública
            alt="Cute dogs"
            width={600}
            height={400}
            className={styles.dogImage}
          />
      </div>
    </main>
  );
}
