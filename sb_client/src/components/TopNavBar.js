import React from 'react'
import { AppBar, Toolbar, IconButton, Typography } from '@material-ui/core'
import MenuIcon from '@material-ui/icons/Menu'
import { Link } from 'react-router-dom'


const ulStyle = {
    display: "flex", 
    width:"20%", 
    justifyContent: "space-around", 
    listStyle: "none"
  }


const TopNavBar = () => {
    return (
        
        <AppBar position="relative"color="secondary">
            <Toolbar>
                <IconButton color="secondary">
                    <MenuIcon />
                </IconButton>
                <Typography variant="h6" style={{ flexGrow: "1" }}>
                    Small Business Application
                </Typography>
                <ul style={ulStyle} className="nav-list" >
                    <li className="nav-list-item">
                        <Link to="/">Home</Link>
                    </li>
                    <li className="nav-list-item">
                        <Link to="/about">About</Link>
                    </li>
                    <li className="nav-list-item">
                        <Link to="/login">Login</Link>
                    </li>
                    <li className="nav-list-item">
                        <Link to="/listings">Listings</Link>
                    </li>
                    <li className="nav-list-item">
                        <Link to="/details/:id">Details</Link>
                    </li>
                </ul>
            </Toolbar>
        </AppBar>
    )
}

export default TopNavBar;