import * as React from 'react';

import { Dashboard, StoreMallDirectory } from '@mui/icons-material';
import {
  Box,
  MenuList,
  ListItemIcon,
  ListItemText,
  MenuItem,
} from '@mui/material';

type OwnProp = {
  onItemClick: (url: string) => void;
};

const SideMenu = ({ onItemClick }: OwnProp) => {
  return (
    <Box sx={{ width: '200px' }}>
      <MenuList>
        <MenuItem onClick={() => onItemClick('dashboard')}>
          <ListItemIcon>
            <Dashboard fontSize="small" color="primary" />
          </ListItemIcon>
          <ListItemText>Dashboard</ListItemText>
        </MenuItem>
        <MenuItem onClick={() => onItemClick('stores')}>
          <ListItemIcon>
            <StoreMallDirectory fontSize="small" color="primary" />
          </ListItemIcon>
          <ListItemText>Stores</ListItemText>
        </MenuItem>
      </MenuList>
    </Box>
  );
};

export default SideMenu;
