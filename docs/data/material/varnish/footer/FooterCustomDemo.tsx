import * as React from 'react';
import { Footer } from '@allenai/varnish';
import {color} from '@allenai/varnish'

export default function Demo() {
  return (
    <div style={{ width: '100%' }}>
      <Footer backgroundColor={color.G4}>Custom footer content - 🦶🏻 🦶🏼 🦶🏽 🦶🏾 🦶🏿</Footer>
    </div>
  );
}
