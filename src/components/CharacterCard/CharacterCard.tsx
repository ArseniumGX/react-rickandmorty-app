import { CharacterCardProps } from './CharacterCard.props';
import styles from './CharacterCard.module.scss';

declare module 'react' {
  interface CSSProperties {
    '--backgroundImage'?: string;
  }
}

export function CharacterCard({
  id,
  image,
  name,
  species
}: Readonly<CharacterCardProps>) {
  return (
    <div data-id={id} className={styles.container}>
      <div
        className={styles.container__avatar}
        style={{ '--backgroundImage': `url(${image})` }}
      ></div>
      <div className={styles.container__info}>
        <span className={styles.container__info__name}>{name}</span>
        <span className={styles.container__info__species}>{species}</span>
      </div>
    </div>
  );
}
