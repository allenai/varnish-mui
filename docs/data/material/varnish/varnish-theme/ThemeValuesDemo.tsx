import * as React from 'react';
import { getTheme } from '@allenai/varnish2';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';

export default function Demo() {
  const theme = getTheme();
  const topLevelKeys = Object.keys(theme);

  const [open, setOpen] = React.useState<string[]>([]);

  const handleClick = (key: string) => {
    if (open.includes(key)) {
      const idx = open.indexOf(key);
      open.splice(idx, 1);
      setOpen([...open]);
    } else {
      setOpen([...open, key]);
    }
  };

  return (
    <List
        sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}
        component="nav"
        aria-labelledby="nested-list-subheader"
      >
        {topLevelKeys.map((key: string) => (
          <div key={key}>
            <ListItemButton onClick={() => handleClick(key)}>
              <ListItemText primary={key} />
              {open.includes(key) ? <ExpandLess /> : <ExpandMore />}
            </ListItemButton>
            <Collapse in={open.includes(key)} timeout="auto" unmountOnExit>
              <pre>{JSON.stringify((theme as any)[key], null, 2)}</pre>
            </Collapse>
          </div>
        ))}
      </List>
  );
}
