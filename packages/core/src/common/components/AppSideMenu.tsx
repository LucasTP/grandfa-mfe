import * as React from 'react';

import { Dashboard, StoreMallDirectory } from '@mui/icons-material';
import {
  Box,
  MenuList,
  ListItemIcon,
  ListItemText,
  MenuItem,
} from '@mui/material';
import { useNavigate } from 'react-router-dom';

const AppSideMenu = () => {
  const navigate = useNavigate();

  return (
    <Box sx={{ width: '200px' }}>
      <MenuList>
        <MenuItem onClick={() => navigate('dashboard')}>
          <ListItemIcon>
            <Dashboard fontSize="small" color="primary" />
          </ListItemIcon>
          <ListItemText>Dashboard</ListItemText>
        </MenuItem>
        <MenuItem onClick={() => navigate('stores')}>
          <ListItemIcon>
            <StoreMallDirectory fontSize="small" color="primary" />
          </ListItemIcon>
          <ListItemText>Stores</ListItemText>
        </MenuItem>
      </MenuList>
    </Box>
  );
};

export default AppSideMenu;
