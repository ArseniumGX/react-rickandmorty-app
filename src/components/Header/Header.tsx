import { useState } from 'react';
import { RxHamburgerMenu, RxCross2 } from 'react-icons/rx';
import styles from './Header.module.scss';
import logo from '../../assets/logo-black 1.svg';
import { Container, Menu } from '../';

export function Header() {
  const [menuVisibility, setMenuVisibility] = useState<boolean>(false);

  const toggleMenuVisibility = () =>
    setMenuVisibility((prevState) => !prevState);

  return (
    <header>
      <Container>
        <div className={styles.header_container}>
          <img className={styles.header_container__logo} src={logo} alt="" />
          <span className={styles.header_container__hamburger_menu}>
            {!menuVisibility ? (
              <RxHamburgerMenu
                onKeyDown={() => toggleMenuVisibility()}
                onClick={() => toggleMenuVisibility()}
              />
            ) : (
              <>
                <RxCross2
                  onKeyDown={() => toggleMenuVisibility()}
                  onClick={() => toggleMenuVisibility()}
                />
                <Menu style="block" />
              </>
            )}
          </span>
          <Menu />
        </div>
      </Container>
    </header>
  );
}
