import * as React from 'react';

/**
 * Different variants represent different application level layouts:
 *
 *  - The "left-aligned" variant is a layout with a left aligned navigation menu. This
 *    is traditionally used for applications with several levels of navigation.
 *
 *  - The "center-aligned" variant is a standard, horizontally centered application. This
 *    is a fairly conventional layout used for content  rich websites.
 */
export type LayoutVariant = 'left-aligned' | 'center-aligned';

/**
 * Information captured about the current layout.
 */
export interface AppSettings {
  /* The current, active variant. */
  layout: LayoutVariant;
  /* The current height of the header, which by default in Varnish collapses
   as the user scrolls. */
  currentHeaderHeight: number;
  /* A method allowing the header height to be set. */
  setHeaderHeight: (height: number) => void;
}

/**
 * This context is intended to allow information about the app
 * to be shared across various components at different levels of the tree.
 *
 * Generally speaking a single `<VarnishContext.Provider />` should be used
 * per page. More complex scenarios, however, might necessitate using multiple.
 */
export const VarnishContext = React.createContext<AppSettings>({
  layout: 'center-aligned',
  currentHeaderHeight: 0,
  setHeaderHeight() {},
});

export interface VarnishContextProviderProps {
  layout: LayoutVariant;
  children: React.ReactNode | React.ReactNodeArray;
}

/**
 * A default, stateful wrapper that makes it easy to set app wide properties.
 *
 * Most of the time you should use this.
 */
export function DefaultAppLayoutProvider({ layout, children }: VarnishContextProviderProps) {
  const [currentHeaderHeight, setHeaderHeight] = React.useState(0);
  return React.useMemo(() => {
    return (
      <VarnishContext.Provider
        value={{
          layout,
          currentHeaderHeight,
          setHeaderHeight,
        }}
      >
        {children}
      </VarnishContext.Provider>
    );
  }, [layout, children]);
}

export default DefaultAppLayoutProvider;
