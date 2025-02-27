import React from 'react';
import GitHubIcon from '@mui/icons-material/GitHub';
import Divider from '@mui/material/Divider';
import { Box } from '@mui/material';
import InstagramIcon from '@mui/icons-material/Instagram';
import { NavLink } from 'react-router-dom';

const Footer = () => {
  return (
    <div style={{backgroundColor: "rgb(238,237,243)", paddingTop: "50px", marginTop: "0"}}>
      <Divider variant="middle" component="" />
      <Box 
        display="flex"
        justifyContent="center"
        alignItems="center"
        paddingTop="30px"
        >
        <NavLink to="https://github.com/mahalepranav"><GitHubIcon fontSize="large" color="primary" style={styles.icon} /></NavLink>
        <NavLink to="https://www.instagram.com/pranavmahale_?igsh=MWxjNjdxNTcyN3MzOQ=="><InstagramIcon fontSize="large" color="primary" style={styles.icon} /></NavLink>
      </Box>
      <div className="footer text-center pb-3 pt-4">
        <p>© 2025 Pranav Mahale. All rights reserved.</p>
      </div>
    </div>
  );
};

const styles = {
  icon: {
    margin: '0 10px', 
  },
}

export default Footer;
