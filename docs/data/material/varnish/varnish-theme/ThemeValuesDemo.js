/**
 * This file has been auto-generated. Please don't edit nor review.
 */

import * as React from 'react';
import { getTheme } from '@allenai/varnish2';
import ExpandMore from '@mui/icons-material/ExpandMore';
import { Accordion, AccordionSummary, AccordionDetails } from '@mui/material';

export default function Demo() {
  const theme = getTheme();
  const topLevelKeys = Object.keys(theme);

  return (
    <div style={{ maxWidth: '100%' }}>
      {topLevelKeys.map((key) => (
        <Accordion key={key}>
          <AccordionSummary
            expandIcon={<ExpandMore />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            {key}
          </AccordionSummary>
          <AccordionDetails>
            <div
              style={{
                maxWidth: '90%',
                display: 'flex',
                flexWrap: 'wrap',
                flexDirection: 'column',
              }}
            >
              <pre style={{ whiteSpace: 'pre-wrap' }}>
                {JSON.stringify(theme[key], null, 2)}
              </pre>
            </div>
          </AccordionDetails>
        </Accordion>
      ))}
    </div>
  );
}
