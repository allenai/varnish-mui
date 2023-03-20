import * as React from 'react';
import { getTheme } from '@allenai/varnish2';
import ExpandMore from '@mui/icons-material/ExpandMore';
import { Accordion, AccordionSummary, AccordionDetails } from '@mui/material';

export default function Demo() {
  const theme = getTheme();
  const topLevelKeys = Object.keys(theme);

  return (
    <div style={{ maxWidth: '100%' }}>
      {topLevelKeys.map((key: string) => (
        <Accordion key={key}>
          <AccordionSummary expandIcon={<ExpandMore />}>{key}</AccordionSummary>
          <AccordionDetails>
            <pre style={{ whiteSpace: 'pre-wrap' }}>
              {JSON.stringify((theme as any)[key], null, 2)}
            </pre>
          </AccordionDetails>
        </Accordion>
      ))}
    </div>
  );
}
