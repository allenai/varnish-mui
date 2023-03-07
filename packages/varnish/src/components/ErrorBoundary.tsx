import * as React from 'react';
import styled from 'styled-components';
import Alert from '@mui/material/Alert';

import { Content } from './Content';

interface Props {
  defaultErrorMessage?: string;
  children: React.ReactNode | JSX.Element;
}

interface State {
  error?: Error;
}

const DebugInfo = styled.code`
  ${({ theme }) => `
        display: block;
        padding: ${theme.spacing(2)};
        margin: ${theme.spacing(1.5)} 0 0;
        overflow: auto;
        pre {
            margin: 0;
            padding: 0;
            overflow: initial;
        }
    `}
`;

/**
 * https://reactjs.org/docs/error-boundaries.html
 */
export default class ErrorBoundary extends React.PureComponent<Props, State> {
  state: State = {};

  static getDerivedStateFromError(error: Error): State {
    return { error };
  }

  render() {
    // If there's no error, just return what renders via the happy path.
    if (!this.state.error) {
      return this.props.children;
    }

    const showErrorDetails = process.env.NODE_ENV === 'development';
    const description = showErrorDetails ? (
      <React.Fragment>
        <b>{this.state.error.message}:</b>
        <DebugInfo>
          <pre>{this.state.error.stack || JSON.stringify(this.state.error, null, 2)}</pre>
        </DebugInfo>
      </React.Fragment>
    ) : (
      <React.Fragment>
        {this.props.defaultErrorMessage || 'Sorry, something went wrong. Please try again.'}
      </React.Fragment>
    );

    return (
      <Content>
        <Alert severity="error">{description}</Alert>
      </Content>
    );
  }
}
