import * as React from 'react';
import Snackbar from '@mui/material/Snackbar';
import IconButton from '@mui/material/IconButton';

interface Props {
  text?: string;
  autoHideDuration?: number;
  buttonContent?: React.ReactNode; // we recommend '@mui/icons-material/ContentCopy'
  children: NonNullable<React.ReactNode>;
}
export function CopyToClipboardButton({ text, autoHideDuration, buttonContent, children }: Props) {
  const [open, setOpen] = React.useState(false);
  const value = text ? (text as string) : children.toString();
  const handleClick = () => {
    setOpen(true);
    navigator.clipboard.writeText(value);
  };

  return (
    <React.Fragment>
      {children}
      <IconButton color="primary" size="small" onClick={handleClick}>
        {buttonContent || 'Copy'}
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
