import * as React from 'react';
import styled from 'styled-components';
import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';

export interface ErrorBoundaryProps {
  errorTitle?: string;
  children: React.ReactNode | JSX.Element;
}

interface ErrorBoundaryState {
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
export class ErrorBoundary extends React.PureComponent<ErrorBoundaryProps, ErrorBoundaryState> {
  state: ErrorBoundaryState = {};

  static getDerivedStateFromError(error: Error): ErrorBoundaryState {
    return { error };
  }

  render() {
    const { errorTitle = 'Sorry, something went wrong.', children } = this.props;
    const { error } = this.state;

    // If there's no error, just return what renders via the happy path.
    if (!error) {
      return children;
    }

    const showErrorDetails = process.env.NODE_ENV === 'development';
    return (
      <Alert severity="error">
        <AlertTitle>{errorTitle}</AlertTitle>

        {showErrorDetails ? (
          <p>
            <b>{error.message}:</b>
            <DebugInfo>
              <pre>{error.stack || JSON.stringify(error, null, 2)}</pre>
            </DebugInfo>
          </p>
        ) : (
          <div>Please try again.</div>
        )}
      </Alert>
    );
  }
}

export default ErrorBoundary;
