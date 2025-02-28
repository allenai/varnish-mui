/**
 * This file has been auto-generated. Please don't edit nor review.
 */

import * as React from 'react';
import { getTheme } from '@allenai/varnish2';
import ExpandMore from '@mui/icons-material/ExpandMore';
import { Accordion, AccordionSummary, AccordionDetails, Link } from '@mui/material';

export default function Demo() {
  const theme = getTheme();
  const topLevelKeys = Object.keys(theme);

  // we want to filter out the 'unstable' material theme objects, and we need
  // to special-case the 'spacing' theme object since it is a function, so this
  // returns all theme objects with those two special-casing rules observed.
  return (
    <div style={{ maxWidth: '100%' }}>
      {topLevelKeys.map(
        (key) =>
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
                    {JSON.stringify(theme[key], null, 2)}
                  </pre>
                )}
              </AccordionDetails>
            </Accordion>
          ),
      )}
    </div>
  );
}
