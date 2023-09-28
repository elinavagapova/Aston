import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';

import { setUser } from '../../store/userSlice';
import { FormUser } from '../form/Form';

export function SignInForm() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogin = (email, password) => {
    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password)
      .then(({ user }) => {
        dispatch(
          setUser({
            email: user.email,
            id: user.uid,
            token: user.accessToken,
          })
        );
        navigate('/');
      })
      .catch(() => alert('Такого пользователя не существует')); // eslint-disable-line
  };

  return <FormUser title='Войти' handleSubmit={handleLogin} />;
}
