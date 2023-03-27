/**
 * This file has been auto-generated. Please don't edit nor review.
 */

import * as React from 'react';
import { logos } from '@allenai/varnish2';
import { styled, ImageListItem, ImageListItemBar } from '@mui/material';

export default function Demo() {
  const Item = styled(ImageListItem)`
    background: white;
    width: 160px;
    margin: ${({ theme }) => theme.spacing(0.5)};
    border: 1px solid ${({ theme }) => theme.color2.N2.hex};
  `;
  const Center = styled('div')`
    margin: 60px auto 10px auto;
    text-align: center;
  `;
  const List = styled('div')`
    display: flex;
    flex-wrap: wrap;
  `;

  return (
    <List>
      <Item>
        <Center>
          <ImageListItemBar title="AllenNLP" position="top" />
          <logos.AllenNLP />
        </Center>
      </Item>

      <Item>
        <Center>
          <ImageListItemBar title="Aristo" position="top" />
          <logos.Aristo />
        </Center>
      </Item>

      <Item>
        <Center>
          <ImageListItemBar title="Mosaic" position="top" />
          <logos.Mosaic />
        </Center>
      </Item>

      <Item>
        <Center>
          <ImageListItemBar title="Prior" position="top" />
          <logos.Prior />{' '}
        </Center>
      </Item>

      <Item>
        <Center>
          <ImageListItemBar title="Semantic Scholar" position="top" />
          <logos.SemanticScholar />{' '}
        </Center>
      </Item>

      <Item>
        <Center>
          <ImageListItemBar title="Fairness" position="top" />
          <logos.Fairness />{' '}
        </Center>
      </Item>

      <Item>
        <Center>
          <ImageListItemBar title="Incubator" position="top" />
          <logos.Incubator />{' '}
        </Center>
      </Item>
    </List>
  );
}
