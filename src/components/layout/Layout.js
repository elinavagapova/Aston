import PropTypes from 'prop-types';

import { useTheme } from '../../hooks/useTheme';

import './layout.scss';

export function Layout({ children }) {
  const { isDark } = useTheme();
  const clazz = isDark ? 'layout dark' : 'layout';

  return <div className={clazz}>{children}</div>;
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};
