import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';

import { setUser } from '../../store/userSlice';
import { FormUser } from '../form/Form';

export function SignUpForm() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleRegister = (email, password) => {
    const auth = getAuth();
    createUserWithEmailAndPassword(auth, email, password).then(({ user }) => {
      dispatch(
        setUser({
          email: user.email,
          id: user.uid,
          token: user.accessToken,
        })
      );
      navigate('/');
    });
  };

  return <FormUser title='Зарегистрироваться' handleSubmit={handleRegister} />;
}
