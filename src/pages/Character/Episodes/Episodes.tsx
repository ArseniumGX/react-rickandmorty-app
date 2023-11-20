import { EpisodeProps } from './Episode.props';
import styles from './Episode.module.scss';

export function Episodes({
  id,
  name,
  episode,
  air_date
}: Readonly<EpisodeProps>) {
  return (
    <div className={styles.container}>
      <h4 className={styles.container__episode}>{episode}</h4>
      <h5 className={styles.container__name}>{name}</h5>
      <h6 className={styles.container__date}>{air_date}</h6>
    </div>
  );
}
