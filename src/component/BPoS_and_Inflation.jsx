import React from 'react';
import {Box, Stack, Typography} from '@mui/material';
import Grid from '@mui/material/Grid2';

export const BPoS_and_Inflation = () => {
  return (
    <Box sx={{ flexGrow: 1, paddingX:18, backgroundColor: 'black' }}>
      <Grid container spacing={2} sx={{ backgroundColor: 'blue' }}>
        <Grid size={{ xs: 7 }} >
          <Stack spacing={2}>
            <Typography sx={{ color: 'white', backgroundColor: 'red' }}>Column 1 - Row 1</Typography>
            <Typography sx={{ color: 'white', backgroundColor: 'red' }}>Column 1 - Row 2</Typography>
            <Typography sx={{ color: 'white', backgroundColor: 'red' }}>Column 1 - Row 3</Typography>
          </Stack>
        </Grid>
        <Grid  size={{ xs: 5 }}>
          <Typography sx={{ color: 'white', backgroundColor: 'red', height: '100%', boxSizing: 'border-box' }}>
            Column 2
          </Typography>  
        </Grid>
      </Grid>
    </Box>
  );
};