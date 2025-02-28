import * as React from 'react';
import { Header, logos } from '@allenai/varnish2';
import { IconButton, Menu, MenuItem } from '@mui/material';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';

export default function Demo() {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const options = ['Link 1', 'Link 2', 'Link 3'];

  const ITEM_HEIGHT = 48;

  return (
    <div style={{ width: '100%' }}>
      <Header bannerAlwaysVisible>
        <Header.Columns columns="auto 1fr auto">
          <Header.Logo
            href="http://allenai.org"
            label={<Header.AppName>Title</Header.AppName>}
          >
            <logos.AI2Logo includeText={false} />
          </Header.Logo>
          <span />
          <Header.MenuColumn>
            <div>
              <IconButton
                aria-label="more"
                id="long-button"
                aria-controls={open ? 'long-menu' : undefined}
                aria-expanded={open ? 'true' : undefined}
                aria-haspopup="true"
                onClick={handleClick}
              >
                <MoreHorizIcon />
              </IconButton>
              <Menu
                id="long-menu"
                MenuListProps={{
                  'aria-labelledby': 'long-button',
                }}
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                PaperProps={{
                  style: {
                    maxHeight: ITEM_HEIGHT * 4.5,
                    width: '20ch',
                  },
                }}
              >
                {options.map((option) => (
                  <MenuItem
                    key={option}
                    selected={option === 'Pyxis'}
                    onClick={handleClose}
                  >
                    {option}
                  </MenuItem>
                ))}
              </Menu>
            </div>
          </Header.MenuColumn>
        </Header.Columns>
      </Header>
    </div>
  );
}
