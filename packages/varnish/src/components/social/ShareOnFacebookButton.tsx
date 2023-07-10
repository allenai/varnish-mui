import * as React from 'react';
import IconButton from '@mui/material/IconButton';
// the below import is causing issues; until we get the dependency issues resolved, commenting out
// import FacebookIcon from '@mui/icons-material/Facebook';

interface Props {
  url?: string;
}

export function ShareOnFacebookButton({ url }: Props) {
  const myUrlWithParams = new URL('https://www.facebook.com/sharer/sharer.php');
  if (url) {
    myUrlWithParams.searchParams.append('u', url);
  }

  return (
    <IconButton aria-label="Facebook Icon" color="primary" size="small">
      <a href={myUrlWithParams.href} target="_blank" rel="noopener noreferrer">
        {/* <FacebookIcon /> */}
      </a>
    </IconButton>
  );
}

export default ShareOnFacebookButton;
