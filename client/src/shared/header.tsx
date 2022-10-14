import {
  AppBar,
  Avatar,
  Box,
  darken,
  IconButton,
  Toolbar,
  Typography,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

const Header = () => {
  return (
    <AppBar
      position='static'
      sx={{
        backgroundColor: (theme) =>
          darken(theme.palette.background.default, 0.4),
      }}
    >
      <Toolbar
        variant='dense'
        sx={{
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <IconButton
            edge='start'
            color='inherit'
            aria-label='menu'
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant='h6' color='inherit' component='div'>
            dbruh
          </Typography>
        </Box>
        <Avatar sx={{ maxWidth: 24, height: 24 }}>N</Avatar>
      </Toolbar>
    </AppBar>
  );
};

export default Header;