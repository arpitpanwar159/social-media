import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {RouterProvider,  createBrowserRouter } from "react-router-dom"


import PostList, { postLoder } from './components/PostList.jsx'
import CreatePost, { createPostAction } from './components/CreatePost.jsx'
import App from './route/App.jsx'
const router=createBrowserRouter([{path:"/",element:<App/>, children:[{path:"/",element:<PostList/>,loader:postLoder},
  {path:"/create-post",element:<CreatePost/>,action:createPostAction}
  
]}
],{
  basename: "/social-media" // 👈 Yeh sahi jagah hai
})

createRoot(document.getElementById('root')).render(
  <StrictMode>
   <RouterProvider router={router}/>
  </StrictMode>,
)
