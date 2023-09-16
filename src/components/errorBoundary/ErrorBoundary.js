import { Component } from 'react';
import PropTypes from 'prop-types';

import { ErrorMessage } from '../errorMessage/ErrorMessage';

export class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: false,
    };
  }

  componentDidCatch() {
    this.setState({
      error: true,
    });
  }

  render() {
    const { error } = this.state;
    const { children } = this.props;

    if (error) {
      return <ErrorMessage />;
    }
    return children;
  }
}

ErrorBoundary.propTypes = {
  children: PropTypes.node.isRequired,
};
