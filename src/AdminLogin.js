import React, {useState} from "react";
import {useHistory} from "react-router-dom";
import {AppBar, Button, Container, Grid,Box, makeStyles, TextField, Toolbar, Typography} from "@material-ui/core";
import { Wave } from 'react-animated-text';



const useStyles=makeStyles({
    field: {
        marginTop: 50,
        marginBottom: 10,
        left: 25,
        top: 0,
        width: 180,
        height: 1,
        position: "relative",
        fontFamily: "serif",
        display: "block",
        fontStyle: "inherit",

    },
    login: {
        position: "relative",
        left: -540,
        fontSize: 11,
        backgroundColor: "white",
        border: "white",
        top:200,

    },
    button:{
        position:"relative",
        top:60,
        left:100,
        maxHeight: 80,
        maxWidth: 100,
        fontFamily:"serif",
    },
    cont:{ marginTop:5,
        marginLeft:24,
        fontSize:30,
    },
    bar:{
        height:50,
    },
    bartitle:{
        height: 46,
        position:"relative",
        left:-10,
        fontFamily:"serif",

    },
    bottom:{
        position:"relative",
        bottom:-150,
        left:-1,

    },

    mainHandler:{

        position:"relative",
        fontFamily: "serif",
    },
    title:{
        fontFamily:"serif",
    },
    textLogo: {
        position:"relative",
        left:340,
        top:200,
        fontSize:30,
        maxWidth: 500,
        fontWeight:400,
        fontFamily:"serif",
        color:"slateblue"

    },
    mainTitle:{
        position:"relative",
        color:"slateblue",
        top:200,
        left:440,
        fontFamily:"serif",
        fontSize:60,
    },

})
function AdminLogin()
{
    const history=useHistory();
    const [username,setUsername]=useState("");
    const[password,setPassword]=useState("");
    function Submit() {

        let item=[username,password];
        console.log(item)
        history.push('/adminmain')

    }

    const classes =useStyles()

    return(
        <div>

            <AppBar position="static">
                <Toolbar>
                    <Typography variant="h6" className={classes.title}>
                        HelpMeSell
                    </Typography>
                </Toolbar>
            </AppBar>
            <Typography className={classes.mainTitle} >HelpMeSell</Typography>
            <Typography className={classes.textLogo}><Wave  text="Make Your Buying Decisions                       SMARTER!" effect="stretch" effectChange={1.2} /> </Typography>

            <form>
                <Box
                    sx={{
                        width: 300,
                        height: 260,
                        p:1,
                        border:'2px solid',
                        borderColor:'#89a0cc',
                        left:750,
                        top:-30,
                        position:'relative',
                        borderRadius:4,
                        bgcolor:"",

                    }}
                >


                    <AppBar className={classes.bar} position="static">

                        <Toolbar>
                            <Typography className={classes.bartitle} variant="h5"  >
                               Admin Login
                            </Typography>
                        </Toolbar>
                    </AppBar>
                    <Container>
                        <Grid container direction={"column"} spacing={2}  >

                            <TextField  className={classes.field}  required value={username} onChange={(e)=>setUsername(e.target.value)} id="outlined-basic" label="Username" variant="outlined" size="small"  Username/>

                            <TextField className={classes.field}  required value={password} onChange={(e)=>setPassword(e.target.value)} id="outlined-basic" label="Password" variant="outlined" size="small" Password/>
                        </Grid>

                        <Button  className={classes.button} onClick={Submit} variant="contained" color="primary">
                            Login
                        </Button>

                    </Container>
                </Box>
                <AppBar  className={classes.bottom} position="static" color="primary">
                    <Container maxWidth="md">
                        <Toolbar>
                            <Typography className={classes.writebottom} variant="body1" color="inherit" >
                                © 2019 Gistia
                            </Typography>
                        </Toolbar>
                    </Container>
                </AppBar>
            </form>
        </div>
    );
}
export default AdminLogin