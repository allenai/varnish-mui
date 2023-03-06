import * as React from 'react';
import { Header } from '@allenai/varnish';
import logos from '@allenai/varnish/logos';

export default function Demo() {
  const getDivs = () => {
    const divs = [];
    for (let i = 0; i < 50; i += 1) {
      divs.push(<div key={i}>Content {i}!</div>);
    }
    return divs;
  };

  const [scrollTarget, setScrollTarget] = React.useState(undefined);

  return (
    <div
      style={{ width: '100%', height: '250px', overflow: 'scroll' }}
      ref={(node) => {
        if (node) {
          setScrollTarget(node);
        }
      }}
    >
      <Header scrollTriggerTarget={scrollTarget} bannerAlwaysVisible={false}>
        <Header.Columns columns="auto 1fr">
          <Header.Logo
            href="http://allenai.org"
            label={<Header.AppName>Title</Header.AppName>}
          >
            <logos.AI2Logo includeText={false} />
          </Header.Logo>
        </Header.Columns>
      </Header>
      {getDivs()}
    </div>
  );
}
