import * as React from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepButton from '@mui/material/StepButton';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { StepIcon, StepLabel, useMediaQuery, useTheme } from '@mui/material';
import { makeStyles } from '@mui/styles';

const steps1 = ['Step 1 :Cart Review', 'Step 2 :Checkout', 'Step 3 :Special Offer', 'Step 4 :Confirmation'];

const steps2 = ['Cart Review', 'Checkout', 'Special Offer', 'Confirmation']



export default function HorizontalNonLinearStepper() {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));
  const steps = isSmallScreen ? steps2 : steps1;
  const label = isSmallScreen ? true : false;



  return (
    <Box sx={{ width: '100%', display: 'flex', justifyContent: 'center', p: 2 }} >

      {// @ts-ignore
        <Stepper connector={false} activeStep={2} alternativeLabel={label} s>
          {steps.map((label, index) => (
            <Step key={label}
            >
              <StepLabel sx={{ marginRight: { sm: '160px', xs: '10px' } }} color='black' >{label}</StepLabel>
            </Step>
          ))}
        </Stepper>
        }

    </Box>
  );
}