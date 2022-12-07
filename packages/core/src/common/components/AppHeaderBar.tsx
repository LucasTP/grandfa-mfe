import * as React from 'react';
import { Box, AppBar, Toolbar, Typography } from '@mui/material';

const AppHeaderBar = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
          >
            Dashboard
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default AppHeaderBar;
