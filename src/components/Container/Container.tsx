import { ContainerProps } from './Container.types';
import styles from './Container.module.scss';

export function Container({ children }: Readonly<ContainerProps>) {
  return <div className={styles.container}>{children}</div>;
}
