import { NavLink } from 'react-router-dom';
import styles from './Menu.module.scss';
import { MenuTypes } from './Menu.types';

export function Menu({ style }: Readonly<MenuTypes>) {
  const attribClassActive = ({ isActive }: any): string =>
    isActive ? 'active' : '';

  return (
    <nav className={styles.menu_container} style={{ display: style }}>
      <ul className={styles.menu_container__menu_items}>
        <li className={styles.menu_container__menu_items__item}>
          <NavLink to={'/'} className={attribClassActive}>
            Characters
          </NavLink>
        </li>
        <li className={styles.menu_container__menu_items__item}>
          <NavLink to={'/locations'} className={attribClassActive}>
            Locations
          </NavLink>
        </li>
        <li className={styles.menu_container__menu_items__item}>
          <NavLink to={'/episodes'} className={attribClassActive}>
            Episodes
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}
