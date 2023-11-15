import styles from './EpisodeCard.module.scss';
import { EpisodeCardProps } from './EpisodeCard.props';

export function EpisodeCard({
  id,
  name,
  air_date,
  episode
}: Readonly<EpisodeCardProps>) {
  return (
    <div data-id={id} className={styles.container}>
      <h3 className={styles.container__name}>{name}</h3>
      <span className={styles.container__air_date}>{air_date}</span>
      <h4 className={styles.container__episode}>{episode}</h4>
    </div>
  );
}
