import * as React from 'react';
import { MaxWidthText } from '@allenai/varnish2';

export default function Demo() {
  return (
    <div style={{ width: '100%' }}>
      <h5>MaxLengthText p</h5>
      <MaxWidthText as="p" style={{ borderRight: 'solid 1px red' }}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ac est
        dignissim, eleifend libero a, aliquam tellus. Integer orci lectus, aliquam
        laoreet commodo condimentum, posuere id purus. Fusce laoreet volutpat sem,
        non gravida justo lobortis id. Mauris id arcu dignissim, fermentum velit et,
        placerat erat. Phasellus mi quam, mattis a libero vitae, finibus feugiat
        orci. Sed rutrum mollis arcu, placerat lacinia ex luctus nec. Nulla tempus
        ante a lobortis pretium. Sed ut maximus augue. Pellentesque at volutpat dui.
      </MaxWidthText>

      <h5>Default p</h5>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ac est
        dignissim, eleifend libero a, aliquam tellus. Integer orci lectus, aliquam
        laoreet commodo condimentum, posuere id purus. Fusce laoreet volutpat sem,
        non gravida justo lobortis id. Mauris id arcu dignissim, fermentum velit et,
        placerat erat. Phasellus mi quam, mattis a libero vitae, finibus feugiat
        orci. Sed rutrum mollis arcu, placerat lacinia ex luctus nec. Nulla tempus
        ante a lobortis pretium. Sed ut maximus augue. Pellentesque at volutpat dui.
      </p>
    </div>
  );
}
