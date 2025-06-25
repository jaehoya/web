import styles from './CommonNav.module.scss';
import navJson from './nav.json';


import { useState } from 'react';
import { Link } from 'react-router-dom';

interface Navigation {
   index: number
   path: string
   label: string
   searchValue: string
   isActive: boolean
}

function CommonNav() {
   const [navigation, setNavigation] = useState<Navigation[]>(navJson as Navigation[]);

   const navLinks = navigation.map((itme: Navigation) => {
      return (
        <Link to={itme.path} className={styles.navigation__menu} key={itme.index}>
            <span className={styles.navigation__menu__label}>{itme.label}</span>
         </Link>
      )
   })

   return (
      <nav className={styles.navigation}>{navLinks}</nav>
   )
}

export default CommonNav