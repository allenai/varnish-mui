import * as React from 'react';
import { Header, Content, logos } from '@allenai/varnish2';

export default function Demo() {
  const getDivs = () => {
    const divs = [];
    for (let i = 0; i < 50; i += 1) {
      divs.push(<div key={i}>Content {i}!</div>);
    }
    return divs;
  };

  return (
    <div style={{ width: '100%', height: '250px', overflowY: 'scroll' }}>
      <Header bannerAlwaysVisible={false}>
        <Header.Columns columns="auto 1fr">
          <Header.Logo
            href="http://allenai.org"
            label={<Header.AppName>Title</Header.AppName>}
          >
            <logos.AI2Logo includeText={false} />
          </Header.Logo>
        </Header.Columns>
      </Header>
      <Content main>{getDivs()}</Content>
    </div>
  );
}
