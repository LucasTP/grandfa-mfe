import * as React from 'react';
import { Box, AppBar, Toolbar, Typography } from '@mui/material';

type OwnProp = {
  title?: string;
};

const AppHeaderBar = ({ title = '' }: OwnProp) => {
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
            {title}
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default AppHeaderBar;
