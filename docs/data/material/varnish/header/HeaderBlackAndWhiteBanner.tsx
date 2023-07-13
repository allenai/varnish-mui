import * as React from 'react';
import { AI2Banner } from '@allenai/varnish2';

export default function Demo() {
  // Customized header banners for grayscale with different size can be used 
  // by directly calling AI2Banner

  return (
    <div style={{ width: '100%' }}>
      <AI2Banner grayscale logoSize='md' />
    </div>
  );
}
