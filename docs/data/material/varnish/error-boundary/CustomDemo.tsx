import * as React from 'react';
import { ErrorBoundary } from '@allenai/varnish2';

export default function Demo() {
  const ErrorComponent = () => {
    throw Error('Example of an error thrown by a component');
  };

  return (
    <div style={{ width: '100%' }}>
      <ErrorBoundary errorTitle="Example error with custom title.">
        <ErrorComponent />
      </ErrorBoundary>

      <p>
        <strong>Content outside the error ErrorBoundary is still rendered!!</strong>
      </p>
    </div>
  );
}
