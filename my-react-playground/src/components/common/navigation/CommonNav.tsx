import styles from './CommonNav.module.scss'
import navJson from './nav.json'
import { useLocation } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { useImageStore } from '../../../store/useImagegStore'

interface Navigation {
   index: number
   path: string
   label: string
   search: string
   isActive: boolean
}

function CommonNav() {
   const [navigation, setNavigation] = useState<Navigation[]>(
      (navJson as any[]).map(item => ({
         ...item,
         search: item.searchValue,
      }))
   )
   const location = useLocation()
   const setSearchValue = useImageStore(state => state.setSearchValue)
   const setPage = useImageStore(state => state.setPage)

   useEffect(() => {
      navigation.forEach((nav: Navigation) => {
         nav.isActive = false
         if (nav.path === location.pathname || location.pathname.includes(nav.path)) {
            nav.isActive = true
            if (nav.search) setSearchValue(nav.search)
            setPage(1)
         }
      })
      setNavigation([...navigation])
   }, [location.pathname])

   const navLinks = navigation.map((item: Navigation) => (
      <Link
         to={item.path}
         className={item.isActive ? `${styles.navigation__menu} ${styles.active}` : `${styles.navigation__menu} ${styles.inactive}`}
         key={item.path}
      >
         <span className={styles.navigation__menu__label}>{item.label}</span>
      </Link>
   ))

   return <nav className={styles.navigation}>{navLinks}</nav>
}

export default CommonNav