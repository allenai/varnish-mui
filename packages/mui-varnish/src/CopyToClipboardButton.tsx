import * as React from 'react';
import { useState } from 'react';
import Snackbar from '@mui/material/Snackbar';
import IconButton from '@mui/material/IconButton';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';

interface Props {
  text?: string;
  children:
    | string
    | number
    | boolean
    | React.ReactElement<any, string | React.JSXElementConstructor<any>>
    | React.ReactFragment
    | React.ReactPortal;
}
function CopyToClipboardButton({ text, children }: Props) {
  const [open, setOpen] = useState(false);
  const handleClick = () => {
    setOpen(true);
    navigator.clipboard.writeText(text ? (text as string) : children.toString());
  };

  return (
    <React.Fragment>
      {children}
      <IconButton color="primary" size="small" onClick={handleClick}>
        <ContentCopyIcon fontSize="inherit" />
      </IconButton>
      <Snackbar
        open={open}
        onClose={() => setOpen(false)}
        autoHideDuration={2000}
        message="Copied to clipboard"
      />
    </React.Fragment>
  );
}

export default CopyToClipboardButton;
