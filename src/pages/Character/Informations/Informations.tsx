import { InformationsProps } from './Informations.props';
import styles from './Informations.module.scss';

export function Informations({
  gender,
  status,
  species,
  origin,
  type,
  location
}: Readonly<InformationsProps>) {
  return (
    <div className={styles.container}>
      <fieldset className={styles.informations}>
        <legend>Informations</legend>
        <div className={styles.informations__data}>
          <h4>Gender</h4>
          <span>{gender}</span>
        </div>
        <div className={styles.informations__data}>
          <h4>Status</h4>
          <span>{status}</span>
        </div>
        <div className={styles.informations__data}>
          <h4>Species</h4>
          <span>{species}</span>
        </div>
        <div className={styles.informations__data}>
          <h4>Origin</h4>
          <span>{origin}</span>
        </div>
        <div className={styles.informations__data}>
          <h4>Type</h4>
          <span>{type}</span>
        </div>
        <div className={styles.informations__data}>
          <h4>Location</h4>
          <span>{location}</span>
        </div>
      </fieldset>
    </div>
  );
}
