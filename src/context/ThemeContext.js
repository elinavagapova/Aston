import { createContext, useState, useMemo } from 'react';
import PropTypes from 'prop-types';

export const ThemeContext = createContext({ isDark: false });

export function ThemeProvider({ children }) {
  const [isDark, setIsDark] = useState(false);

  const value = useMemo(() => ({ isDark, setIsDark }), [isDark]);

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
}

ThemeProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
