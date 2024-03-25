import React, { useState } from 'react'
import {Box, Button,TextField, Typography } from "@mui/material"

const Auth = () => {
   const [isSignup, setIsSignup] = useState(false)

  return (
    <div>
      <form>
      <Box display="flex" flexDirection={"column"} 
      maxWidth={400} 
      alignItems="center"
      justifyContent={"center"}
      margin="auto"
      marginTop={5}
      padding={3}
      borderRadius={5}
      boxShadow={"5px 5px 10px #ccc"}
      sx={{
        ":hover":{
        boxShadow:'10px 10px 20px #ccc',
      }}}>
       <Typography variant='h2' padding={3} 
       textAlign="center">{isSignup ? "Signup" :"login"}</Typography>

       <TextField margin='normal' type={'text'} varient="outlined" placeholder='name'/>
      
       {isSignup && <TextField margin='normal'
       type={'email'}
       varient="outlined"placeholder='Email'/>}
       <TextField margin='normal'
       type={'password'} 
       varient="outlined"placeholder='Password'/>
        <Button  
        sx={{marginTop: 3, borderRadius: 3}}
        variant='contained'
         color="warning" > Login</Button>

    <Button onClick={() =>setIsSignup (!isSignup)}      sx={{marginTop: 3, borderRadius: 3}}
 > Change TO {isSignup ? "Login" :"Signup"}</Button>
      </Box>
      </form>
    </div>
  )
}

export default Auth
