import { Results } from '../../types/Results.type';
import style from './Character.module.scss';

type CharacterProps = {
  info: Results[];
};

export function Character({ info }: CharacterProps) {
  return (
    <>
      {info.map(({ id, name, image, species, status }: Results) => (
        <li key={id} className={style.container}>
          <img
            className={style.container__imagem}
            src={image}
            alt={`Personagem ${name}`}
          />
          <div className={style.container__character}>
            <h4 className={style.container__character__name}>{name}</h4>
            <span className={style.container__character__species}>
              {species}
            </span>
            <span className={style.container__character__status}>{status}</span>
            <button type="button">Ver</button>
          </div>
        </li>
      ))}
    </>
  );
}
