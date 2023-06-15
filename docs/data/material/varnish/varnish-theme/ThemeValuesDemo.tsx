import * as React from 'react';
import { getTheme } from '@allenai/varnish2';
import ExpandMore from '@mui/icons-material/ExpandMore';
import { Accordion, AccordionSummary, AccordionDetails, Link } from '@mui/material';

export default function Demo() {
  const theme = getTheme();
  const topLevelKeys = Object.keys(theme);

  return (
    <div style={{ maxWidth: '100%' }}>
      {topLevelKeys.map(
        (key: string) =>
          !key.startsWith('unstable') && (
            <Accordion key={key}>
              <AccordionSummary expandIcon={<ExpandMore />}>{key}</AccordionSummary>
              <AccordionDetails>
                {key === 'spacing' ? (
                  <pre style={{ whiteSpace: 'pre-wrap' }}>
                    <p>
                      We are using the Material spacing function and guidelines. See
                      Material docs for how to use spacing:
                    </p>
                    <Link href="https://varnish.allenai.org/material-ui/customization/spacing/">
                      https://varnish.allenai.org/material-ui/customization/spacing/
                    </Link>
                  </pre>
                ) : (
                  <pre style={{ whiteSpace: 'pre-wrap' }}>
                    {JSON.stringify((theme as any)[key], null, 2)}
                  </pre>
                )}
              </AccordionDetails>
            </Accordion>
          ),
      )}
    </div>
  );
}
