import { useState } from 'react';
import PropTypes from 'prop-types';

export function Form({ title, handleClick }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <>
      <input
        type='email'
        value={email}
        onChange={e => setEmail(e.target.value)}
        placeholder='email'
      />
      <input
        type='password'
        value={password}
        onChange={e => setPassword(e.target.value)}
        placeholder='password'
      />
      <button type='button' onClick={() => handleClick(email, password)}>
        {title}
      </button>
    </>
  );
}

Form.propTypes = {
  title: PropTypes.string.isRequired,
  handleClick: PropTypes.func.isRequired,
};
