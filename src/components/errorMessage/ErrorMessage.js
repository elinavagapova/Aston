import img from './error.gif';

import './errorMessage.scss';

export function ErrorMessage() {
  return <img src={img} alt='Ошибка' />;
}
