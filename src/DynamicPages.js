import React, {useEffect, useState} from "react"
import {Box} from "@material-ui/core";
import Drawer from '@mui/material/Drawer';
import ListSubheader from '@mui/material/ListSubheader';
import ListItemButton from '@mui/material/ListItemButton';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import AppsIcon from '@mui/icons-material/Apps';
import Collapse from '@mui/material/Collapse';
import { styled, alpha } from '@mui/material/styles';
import {BrowserRouter as Router,Link,Route} from 'react-router-dom'
import InputBase from '@mui/material/InputBase';
import {History} from "@material-ui/icons";
import { browserHistory } from "react-router";
import { useHistory } from "react-router-dom";
import SearchIcon from '@mui/icons-material/Search';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import LaptopMacIcon from '@mui/icons-material/LaptopMac';
import LogoutIcon from '@mui/icons-material/Logout';
import TableRow from '@mui/material/TableRow';
import DynamicPage from "./DynamicPages";
import  { Redirect } from 'react-router-dom'
import {
    makeStyles,
    List,
    ListItem,
    ListItemIcon,
    ListItemText,
    AppBar,
    Toolbar,
    Typography,
    ButtonGroup, Button
} from "@material-ui/core";
import EqualizerIcon from '@mui/icons-material/Equalizer';
import PaidRoundedIcon from '@mui/icons-material/PaidRounded';
import PhoneIphoneIcon from '@mui/icons-material/PhoneIphone';
import router from "react-router-dom/es/Router";
import withRouter from "react-router-dom/es/withRouter";


const drawerWidth = 240;
const useStyles=makeStyles({
    drawer:{
        width: drawerWidth,
        borderColor:"slateblue",
    },
    drawerPaper:{

        width: drawerWidth,
        boxSizing: 'border-box',
        borderColor:"slateblue",

    },
    active:{
        background:"slateblue",
    },
    title:{
        fontFamily:"serif",
    },
    uptoolbar:{
        height:10,
        width:-300

    },
    application:{
        right:-237,
        top:-0,
        position:"relative"

    },
    search:{
        left: 980,
    },

    searchmain:{
        border:"solid 2px",
        borderColor:"slateblue",
        left:550,
        top:180,
        position:"absolute",
        maxWidth:550,
    },

    font:{
        fontFamily:"serif",
        color:"slateblue",
    },
    card:{
        position:"relative",
        left:250,
        top:300,
    },
    app:{
        right:-240,
        position:"relative"
    },
    media:{
        position:"relative",
        color: "slateblue",
        fontFamily:"serif",
        display: "block",
        whiteSpace:"unset",
        width:100,
        overflow:"hidden",
        //textOverflow:"clip",
        border:1,
    },
    mediaImage:{
        position:"relative",
        color: "slateblue",
        fontFamily:"sans-serif",
        left:50,
        top:-45,
    },
    titile:
        { overflow:"hidden",
            left:650,
            top:160,
            position:"absolute",
            fontFamily:"serif",
            fontSize:54
        },
    listFont:{
        fontSize:14,
    }


})

const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
        backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
        marginLeft: theme.spacing(1),
        width: 'auto',
    },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    '& .MuiInputBase-input': {
        padding: theme.spacing(1, 1, 1, 0),
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(4)})`,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            width: '12ch',
            '&:focus': {
                width: '20ch',
            },
        },
    },
}));
function ProductDetails(props)
{  const classes=useStyles();
    const [open, setOpen] = React.useState(false)
    const [data,setData]=useState({})
    useEffect(()=> {


        fetch("https://cors-anywhere.herokuapp.com/{https://finalproject-helpmesell.herokuapp.com/product/}"+props.match.params.id)
            .then(res => res.json())
            .then(
                (result) => {
                    setData(result);
                }
                            );
    },[]);
    function handleClick() {
        setOpen(!open)
    }

    return(

        <div>

            <Typography  variant="h1" style={{left:300, top:300, position:"absolute"}}>Hello{props.match.params.id}</Typography>
            <Typography style={{left:300, top:300, position:"absolute"}}>Name:{data.product_name}</Typography>

            <Box sx={{ display: 'flex' }}>
                <Box sx={{ flexGrow: 5 }}>
                    <AppBar position="static" className={classes.application}>
                        <Toolbar>
                        </Toolbar>
                    </AppBar>
                </Box>
                <Drawer className={classes.drawer} variant="permanent" anchor="left"
                        classes={{paper:classes.drawerPaper}}>
                    <AppBar position="static">
                        <Toolbar  className={classes.uptoolbar}>
                            <Typography variant="h6" className={classes.title}>
                                HelpMeSell
                            </Typography>
                        </Toolbar>
                    </AppBar>
                    <List
                        sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}
                        component="nav"
                        aria-labelledby="nested-list-subheader"
                        subheader={
                            <ListSubheader component="div" id="nested-list-subheader">
                            </ListSubheader>
                        }
                    >
                        <ListItemButton component={Link} to="/marketsurvey">
                            <ListItemIcon>
                                <EqualizerIcon color={"primary"} />
                            </ListItemIcon>
                            <ListItemText primary="Market Survey" />
                        </ListItemButton>
                        <ListItemButton component={Link} to="/pricecomparison">
                            <ListItemIcon>
                                <PaidRoundedIcon  color={"primary"}/>
                            </ListItemIcon>
                            <ListItemText primary="Price Comparison"/>
                        </ListItemButton>
                        <ListItemButton onClick={handleClick}component={Link} to="/homepage" >
                            <ListItemIcon>
                                <AppsIcon color={"primary"}/>
                            </ListItemIcon>
                            <ListItemText primary="Category" />
                            {open ? <ExpandLess /> : <ExpandMore />}
                        </ListItemButton>
                        <Collapse in={open} timeout="auto" unmountOnExit>
                            <List component="div" disablePadding>
                                <ListItemButton sx={{ pl: 4 }}>
                                    <ListItemIcon>
                                        <PhoneIphoneIcon color={"primary"}/>
                                    </ListItemIcon>
                                    <ListItemText primary="Smartphones" />
                                </ListItemButton>
                                <ListItemButton sx={{ pl: 4 }}>
                                    <ListItemIcon>
                                        <LaptopMacIcon color={"primary"}/>
                                    </ListItemIcon>
                                    <ListItemText primary="Laptops" />
                                </ListItemButton>
                            </List>
                        </Collapse>
                        <ListItemButton component={Link} to="/">
                            <ListItemIcon>
                                <LogoutIcon color={"primary"} />
                            </ListItemIcon>
                            <ListItemText primary="Logout" />
                        </ListItemButton>
                    </List>
                </Drawer>
            </Box>
        </div>
    );

}
export default withRouter(ProductDetails);