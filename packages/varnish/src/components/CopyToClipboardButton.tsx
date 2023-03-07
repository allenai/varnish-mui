import * as React from 'react';
import { useState } from 'react';
import Snackbar from '@mui/material/Snackbar';
import IconButton from '@mui/material/IconButton';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';

interface Props {
  text?: string;
  autoHideDuration?: number;
  children: NonNullable<React.ReactNode>;
}
export function CopyToClipboardButton({ text, autoHideDuration, children }: Props) {
  const [open, setOpen] = useState(false);
  const value = text ? (text as string) : children.toString();
  const handleClick = () => {
    setOpen(true);
    navigator.clipboard.writeText(value);
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
        autoHideDuration={autoHideDuration || 2500}
        message={`Copied '${value}' to clipboard`}
      />
    </React.Fragment>
  );
}

export default CopyToClipboardButton;
