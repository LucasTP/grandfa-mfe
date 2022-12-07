import * as React from 'react';

import { Box } from '@mui/material';

import { Outlet } from 'react-router-dom';

import AppHeaderBar from './AppHeaderBar';
import AppSideMenu from './AppSideMenu';

const AppLayout = () => {
  return (
    <Box sx={{ display: 'inline-flex' }}>
      <AppSideMenu />
      <Box sx={{ width: 'calc(100vw - 200px)' }}>
        <AppHeaderBar />
        <Box>
          <Outlet />
        </Box>
      </Box>
    </Box>
  );
};

export default AppLayout;
