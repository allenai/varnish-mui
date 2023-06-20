import * as React from 'react';
import IconButton from '@mui/material/IconButton';
import TwitterIcon from '@mui/icons-material/Twitter';

interface Props {
  url?: string;
  text?: string;
}

export function ShareOnTwitterButton({ url, text }: Props) {
  let baseUrl = 'https://twitter.com/intent/tweet';
  if (url) {
    baseUrl += `?url=${  url}`;
    if (text) {
      baseUrl += `&text=${  text}`;
    }
  } else if (text) {
    baseUrl += `?text=${  text}`;
  }

  return (
    <IconButton color="primary" size="small">
        <a href={baseUrl} target="_blank" rel="noopener noreferrer">
          <TwitterIcon alt="Share on Twitter" />
        </a>
      </IconButton>
  );
}

export default ShareOnTwitterButton;
