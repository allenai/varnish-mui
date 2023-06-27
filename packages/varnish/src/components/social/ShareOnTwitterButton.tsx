import * as React from 'react';
import IconButton from '@mui/material/IconButton';
import TwitterIcon from '@mui/icons-material/Twitter';

interface Props {
  url?: string;
  text?: string;
}

export function ShareOnTwitterButton({ url, text }: Props) {
  const myUrlWithParams = new URL('https://twitter.com/intent/tweet');
  if (url) {
    myUrlWithParams.searchParams.append('url', url);
  }
  if (text) {
    myUrlWithParams.searchParams.append('text', text);
  }

  return (
    <IconButton aria-label="Twitter Icon" color="primary" size="small">
      <a href={myUrlWithParams.href} target="_blank" rel="noopener noreferrer">
        <TwitterIcon />
      </a>
    </IconButton>
  );
}

export default ShareOnTwitterButton;
