"use client"

import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';
import { Stack, useMediaQuery, useTheme } from '@mui/material';
import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from "swiper/modules";
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { ArrowBack, ArrowForward } from '@mui/icons-material';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

function ResponsiveAppBar() {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));
  const [swiperRef, setSwiperRef] = useState<any>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  const handleScroll = (scrollOffset: number) => {
    if (scrollRef.current) {
      scrollRef.current.scrollLeft += scrollOffset;
    }
  };
  return (
    <>
      {!isSmallScreen && <AppBar position="static" sx={{ backgroundColor: '#252F3D' }}>
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <Stack direction="row" alignItems="center" spacing={8}>
              <Stack spacing={1} direction="row" alignItems="center">
                <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-discount-check" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M5 7.2a2.2 2.2 0 0 1 2.2 -2.2h1a2.2 2.2 0 0 0 1.55 -.64l.7 -.7a2.2 2.2 0 0 1 3.12 0l.7 .7c.412 .41 .97 .64 1.55 .64h1a2.2 2.2 0 0 1 2.2 2.2v1c0 .58 .23 1.138 .64 1.55l.7 .7a2.2 2.2 0 0 1 0 3.12l-.7 .7a2.2 2.2 0 0 0 -.64 1.55v1a2.2 2.2 0 0 1 -2.2 2.2h-1a2.2 2.2 0 0 0 -1.55 .64l-.7 .7a2.2 2.2 0 0 1 -3.12 0l-.7 -.7a2.2 2.2 0 0 0 -1.55 -.64h-1a2.2 2.2 0 0 1 -2.2 -2.2v-1a2.2 2.2 0 0 0 -.64 -1.55l-.7 -.7a2.2 2.2 0 0 1 0 -3.12l.7 -.7a2.2 2.2 0 0 0 .64 -1.55v-1" /><path d="M9 12l2 2l4 -4" /></svg>
                <Typography noWrap>30-DAY SATISFACTION GUARANTEE</Typography>
              </Stack>

              <Stack spacing={1} direction="row" alignItems="center">
                <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-truck" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M7 17m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" /><path d="M17 17m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" /><path d="M5 17h-2v-11a1 1 0 0 1 1 -1h9v12m-4 0h6m4 0h2v-6h-8m0 -5h5l3 5" /></svg>
                <Typography noWrap>FREE DELIVERY ON ORDERS OVER $40.00</Typography>
              </Stack>

              <Stack spacing={1} direction="row" alignItems="center">
                <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-heart" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M19.5 12.572l-7.5 7.428l-7.5 -7.428a5 5 0 1 1 7.5 -6.566a5 5 0 1 1 7.5 6.572" /></svg>
                <Typography noWrap>50.000+ HAPPY CUSTOMERS</Typography>
              </Stack>

              <Stack spacing={1} direction="row" alignItems="center">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12.5562 3.99847C12.6593 3.89533 12.7173 3.75546 12.7173 3.60962C12.7173 3.46378 12.6593 3.32391 12.5562 3.22077L10.2231 0.887668C10.1194 0.787481 9.98047 0.732044 9.83626 0.733297C9.69206 0.73455 9.55411 0.792393 9.45213 0.894368C9.35016 0.996342 9.29232 1.13429 9.29106 1.2785C9.28981 1.42271 9.34525 1.56164 9.44544 1.66537L10.5421 2.76207C8.85129 2.85605 7.23032 3.4681 5.89932 4.5151C4.56831 5.56211 3.59175 6.99335 3.10221 8.61451C2.61268 10.2357 2.6339 11.9682 3.16298 13.5769C3.69207 15.1856 4.70339 16.5925 6.05963 17.6066C6.17633 17.6941 6.32301 17.7317 6.46742 17.711C6.61182 17.6904 6.74211 17.6133 6.82964 17.4966C6.91716 17.3799 6.95474 17.2332 6.93411 17.0888C6.91348 16.9444 6.83633 16.8141 6.71963 16.7266C5.41064 15.7481 4.47637 14.3506 4.07242 12.767C3.66847 11.1834 3.81922 9.50926 4.49956 8.02329C5.17991 6.53733 6.34879 5.32929 7.81153 4.60036C9.27427 3.87143 10.9426 3.66561 12.5386 4.01717L12.5562 3.99847ZM9.44544 17.9993L9.46304 17.9817C9.91184 18.0807 10.3771 18.1357 10.8534 18.1467L10.8468 18.1533C10.8738 18.1498 10.901 18.1483 10.9282 18.1489C12.4361 18.1645 13.9104 17.703 15.1402 16.8303C16.3701 15.9576 17.2925 14.7185 17.7756 13.2899C18.2587 11.8614 18.2778 10.3167 17.8302 8.87673C17.3825 7.43671 16.491 6.1751 15.2831 5.27227C15.2254 5.22893 15.1767 5.17464 15.1399 5.11249C15.1031 5.05034 15.0789 4.98155 15.0687 4.91005C15.0584 4.83855 15.0624 4.76574 15.0803 4.69577C15.0983 4.6258 15.1298 4.56005 15.1731 4.50227C15.2165 4.44449 15.2708 4.39581 15.3329 4.35901C15.3951 4.32221 15.4639 4.29801 15.5354 4.2878C15.6069 4.27758 15.6797 4.28155 15.7496 4.29948C15.8196 4.3174 15.8854 4.34893 15.9431 4.39227C17.2994 5.40636 18.3107 6.81326 18.8398 8.42195C19.3689 10.0306 19.3901 11.7632 18.9006 13.3843C18.411 15.0055 17.4345 16.4367 16.1035 17.4837C14.7724 18.5307 13.1515 19.1428 11.4606 19.2368L12.5562 20.3324C12.6088 20.3831 12.6507 20.4438 12.6795 20.5109C12.7083 20.578 12.7235 20.6502 12.7241 20.7232C12.7248 20.7962 12.7108 20.8687 12.6832 20.9362C12.6555 21.0038 12.6147 21.0652 12.5631 21.1169C12.5114 21.1685 12.45 21.2094 12.3824 21.237C12.3148 21.2647 12.2424 21.2786 12.1694 21.278C12.0963 21.2773 12.0242 21.2622 11.9571 21.2333C11.89 21.2045 11.8293 21.1626 11.7785 21.1101L9.44544 18.7781C9.39422 18.727 9.35358 18.6663 9.32585 18.5995C9.29812 18.5326 9.28385 18.461 9.28385 18.3887C9.28385 18.3163 9.29812 18.2447 9.32585 18.1779C9.35358 18.1111 9.39422 18.0504 9.44544 17.9993ZM13.5902 8.95947C13.6415 9.01056 13.6821 9.07125 13.7098 9.13807C13.7375 9.20489 13.7518 9.27652 13.7518 9.34887C13.7518 9.42121 13.7375 9.49285 13.7098 9.55967C13.6821 9.62648 13.6415 9.68718 13.5902 9.73827L10.2902 13.0383C10.2391 13.0895 10.1785 13.1301 10.1116 13.1579C10.0448 13.1856 9.97318 13.1999 9.90084 13.1999C9.82849 13.1999 9.75686 13.1856 9.69004 13.1579C9.62322 13.1301 9.56253 13.0895 9.51144 13.0383L7.86144 11.3883C7.75816 11.285 7.70014 11.1449 7.70014 10.9989C7.70014 10.8528 7.75816 10.7127 7.86144 10.6095C7.96471 10.5062 8.10478 10.4482 8.25084 10.4482C8.39689 10.4482 8.53696 10.5062 8.64024 10.6095L9.90084 11.8712L12.8114 8.95947C12.8625 8.90825 12.9232 8.86761 12.99 8.83988C13.0569 8.81216 13.1285 8.79788 13.2008 8.79788C13.2732 8.79788 13.3448 8.81216 13.4116 8.83988C13.4785 8.86761 13.5391 8.90825 13.5902 8.95947ZM5.50084 11C5.50084 9.54128 6.0803 8.14233 7.11175 7.11088C8.1432 6.07943 9.54214 5.49997 11.0008 5.49997C12.4595 5.49997 13.8585 6.07943 14.8899 7.11088C15.9214 8.14233 16.5008 9.54128 16.5008 11C16.5008 12.4587 15.9214 13.8576 14.8899 14.8891C13.8585 15.9205 12.4595 16.5 11.0008 16.5C9.54214 16.5 8.1432 15.9205 7.11175 14.8891C6.0803 13.8576 5.50084 12.4587 5.50084 11ZM11.0008 6.59997C9.83388 6.59997 8.71473 7.06354 7.88957 7.8887C7.06441 8.71386 6.60084 9.83302 6.60084 11C6.60084 12.1669 7.06441 13.2861 7.88957 14.1112C8.71473 14.9364 9.83388 15.4 11.0008 15.4C12.1678 15.4 13.2869 14.9364 14.1121 14.1112C14.9373 13.2861 15.4008 12.1669 15.4008 11C15.4008 9.83302 14.9373 8.71386 14.1121 7.8887C13.2869 7.06354 12.1678 6.59997 11.0008 6.59997Z" fill="white" />
                </svg>

                <Typography noWrap>100% MONEY BACK GUARANTEE</Typography>
              </Stack>
            </Stack>
          </Toolbar>
        </Container>
      </AppBar>}
      {isSmallScreen &&

        <AppBar position="static" sx={{ backgroundColor: '#252F3D' }}>
          <Container maxWidth="xl">
            <Toolbar disableGutters>
              <IconButton onClick={() => handleScroll(-100)}>
                <ArrowBackIosIcon sx={{color:'white'}} />
              </IconButton>
              <div style={{ overflowX: 'auto', display: 'flex' }} ref={scrollRef}>
                <Stack direction="row" alignItems="center" spacing={8}>
                  <Stack spacing={1} direction="row" alignItems="center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-discount-check" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M5 7.2a2.2 2.2 0 0 1 2.2 -2.2h1a2.2 2.2 0 0 0 1.55 -.64l.7 -.7a2.2 2.2 0 0 1 3.12 0l.7 .7c.412 .41 .97 .64 1.55 .64h1a2.2 2.2 0 0 1 2.2 2.2v1c0 .58 .23 1.138 .64 1.55l.7 .7a2.2 2.2 0 0 1 0 3.12l-.7 .7a2.2 2.2 0 0 0 -.64 1.55v1a2.2 2.2 0 0 1 -2.2 2.2h-1a2.2 2.2 0 0 0 -1.55 .64l-.7 .7a2.2 2.2 0 0 1 -3.12 0l-.7 -.7a2.2 2.2 0 0 0 -1.55 -.64h-1a2.2 2.2 0 0 1 -2.2 -2.2v-1a2.2 2.2 0 0 0 -.64 -1.55l-.7 -.7a2.2 2.2 0 0 1 0 -3.12l.7 -.7a2.2 2.2 0 0 0 .64 -1.55v-1" /><path d="M9 12l2 2l4 -4" /></svg>
                    <Typography noWrap>30-DAY SATISFACTION GUARANTEE</Typography>
                  </Stack>

                  <Stack spacing={1} direction="row" alignItems="center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-truck" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M7 17m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" /><path d="M17 17m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" /><path d="M5 17h-2v-11a1 1 0 0 1 1 -1h9v12m-4 0h6m4 0h2v-6h-8m0 -5h5l3 5" /></svg>
                    <Typography noWrap>FREE DELIVERY ON ORDERS OVER $40.00</Typography>
                  </Stack>

                  <Stack spacing={1} direction="row" alignItems="center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-heart" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M19.5 12.572l-7.5 7.428l-7.5 -7.428a5 5 0 1 1 7.5 -6.566a5 5 0 1 1 7.5 6.572" /></svg>
                    <Typography noWrap>50.000+ HAPPY CUSTOMERS</Typography>
                  </Stack>

                  <Stack spacing={1} direction="row" alignItems="center">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12.5562 3.99847C12.6593 3.89533 12.7173 3.75546 12.7173 3.60962C12.7173 3.46378 12.6593 3.32391 12.5562 3.22077L10.2231 0.887668C10.1194 0.787481 9.98047 0.732044 9.83626 0.733297C9.69206 0.73455 9.55411 0.792393 9.45213 0.894368C9.35016 0.996342 9.29232 1.13429 9.29106 1.2785C9.28981 1.42271 9.34525 1.56164 9.44544 1.66537L10.5421 2.76207C8.85129 2.85605 7.23032 3.4681 5.89932 4.5151C4.56831 5.56211 3.59175 6.99335 3.10221 8.61451C2.61268 10.2357 2.6339 11.9682 3.16298 13.5769C3.69207 15.1856 4.70339 16.5925 6.05963 17.6066C6.17633 17.6941 6.32301 17.7317 6.46742 17.711C6.61182 17.6904 6.74211 17.6133 6.82964 17.4966C6.91716 17.3799 6.95474 17.2332 6.93411 17.0888C6.91348 16.9444 6.83633 16.8141 6.71963 16.7266C5.41064 15.7481 4.47637 14.3506 4.07242 12.767C3.66847 11.1834 3.81922 9.50926 4.49956 8.02329C5.17991 6.53733 6.34879 5.32929 7.81153 4.60036C9.27427 3.87143 10.9426 3.66561 12.5386 4.01717L12.5562 3.99847ZM9.44544 17.9993L9.46304 17.9817C9.91184 18.0807 10.3771 18.1357 10.8534 18.1467L10.8468 18.1533C10.8738 18.1498 10.901 18.1483 10.9282 18.1489C12.4361 18.1645 13.9104 17.703 15.1402 16.8303C16.3701 15.9576 17.2925 14.7185 17.7756 13.2899C18.2587 11.8614 18.2778 10.3167 17.8302 8.87673C17.3825 7.43671 16.491 6.1751 15.2831 5.27227C15.2254 5.22893 15.1767 5.17464 15.1399 5.11249C15.1031 5.05034 15.0789 4.98155 15.0687 4.91005C15.0584 4.83855 15.0624 4.76574 15.0803 4.69577C15.0983 4.6258 15.1298 4.56005 15.1731 4.50227C15.2165 4.44449 15.2708 4.39581 15.3329 4.35901C15.3951 4.32221 15.4639 4.29801 15.5354 4.2878C15.6069 4.27758 15.6797 4.28155 15.7496 4.29948C15.8196 4.3174 15.8854 4.34893 15.9431 4.39227C17.2994 5.40636 18.3107 6.81326 18.8398 8.42195C19.3689 10.0306 19.3901 11.7632 18.9006 13.3843C18.411 15.0055 17.4345 16.4367 16.1035 17.4837C14.7724 18.5307 13.1515 19.1428 11.4606 19.2368L12.5562 20.3324C12.6088 20.3831 12.6507 20.4438 12.6795 20.5109C12.7083 20.578 12.7235 20.6502 12.7241 20.7232C12.7248 20.7962 12.7108 20.8687 12.6832 20.9362C12.6555 21.0038 12.6147 21.0652 12.5631 21.1169C12.5114 21.1685 12.45 21.2094 12.3824 21.237C12.3148 21.2647 12.2424 21.2786 12.1694 21.278C12.0963 21.2773 12.0242 21.2622 11.9571 21.2333C11.89 21.2045 11.8293 21.1626 11.7785 21.1101L9.44544 18.7781C9.39422 18.727 9.35358 18.6663 9.32585 18.5995C9.29812 18.5326 9.28385 18.461 9.28385 18.3887C9.28385 18.3163 9.29812 18.2447 9.32585 18.1779C9.35358 18.1111 9.39422 18.0504 9.44544 17.9993ZM13.5902 8.95947C13.6415 9.01056 13.6821 9.07125 13.7098 9.13807C13.7375 9.20489 13.7518 9.27652 13.7518 9.34887C13.7518 9.42121 13.7375 9.49285 13.7098 9.55967C13.6821 9.62648 13.6415 9.68718 13.5902 9.73827L10.2902 13.0383C10.2391 13.0895 10.1785 13.1301 10.1116 13.1579C10.0448 13.1856 9.97318 13.1999 9.90084 13.1999C9.82849 13.1999 9.75686 13.1856 9.69004 13.1579C9.62322 13.1301 9.56253 13.0895 9.51144 13.0383L7.86144 11.3883C7.75816 11.285 7.70014 11.1449 7.70014 10.9989C7.70014 10.8528 7.75816 10.7127 7.86144 10.6095C7.96471 10.5062 8.10478 10.4482 8.25084 10.4482C8.39689 10.4482 8.53696 10.5062 8.64024 10.6095L9.90084 11.8712L12.8114 8.95947C12.8625 8.90825 12.9232 8.86761 12.99 8.83988C13.0569 8.81216 13.1285 8.79788 13.2008 8.79788C13.2732 8.79788 13.3448 8.81216 13.4116 8.83988C13.4785 8.86761 13.5391 8.90825 13.5902 8.95947ZM5.50084 11C5.50084 9.54128 6.0803 8.14233 7.11175 7.11088C8.1432 6.07943 9.54214 5.49997 11.0008 5.49997C12.4595 5.49997 13.8585 6.07943 14.8899 7.11088C15.9214 8.14233 16.5008 9.54128 16.5008 11C16.5008 12.4587 15.9214 13.8576 14.8899 14.8891C13.8585 15.9205 12.4595 16.5 11.0008 16.5C9.54214 16.5 8.1432 15.9205 7.11175 14.8891C6.0803 13.8576 5.50084 12.4587 5.50084 11ZM11.0008 6.59997C9.83388 6.59997 8.71473 7.06354 7.88957 7.8887C7.06441 8.71386 6.60084 9.83302 6.60084 11C6.60084 12.1669 7.06441 13.2861 7.88957 14.1112C8.71473 14.9364 9.83388 15.4 11.0008 15.4C12.1678 15.4 13.2869 14.9364 14.1121 14.1112C14.9373 13.2861 15.4008 12.1669 15.4008 11C15.4008 9.83302 14.9373 8.71386 14.1121 7.8887C13.2869 7.06354 12.1678 6.59997 11.0008 6.59997Z" fill="white" />
                    </svg>

                    <Typography noWrap>100% MONEY BACK GUARANTEE</Typography>
                  </Stack>
                </Stack>
              </div>
              <IconButton onClick={() => handleScroll(100)}>
                <ArrowForwardIosIcon sx={{color:'white'}} />
              </IconButton>
            </Toolbar>
          </Container>
        </AppBar>
      }
    </>
  );
}
export default ResponsiveAppBar;