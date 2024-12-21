import * as React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import { Dashboard, Emergency, ExitToApp, Fullscreen, MedicalInformation } from '@mui/icons-material';
import { NavLink, Outlet } from 'react-router-dom';
import { blue, grey } from '@mui/material/colors';
import { colors } from '@mui/material';

const drawerWidth = 240;

const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme }) => ({
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: `-${drawerWidth}px`,
    backgroundColor: '#d9d9d9', height: 'auto',
    variants: [
      {
        props: ({ open }) => open,
        style: {
          transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
          }),
          marginLeft: 0,
        },
      },
    ],
  }),
);

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme }) => ({
  transition: theme.transitions.create(['margin', 'width'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  variants: [
    {
      props: ({ open }) => open,
      style: {
        width: `calc(100% - ${drawerWidth}px)`,
        marginLeft: `${drawerWidth}px`,
        transition: theme.transitions.create(['margin', 'width'], {
          easing: theme.transitions.easing.easeOut,
          duration: theme.transitions.duration.enteringScreen,
        }),
      },
    },
  ],
}));

const DrawerHeader = styled('div')(({ theme }) => ({
  // backgroundColor: blue[700],
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: 'flex-end',
}));

export default function PersistentDrawerLeft() {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };
  
  return (
    <Box  sx={{ display: 'flex'}}>
      <CssBaseline />
      <AppBar position="fixed" open={open}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={[
              
              {
                mr: 2,
              },
              open && { display: 'none' },
            ]}
          >
            <MenuIcon />
          </IconButton>
          
            <img 
            className='h-8 w-8 mr-4 '
            src='logo.png'
            />
            <Typography variant="h6" noWrap component="div">
              Patient
            </Typography>
          
          
        </Toolbar>
      </AppBar>
      <Drawer
        sx={{ 
          width: drawerWidth,
          flexShrink: 0,
          
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
            backgroundColor: 'white',
            
          },
        }}
        variant="persistent"
        anchor="left"
        open={open}
      >
        <DrawerHeader>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
          </IconButton>
        </DrawerHeader>
        <Divider />
        <List>
  <NavLink
    to={'/home'}
    className={({ isActive }) =>
      `flex items-center w-full p-2 mb-2 rounded-lg
      hover:bg-orange-200 hover:text-black 
      ${isActive ? 'bg-orange-300 text-black' : 'text-black'}`
    }
  >
    <span>
      <Dashboard className="ml-2 mr-7" />
      Dashboard
    </span>
  </NavLink>

  <NavLink
    to={'/gejala'}
    className={({ isActive }) =>
      `flex items-center w-full p-2 mb-2 rounded-lg
      hover:bg-orange-200 hover:text-black 
      ${isActive ? 'bg-orange-300 text-black' : 'text-black'}`
    }
  >
    <span>
      <Emergency className="ml-2 mr-7" />
      Gejala
    </span>
  </NavLink>

  <NavLink
    to={'/konsultasi'}
    className={({ isActive }) =>
      `flex items-center w-full p-2 mb-2 rounded-lg
      hover:bg-orange-200 hover:text-black 
      ${isActive ? 'bg-orange-300 text-black' : 'text-black '}`
    }
  >
    <span>
      <MedicalInformation className="ml-2 mr-7" />
      Konsultasi
    </span>
  </NavLink>
</List>


            
          {/* {['Dashboard', 'Gejala', 'Konsultasi'].map((text, index) => (
            <ListItem key={text}  disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  {index % 3 === 0 ? <Dashboard /> :  index % 2 === 0 ? <MedicalInformation /> :<Emergency />}
                </ListItemIcon>
                <ListItemText primary={text} href />
              </ListItemButton>
            </ListItem>
          ))} */}
        
        
        <Divider />
        <List>
        
        <NavLink className="flex items-center w-full p-2" to={'/login'}>
            <span className="text-black" > <ExitToApp className="ml-2 mr-7"/>Log Out</span>

            </NavLink>
            
        </List>
      </Drawer>
      <Main open={open}>
        <DrawerHeader />
        <Outlet/>
      
      </Main>
    </Box>
  );
}