import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Container } from '@mui/system';
import img1 from "../../../assets/images/header-img/Rariko transparent logo.png";

import "./navbar.css";

const drawerWidth = 240;
const navItems = ['About Us', 'Why us?', 'Our Product', 'FAQs'];

function DrawerAppBar(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        RariKo
      </Typography>
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem key={item} disablePadding>
            <ListItemButton sx={{ textAlign: 'center' }}>
              <ListItemText primary={item} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      
    </Box>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Container sx={{pt: {md: 5, xs: 2}}}>
    <Box sx={{ display: 'flex' }}  >
      <AppBar elevation={0} sx={{bgcolor: 'transparent', position: 'relative'}} component="nav" className="navbar" >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <div
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
          > 
          <div className="logo">
            <img src={img1} alt="img1" />
            <h1>Rari<span>Ko</span></h1>
          </div>
          </div>
          <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
              <Button key="about" sx={{ color: '#fff', textTransform: 'capitalize' }}>
                <a href="#about">About</a>
              </Button>
              <Button key="whyUs" sx={{ color: '#fff', textTransform: 'capitalize' }}>
                <a href= "#whyUs">Why us?</a>
              </Button>
              <Button key="product" sx={{ color: '#fff', textTransform: 'capitalize' }}>
                <a href= "#product">Our Product</a>
              </Button>
              {/* <Button key="investors" sx={{ color: '#fff' }}>
                <a href="#investors">Investors</a>
              </Button> */}
              <Button key="faq" sx={{ color: '#fff', textTransform: 'capitalize' }}>
                <a href="#faq">FAQs</a>
              </Button>
              <Button variant="contained" key="register" sx={{ color: '#fff' , textTransform: 'capitalize', bgcolor: '#562bff'}}>
                <a href="#register">Register Now</a>
              </Button>
          </Box>
        </Toolbar>
      </AppBar>
      <Box component="nav" classname="navbar">
        
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
      </Box>
      
    </Box>
    </Container>
  );
}

DrawerAppBar.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default DrawerAppBar;


