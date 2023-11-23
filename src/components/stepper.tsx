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
        <Stepper connector={false} activeStep={2} alternativeLabel={label} 
        sx={{
          ".Mui-completed .MuiStepIcon-root": {
            color: "#85BF55",
          },
          ".MuiStepConnector-root": {
            top: 0,
          },
          ".MuiStepConnector-root span": {
            borderColor: "transparent",
          },
          ".MuiSvgIcon-root": {
            borderRadius: "50%",
            border: "1px solid #1976d2",
          },
          ".MuiSvgIcon-root:not(.Mui-completed)": {
            color: "white",
          },
          ".MuiStepIcon-text": {
            fill: "#1976d2",
            fontWeight: 500,
          },
          ".MuiSvgIcon-root.Mui-active": {
            color: "#2C7EF8",
            
          },
          ".Mui-active .MuiStepIcon-text": {
            fill: "white",
          },
        }}
        >
          {steps.map((label, index) => (
            <Step key={label}
            
            >
              <StepLabel sx={{ marginRight: { sm: '160px', xs: '10px' } }} color='black'
               >{label}</StepLabel>
            </Step>
          ))}
        </Stepper>
        }

    </Box>
  );
}