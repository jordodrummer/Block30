import React from 'react';
import { Typography, AppBar, CssBaseline, Toolbar } from '@mui/material';
import { PhotoCamera } from '@mui/icons-material';
import { useState, useEffect } from "react"
import { fetchPosts } from "./helpers/ajaxHelpers"
import { Outlet } from 'react-router';

function NavBar() {
  return (
    <AppBar position="relative">
    <Toolbar>
      <PhotoCamera />
      <Typography variant="h6">
        Photo Album
      </Typography>
    </Toolbar>
  </AppBar>
  )
}

export default function App() {

  const [posts, setPosts] = useState ([])
    useEffect(()=>{
        async function getPosts(){
            try {
                const posts = await fetchPosts()
                console.log(posts)
                setPosts(posts)
            } catch (error) {
                console.log(error)
            }
        }
    getPosts()
    },[])

const postState = {posts, setPosts}

  return (
    <>
      <CssBaseline />
     <NavBar />
     <Outlet context={postState}/>
    </>
  );
}

