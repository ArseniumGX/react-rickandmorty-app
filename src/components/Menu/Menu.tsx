import styles from './Menu.module.scss';
import { MenuTypes } from './Menu.types';

export function Menu({ style }: Readonly<MenuTypes>) {
  return (
    <nav className={styles.menu_container} style={{ display: style }}>
      <ul className={styles.menu_container__menu_items}>
        <li className={styles.menu_container__menu_items__item}>Characters</li>
        <li className={styles.menu_container__menu_items__item}>Locations</li>
        <li className={styles.menu_container__menu_items__item}>Episodes</li>
      </ul>
    </nav>
  );
}
