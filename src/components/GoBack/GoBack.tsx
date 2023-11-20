import { AiOutlineArrowLeft } from 'react-icons/ai';
import styles from './GoBack.module.scss';

export function GoBack() {
  return (
    <div
      onClick={() => window.history.back()}
      onKeyDown={() => window.history.back()}
      className={styles.container}
    >
      <AiOutlineArrowLeft />
      <span>GO BACK</span>
    </div>
  );
}
