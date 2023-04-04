import * as React from 'react';

import { VarnishContext } from '../VarnishContext';

type SmartBannerAttrs = [React.RefObject<HTMLDivElement>, React.RefObject<HTMLDivElement>, number];

/**
 * Sets up the logic required to toggle the visibility of the `<Header.AI2Banner />`
 * component as the user scrolls the page.
 *
 * The hook returns an array with three items:
 * 1. A ref that should be assigned to the `<Header.Sticky />` component.
 * 2. A ref that should be assigned to the `<Header.AI2Banner />` component.
 * 3. The top offset that should be set as the CSS `top` property of the
 *    `<Header.Sticky />` component.
 */
export const useSmartAI2Banner = (): SmartBannerAttrs => {
  const stickyRef = React.useRef<HTMLDivElement>(null);
  const bannerRef = React.useRef<HTMLDivElement>(null);
  const ctx = React.useContext(VarnishContext);

  const [initialHeaderHeight, setHeaderHeight] = React.useState(0);
  const [topOffset, setTopOffset] = React.useState(0);

  const lastYPos = React.useRef(0);

  const onScroll = () => {
    // This implements logic that:
    //  1. If the user scrolls down the page, at all, the AI2 banner at the top is hidden.
    //  2. If the user scrolls up, at all, the AI2 banner becomes visible again.
    if (bannerRef.current) {
      const distance = window.scrollY - lastYPos.current;
      lastYPos.current = window.scrollY;

      const shouldBeHidden = distance > 0;
      if (!shouldBeHidden) {
        setTopOffset(0);
        return;
      }

      const { height } = bannerRef.current.getBoundingClientRect();
      const paddingBottom = parseFloat(
        window.getComputedStyle(bannerRef.current).paddingBottom || '0',
      );
      const offset = -1 * (height - paddingBottom);
      setTopOffset(offset);
    }
  };

  React.useEffect(() => {
    // Obtain the initial height of the header.
    if (stickyRef.current) {
      const { height } = stickyRef.current.getBoundingClientRect();
      setHeaderHeight(height);
    }
    window.addEventListener('scroll', onScroll);
    return () => {
      window.removeEventListener('scroll', onScroll);
    };
  }, [stickyRef]);

  React.useEffect(() => {
    ctx.setHeaderHeight(initialHeaderHeight + topOffset);
  }, [ctx, initialHeaderHeight, topOffset]);

  return [stickyRef, bannerRef, topOffset];
};

export default useSmartAI2Banner;
