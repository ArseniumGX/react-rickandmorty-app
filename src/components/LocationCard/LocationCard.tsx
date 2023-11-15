import styles from './LocationCard.module.scss';
import { LocationCardProps } from './LocationCard.props';

export function LocationCard({ id, name, type }: Readonly<LocationCardProps>) {
  return (
    <div data-id={id} className={styles.container}>
      <h3 className={styles.container__name}>{name}</h3>
      <h4 className={styles.container__type}>{type}</h4>
    </div>
  );
}
