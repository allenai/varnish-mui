import * as React from 'react';
import { CopyToClipboardButton } from '@allenai/varnish2';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';

export default function Demo() {
    return (
        <CopyToClipboardButton
            buttonContent={<ContentCopyIcon fontSize="inherit" />}
            text={'Test Copy Text'}
        >
            {'Test Copy Text'}
        </CopyToClipboardButton>
    );
}
