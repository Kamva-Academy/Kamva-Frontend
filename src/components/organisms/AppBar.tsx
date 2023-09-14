import { useState } from "react";
import {
  Box,
  IconButton,
  Stack,
  AppBar as MUIAppBar,
  Container,
  Toolbar,
} from "@mui/material";
import { Menu as MenuIcon } from '@mui/icons-material';
import Brand from 'components/atoms/Brand';
import AppBarButton from 'components/atoms/AppBarButton'
import AppBarLoginButton from "components/atoms/AppBarLoginButton";
import AppBarDrawer from "components/atoms/AppBarDrawer";

function AppBar() {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const items = [
    { href: '', title: 'دوره‌ها' },
    { href: '', title: 'دانستنی‌ها' },
    { href: 'https://kamva.academy/about-us', title: 'درباره ما' },
  ];

  return (
    <MUIAppBar position='relative' color='transparent'>
      <Toolbar disableGutters>
        <Container maxWidth='xl'>
          <Box sx={{ position: 'absolute', width: 'max-content', display: { xs: 'block', md: 'none' }, left: 0, right: 0, margin: 'auto', }}>
            <Brand />
          </Box>
          <Stack direction="row" alignItems="center" justifyContent="space-between">
            <Box sx={{ display: { xs: 'block', md: 'none' } }}>
              <IconButton onClick={() => setDrawerOpen(!drawerOpen)}>
                <MenuIcon fontSize={'large'} />
              </IconButton>
            </Box>
            <Stack direction={'row'} alignItems="center" justifyContent={'space-between'}
              spacing={4} sx={{ display: { xs: 'none', md: 'flex' } }}>
              {/* todo: this empty box is required due to MUI Stack bug */}
              <Box />
              <Brand />
              {items.map((item, index) => (
                <AppBarButton key={index} href={item.href} title={item.title} />
              ))}
            </Stack>
            <AppBarLoginButton />
          </Stack>
        </Container>
      </Toolbar>
      <AppBarDrawer items={items} setDrawerOpen={setDrawerOpen} drawerOpen={drawerOpen} />
    </MUIAppBar>
  )
}

export default AppBar;