import styles from './Header.module.css';
import { NavLink } from 'react-router-dom';

const links = [
  { title: 'Produtos', href: '/', end: true },
  { title: 'Contato', href: 'contato', end: false },
]

const Header = () => {
  return (
    <nav className={styles.header}>
      <ul>
        {links.map((link, index) => (
          <li key={index}>
            <NavLink className={styles.link} to={link.href} end={link.end}>
              {link.title}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default Header