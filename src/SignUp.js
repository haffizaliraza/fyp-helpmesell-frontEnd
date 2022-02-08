import React from "react";
import {useState} from "react";
import { Typography } from '@material-ui/core';
import { TextField } from '@material-ui/core';
import {makeStyles} from "@material-ui/core";
import {Container,Grid} from "@material-ui/core";
import {Link,useHistory} from "react-router-dom";
import {Box,Toolbar,ButtonGroup,Button,AppBar,IconButton} from "@material-ui/core";
import { Wave, Random } from 'react-animated-text';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';




const useStyles=makeStyles({
   field:{
       marginTop: 40,
       marginBottom: 10,
       left:1,
       top:-10,
       width:180,
       height:1,
       position:"relative",
       fontFamily:"serif",
       display:"block",

   },
    cont:{ marginTop:5,
        marginLeft:24,
        fontSize:30,
    },
    button:{
       position:"relative",
        top:30,
        left:300,
        maxHeight: 80,
        maxWidth: 100,
        fontFamily:"serif",
    },
    contain:{
       backgroundColor:"yellow",
    },
    mainTitle:{
       position:"relative",
        color:"slateblue",
        top:240,
        left:30,
        fontFamily:"serif",
        fontSize:80,
    },
    login:{
       position:"relative",
        left:770,
        fontSize:12,
        backgroundColor:"white",
        border:"blue",
        fontFamily:"serif",

    },
    bottom:{
      position:"relative",
        bottom:-120,
    },
   writeBottom:{
       position:"relative",
        left:340,
       fontFamily:"serif",
    },

    textLogo:
        {
            position:"relative",
            right:-90,
            top:250,
            fontSize:40,
            maxWidth: 530,
            fontWeight:400,
            fontFamily:"serif",
            color:"slateblue"
        },
    mainHandler:{
       position:"relative",
       left:850,
        top:-20,
        fontFamily:"serif",
    },
    title:{
       fontFamily:"serif",
    },
    uptoolbar:{
       height:10,

    }
})


function SignUp()
{     const classes =useStyles()
      const [firstName,setFirstName]=useState("");
      const [lastName,setLastName]=useState("");
      const [username,setUsername]=useState("");
      const[email,setEmail]=useState("");
      const[contactNo,setContactNo]=useState("");
      const[dob,setDob]=useState("");
      const[password,setPassword]=useState("");
      const [confirmPassword,setConfirmPassword]=useState("");

      const history=useHistory();

     async function Submit() {

         let item = {'first_name': firstName, 'last_name' : lastName, 'username' : username, 'email' : email,
             'contact_no':contactNo, 'dob':dob, 'password':password, 'confirm_password': confirmPassword};

         console.log(item)
         const requestOptions = {
             method: 'POST',
             headers: { 'Content-Type': 'application/json',
             "Accept":'application/json'},
             body: JSON.stringify(item)
             ,
         };
         try{
             const response = await fetch('https://finalproject-helpmesell.herokuapp.com/users/', requestOptions);
             const data = await response.json();
             this.setState({ postId: data.id });
             let auth = await response.json()
             if( response.status === 200 || response.status===201 ){
                 localStorage.setItem('token',JSON.stringify(data.token))
                 history.push('/login')
             }else{
                 this.setState({
                     error: data.error
                 })
             }

         }
         catch(error){
             console.log("error",error);
         }
     }


      function LoggingIn()
      {

          history.push('/login')

      }


    return(

    <div>

        <AppBar position="static">
            <Toolbar  className={classes.uptoolbar}>
                <Typography variant="h6" className={classes.title}>
                    HelpMeSell
                </Typography>
                <Typography className={classes.mainTitle} >HelpMeSell</Typography>
                <ButtonGroup>
              <Button  onClick={LoggingIn} className={classes.login}>Login</Button>
                    <Button className={classes.login}>Admin Portal</Button>
                </ButtonGroup>
            </Toolbar>
        </AppBar>

        <Typography className={classes.textLogo}><Wave  text="Make Your Buying Decisions        SMARTER!" effect="stretch" effectChange={1.2} /> </Typography>


        <form >
            <Box className={classes.mainHandler}
                sx={{
                    width: 430,
                    height: 370,
                    p:1,
                    border:'2px solid',
                    borderColor: '#89a0cc',
                    position:'relative',
                    borderRadius:4,
                    bgcolor:"",

                }}
            >
                <AppBar position="static">
                    <Toolbar>
                        <Typography variant="h5"className={classes.title} >
                            SignUp
                        </Typography>
                    </Toolbar>
                </AppBar>
                <Container >
            <Grid container direction={"row"} spacing={2}  >
                <Grid item xs={6}>

                  <TextField className={classes.field}  required value={firstName} onChange={(e)=>setFirstName(e.target.value)} id="outlined-basic" label="First Name" variant="outlined" size="small"  First Name/>
                </Grid>
                <Grid item xs={6}>
                  <TextField className={classes.field}  required value={lastName} onChange={(e)=>setLastName(e.target.value)} id="outlined-basic" label="Last Name" variant="outlined" size="small" Last Name/>
                </Grid>
            </Grid>

            <Grid container direction={"row"} spacing={2} >
                <Grid item xs={6} >
                  <TextField className={classes.field} required value={username} onChange={(e)=>setUsername(e.target.value)} id="outlined-basic" label="Username" variant="outlined" size="small" Username/>
                </Grid>
                <Grid item xs={6}>
                  <TextField className={classes.field} type={"email"} required value={email} onChange={(e)=>setEmail(e.target.value)} id="outlined-basic" label="Email" variant="outlined" size="small" Email/>
                </Grid>
            </Grid>

            <Grid container direction={"row"} spacing={2} >
                <Grid item xs={6}>
                  <TextField className={classes.field} type={"number"} required value={contactNo} onChange={(e)=>setContactNo(e.target.value)} id="outlined-basic" label="Contact No" variant="outlined"  size="small"  Contact No/>
                </Grid>
                <Grid item xs={6}>
                  <TextField className={classes.field}  required value={dob} onChange={(e)=>setDob(e.target.value)} id="outlined-basic" label="DOB" variant="outlined"  size="small" Dob />
                </Grid>
            </Grid>

            <Grid container direction={"row"} spacing={2}>
                <Grid item xs={6}>
                  <TextField className={classes.field} type={"password"} required value={password} onChange={(e)=>setPassword(e.target.value)} id="outlined-basic"   label="Password" variant="outlined" size="small" Password/>
                </Grid>
                <Grid item xs={6}>
                  <TextField className={classes.field}  type={"password"} required value={confirmPassword} onChange={(e)=>setConfirmPassword(e.target.value)}  id="outlined-basic" label="Confirm Password" variant="outlined" size="small" Confirm Password/>
                </Grid>
            </Grid>

                    <Button  className={classes.button} onClick={Submit} variant="contained" color="primary">
                        Signup
                    </Button>


                </Container>
            </Box>
        </form>

            <AppBar  className={classes.bottom} position="static" color="primary">
                <Container maxWidth="md">

                    <Toolbar>
                        <Typography className={classes.writeBottom} variant="body1" color="inherit" >
                            © 2019 Gistia
                        </Typography>

                    </Toolbar>
                </Container>
            </AppBar>

    </div>


);


}
export default SignUp;