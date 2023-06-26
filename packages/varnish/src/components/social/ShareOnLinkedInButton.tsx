import * as React from 'react';
import IconButton from '@mui/material/IconButton';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

interface Props {
  url?: string;
  title?: string;
  summary?: string;
}

export function ShareOnLinkedInButton({ url, title, summary }: Props) {
  const myUrlWithParams = new URL('http://www.linkedin.com/shareArticle?mini=true');
  if (url) {
    myUrlWithParams.searchParams.append('url', url);
  }
  if (title) {
    myUrlWithParams.searchParams.append('title', title);
  }
  if (summary) {
    myUrlWithParams.searchParams.append('summary', summary);
  }

  return (
    <IconButton color="primary" size="small">
      <a href={myUrlWithParams.href} target="_blank" rel="noopener noreferrer">
        <LinkedInIcon />
      </a>
    </IconButton>
  );
}

export default ShareOnLinkedInButton;
