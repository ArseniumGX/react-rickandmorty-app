import { Container } from 'components';
import './Footer.module.scss';

export function Footer() {
  return (
    <footer>
      <Container>
        <p>Created by José "ArseniumGX" Macedo</p>
        <p>
          Design by{' '}
          <a href="https://www.figma.com/@santosfrancisco" target="_blank">
            Francisco Santos
          </a>
        </p>
      </Container>
    </footer>
  );
}
