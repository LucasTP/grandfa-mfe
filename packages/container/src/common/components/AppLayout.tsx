import * as React from 'react';

import { Box } from '@mui/material';

import { Outlet } from 'react-router-dom';

const AppLayout = () => {
  return (
    <Box sx={{ display: 'inline-flex' }}>
      <Outlet />
    </Box>
  );
};

export default AppLayout;
