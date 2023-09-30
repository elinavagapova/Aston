import { useContext } from 'react';

import { ThemeContext } from '../context/ThemeContext';

export const useTheme = () => {
  const value = useContext(ThemeContext);
  return value;
};
